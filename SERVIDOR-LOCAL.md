# Abrir el portafolio localmente

No abras `index.html` mediante una dirección `file:///`. Edge comparte y conserva el zoom del origen local `file://`, por lo que una recarga puede mantener una escala distinta de 100 % que la página no tiene permiso para modificar.

Usa **`Abrir Portafolio Local.bat`**. Este inicia un servidor local y abre:

`http://127.0.0.1:4173/index.html`

En la pestaña `file:///` ya abierta, presiona `Ctrl + 0` para restablecer manualmente el zoom de Edge. Después puedes cerrarla y trabajar únicamente en la dirección `http://127.0.0.1:4173/`.
