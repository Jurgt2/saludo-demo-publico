# saludo-demo-publico (público)

Paquete de prueba para instalar con npm desde un repositorio **público** de GitHub, sin credenciales ni token.

**URL:** https://github.com/Jurgt2/saludo-demo-publico

Cualquier persona puede ver el código e instalar el paquete.

## Qué necesitas

- Node.js, npm y Git.

## Cómo ejecutarlo

1. En una carpeta nueva, crea un proyecto:

   ```bash
   npm init -y
   ```

2. Instala el paquete:

   ```bash
   npm install "git+https://github.com/Jurgt2/saludo-demo-publico.git#semver:^1.0.0"
   ```

3. Ejecútalo:

   ```bash
   node -e "console.log(require('saludo-demo-publico').saludar('Daniel'))"
   ```

## Lo que debe salir

```text
¡Hola, Daniel! Este paquete se instaló desde un repo público.
```

## Versión privada

Para probar la instalación desde un repo privado por SSH, usa [saludo-demo](https://github.com/Jurgt2/saludo-demo). Esa página solo se puede abrir con acceso al repo.
