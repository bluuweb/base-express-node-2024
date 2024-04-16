# Proyecto con node.js

## Primeros pasos

Crear archivo:
```sh
index.js
```

Inicializar package.json
```sh
npm init -y
```

Instalar express
```sh
npm i express
```

Crear el:
```sh
.gitignore
```

```
node_modules
```

## Activar modulos es6

package.json
```json
"type": "module"
```

## Iniciar servidor:

Alternativa 1:
```sh
node index.js
```

Alternativa 2: Iniciar servidor con observable:
```sh
node --watch index.js
```

Alternativa 3 nodemon: es observar y reiniciar el servidor
```sh
npm i -D nodemon
```

## Configurar scripts

```json
"scripts": {
    "start": "node index.js",
    "watch": "node --watch index.js",
    "dev": "nodemon index.js"
},
```

Ejecutar script con:
```sh
npm run ...
```

