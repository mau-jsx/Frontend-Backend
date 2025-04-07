# Frontend & Backend

Trabajo Práctico N° 1 para la materia Taller de Lenguajes de Programación III - React Native de la Tecnicatura Superior en Desarrollo de Software Multiplataforma.

## Descripción

Esta aplicación simple combina frontend y backend para mostrar un mensaje personalizado de bienvenida. El usuario puede ingresar su nombre en una interfaz web, enviar esta información al servidor mediante una solicitud GET, y recibir un mensaje personalizado de vuelta.

## Tecnologías utilizadas

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: HTML, CSS, JavaScript

## Requisitos previos

- Node.js
- npm (Node Package Manager)

## Estructura del proyecto

```
tp1-frontend-backend/
├── server.js         # Servidor backend con Express
├── package.json      # Configuración del proyecto raíz
├── client/           # Carpeta del frontend
│   ├── index.html    # Interfaz de usuario
│   ├── styles.css    # Estilos (opcional)
│   └── script.js     # Lógica del cliente (opcional)
└── README.md         # Este archivo
```

## Instalación

1. Clona este repositorio

```bash
git clone https://github.com/mau-jsx/frontend-backend.git
cd tp1-frontend-backend
```

2. Instala las dependencias del servidor

```bash
npm install express cors
```

## Ejecución

1. Inicia el servidor backend

```bash
node server.js
```

2. Abre el archivo `client/index.html` en tu navegador

   - Puedes utilizar una extensión como Live Server en VS Code
   - O simplemente abrirlo directamente desde el explorador de archivos

3. Ingresa tu nombre en el campo de texto y haz clic en el botón para ver el mensaje personalizado

## Funcionalidades

### Backend

- Servidor Node.js con Express que escucha en el puerto 3000
- Implementación de CORS para permitir solicitudes desde el frontend
- API con endpoint `/saludo/:nombre` que devuelve un mensaje personalizado

### Frontend

- Interfaz simple con campo de texto para ingresar el nombre
- Botón que envía la solicitud GET al servidor
- donde se muestra el mensaje de bienvenida recibido del servidor
