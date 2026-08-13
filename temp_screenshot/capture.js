const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    try {
        const executablePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
        
        console.log("Launching Edge...");
        const browser = await puppeteer.launch({
            executablePath: executablePath,
            headless: 'new',
            args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });

        console.log("Navigating to 5 elementos...");
        await page.goto("http://localhost:8080/proyectos/5elementos/index.html", { waitUntil: 'networkidle2' });
        await new Promise(r => setTimeout(r, 2000)); 
        await page.screenshot({ path: path.join(__dirname, '../images/5elementos-real.png') });
        console.log("Screenshot 1 saved");

        console.log("Navigating to Curativa...");
        await page.goto("http://localhost:8080/proyectos/curativa/index.html", { waitUntil: 'networkidle2' });
        await new Promise(r => setTimeout(r, 2000)); 
        await page.screenshot({ path: path.join(__dirname, '../images/curativa-real.png') });
        console.log("Screenshot 2 saved");

        await browser.close();
        console.log("Done!");
    } catch (e) {
        console.error(e);
    }
})();
