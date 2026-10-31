/**
 * Optional static render for project detail pages.
 * The site already shows every `projects` entry without this step
 * (home card, catalog card, and proyecto.html?id=slug).
 * Run it when you want a crawlable page at proyectos/<slug>/index.html,
 * then commit the generated file.
 *
 *   node scripts/prerender-projects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/portfolio-data.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "data/project-page.js"), "utf8"), context);

const projects = (context.window.MPPortfolioData.projects || []).filter((project) => {
    return project && project.visible !== false && project.prerender !== false && (project.slug || project.id);
});
const pageApi = context.window.MPProjectPage;
const written = [];

for (const project of projects) {
    const slug = String(project.slug || project.id).trim();
    const dir = path.join(root, "proyectos", slug);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "index.html");
    fs.writeFileSync(file, pageApi.renderStaticDocument(project));
    written.push(`https://mpdesigns.xyz/proyectos/${slug}/`);
    console.log(`wrote proyectos/${slug}/index.html`);
}

const sitemapPath = path.join(root, "sitemap.xml");
if (fs.existsSync(sitemapPath) && written.length) {
    let sitemap = fs.readFileSync(sitemapPath, "utf8");
    const today = new Date().toISOString().slice(0, 10);
    for (const loc of written) {
        if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
        const block = [
            "  <url>",
            `    <loc>${loc}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            "    <changefreq>monthly</changefreq>",
            "    <priority>0.6</priority>",
            "  </url>"
        ].join("\n");
        sitemap = sitemap.replace("</urlset>", `${block}\n</urlset>`);
    }
    fs.writeFileSync(sitemapPath, sitemap);
    console.log("updated sitemap.xml");
}

if (!written.length) console.log("No visible projects to prerender.");
