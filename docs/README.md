# Documentación Técnica de Glizzy

Este documento detalla la estructura de carpetas del proyecto **Glizzy** y justifica las decisiones técnicas adoptadas durante su desarrollo.

## Estructura general del proyecto

### Separación de vistas por carpeta  
Cada página tiene su propia carpeta (`contact`, `config`, etc.) para mantener separados sus archivos HTML, CSS y, si aplica, JS individual. Esto permite una estructura modular y ordenada.

### Uso de carpeta `/shared`  
Los elementos reutilizables como estilos comunes, scripts compartidos y componentes modulares (por ejemplo, `navbar.html`) están centralizados en la carpeta `shared`, lo que facilita el mantenimiento global del sitio y evita duplicación de código.

### Estilo centralizado y personalizado  
- `vars.css` define las variables CSS globales (colores, tipografía, etc.).  
- `common.css` contiene los estilos universales aplicables a todo el sitio.  
- Cada vista posee su propio archivo CSS para tener control total sobre su apariencia específica.

### Modularización con JavaScript  
Se utilizó el archivo `incluirNavbar.js` para insertar dinámicamente el `navbar.html` en todas las vistas. Esto asegura consistencia en la navegación y evita tener que copiar y pegar el mismo código en múltiples archivos.

### Rutas absolutas  
Se optó por usar rutas absolutas (por ejemplo, `/index.html`) en los enlaces del `navbar` y otras partes del sitio. Esto garantiza que los enlaces funcionen correctamente sin importar desde qué subcarpeta se acceda a la página.


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
