# Documentación Técnica de Glizzy

Este documento detalla la estructura de carpetas del proyecto **Glizzy** y justifica las decisiones técnicas adoptadas durante su desarrollo.

## Estructura general del proyecto

/
├── index.html                   (Vista principal de la revista)
├── views/
│   ├── contact/                (Vista y lógica del formulario de contacto)
│   ├── config/                 (Vista y lógica para configuración del perfil y contraseña)
├── shared/
│   ├── css/
│   │   ├── vars.css            (Variables CSS del proyecto)
│   │   ├── common.css          (Estilos comunes reutilizados)
│   ├── js/
│   │   ├── contactoForm.js     (Lógica JS del formulario de contacto)
│   │   ├── configForms.js      (Lógica JS de la configuración)
│   ├── assets/
│       └── img/                (Imágenes utilizadas en las vistas)
├── docs/
│   └── README.md               (Explicación técnica y justificación del proyecto)
└── README.md                   (Este archivo)


## Justificación de Decisiones Técnicas

### 1. Separación por Vistas
El proyecto se organiza en carpetas por vista (`/contact`, `/config`, etc.), lo que permite mantener un orden claro y modular, facilitando la escalabilidad y el mantenimiento.

### 2. CSS Global y Local
Se adoptó una división entre:
- **`vars.css`**: para definir variables globales como colores o fuentes.
- **`common.css`**: para estilos reutilizables (tipografía, botones, márgenes, etc.).
- **Estilos locales por vista**: cada página tiene su propio archivo `.css`, aislando sus reglas.

Esto facilita el mantenimiento de estilos, promueve la reutilización y permite cambios sin efectos colaterales.

### 3. Carpeta `/assets/img`
Centralizamos todas las imágenes del sitio en una carpeta única para un acceso más claro y un control visual uniforme.

### 4. Uso de Bootstrap de forma selectiva
En vez de aplicar Bootstrap globalmente, solo se utilizaron componentes puntuales (como `Navbar`, `Carousel`, `Cards`). Esto asegura que el estilo personalizado original del sitio no se vea afectado.

### 5. JavaScript modular y con Fetch API
Cada formulario relevante cuenta con su propio archivo `.js` para:
- Enviar datos usando `fetch()` a `https://jsonplaceholder.typicode.com/posts`
- Capturar respuestas exitosas
- Guardar los resultados en `localStorage`
