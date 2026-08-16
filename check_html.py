import sys
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
    def handle_starttag(self, tag, attrs):
        if tag not in ['img', 'br', 'hr', 'input', 'link', 'meta']:
            self.stack.append((tag, self.getpos()))
    def handle_endtag(self, tag):
        if tag not in ['img', 'br', 'hr', 'input', 'link', 'meta']:
            if self.stack:
                last_tag, pos = self.stack.pop()
                if last_tag != tag:
                    self.errors.append(f'Mismatched tag: expected </{last_tag}> but got </{tag}> at {self.getpos()}')
            else:
                self.errors.append(f'Extra end tag: </{tag}> at {self.getpos()}')

parser = MyHTMLParser()
with open(r'c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\index.html', 'r', encoding='utf-8') as f:
    parser.feed(f.read())

if parser.errors:
    for e in parser.errors:
        print(e)
elif parser.stack:
    print('Unclosed tags:', parser.stack)
else:
    print('HTML is well-formed!')