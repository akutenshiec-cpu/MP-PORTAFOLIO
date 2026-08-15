import codecs

def fix_mojibake(text):
    replacements = {
        'Ã¡': 'á',
        'Ã©': 'é',
        'Ã­': 'í',
        'Ã³': 'ó',
        'Ãº': 'ú',
        'Ã±': 'ñ',
        'Ã\x81': 'Á',
        'Ã\x89': 'É',
        'Ã\x8d': 'Í',
        'Ã\x93': 'Ó',
        'Ã\x9a': 'Ú',
        'Ã\x91': 'Ñ',
        'Ã\xbc': 'ü',
        'Ã\x9c': 'Ü',
        'Â¿': '¿',
        'Â¡': '¡',
        'Â°': '°',
        'Ã\xa1': 'á', 
        'Ã\xa9': 'é',
        'Ã\xad': 'í', 
        'Ã\xb3': 'ó',
        'Ã\xba': 'ú',
        'Ã\xb1': 'ñ',
        'dejÃ¡ndola': 'dejándola',
        'HidrataciÃ³n': 'Hidratación',
        'ColÃ¡geno': 'Colágeno',
        'HialurÃ³nico': 'Hialurónico',
        'AdiÃ³s': 'Adiós',
        'LÃneas': 'Líneas',
        'LÃ­neas': 'Líneas',
        'ExpresiÃ³n': 'Expresión',
        'Ã cido': 'Ácido',
        'Ã\x82': 'Á',
        'JabÃ³n': 'Jabón',
        'CarbÃ³n': 'Carbón',
        'AlÃºa': 'Alúa',
        'ALÃšA': 'ALÚA',
        'FÃ³rmula': 'Fórmula',
        'RenovaciÃ³n': 'Renovación',
        'MÃ¡s': 'Más',
        'nutriciÃ³n': 'nutrición',
        'rÃ¡pida': 'rápida',
        'exfoliaciÃ³n': 'exfoliación',
        'PrevenciÃ³n': 'Prevención',
        'reducciÃ³n': 'reducción',
        'DÃa': 'Día',
        'dÃa': 'día',
        'Ãšnica': 'Única',
        'AÃ±adido': 'Añadido',
        'aÃ±adir': 'añadir',
        'MenÃº': 'Menú',
        'CatÃ¡logo': 'Catálogo',
        'CategorÃas': 'Categorías',
        'CosmÃ©tica': 'Cosmética',
        'alÃºa': 'alúa'
    }
    
    # Try generic mojibake fix first (encoding ISO-8859-1 back and decoding to UTF-8)
    try:
        # A typical mojibake string is a UTF-8 string that was decoded as CP1252.
        # Let's just do manual string replacement because it's safer than blindly re-encoding everything
        pass
    except Exception:
        pass
        
    for k, v in replacements.items():
        text = text.replace(k, v)
        
    # Also fix some other common ones
    text = text.replace("Ã", "í") # Some stray Ã usually are í if not followed by anything else (risky, but we replaced the main ones)
    text = text.replace("í³", "ó") # In case it was replaced partially
    text = text.replace("í¡", "á")
    text = text.replace("í©", "é")
    text = text.replace("í­", "í")
    text = text.replace("íº", "ú")
    text = text.replace("í±", "ñ")
    
    # Specific ones from the screenshot
    text = text.replace("Adiós Líneas de Expresión. Con Colígeno", "Adiós Líneas de Expresión. Con Colágeno")
    text = text.replace("í cido Hialurónico", "Ácido Hialurónico")
    text = text.replace("Lí­neas", "Líneas")
    text = text.replace("í\x82cido", "Ácido")
    
    return text

files = ['proyectos/curativa/script.js', 'proyectos/curativa/index.html']

for f_path in files:
    with codecs.open(f_path, 'r', 'utf-8') as f:
        content = f.read()
    fixed_content = fix_mojibake(content)
    with codecs.open(f_path, 'w', 'utf-8') as f:
        f.write(fixed_content)
