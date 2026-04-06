# 🏨 Hostal Encantos — Landing Page

> **Landing page moderna y minimalista** para un hostal real ubicado en Tacna, Perú.  
> Desarrollada íntegramente con **Vanilla JavaScript, HTML5 y CSS3** — sin frameworks, sin dependencias innecesarias.



***

## 📌 Sobre el Proyecto

Este proyecto nació como una solución real para un negocio de hospedaje local. El objetivo fue crear una presencia digital profesional que permitiera al hostal **mostrar sus habitaciones, comunicar sus servicios y recibir consultas directas** sin depender de plataformas de terceros.

Está diseñado pensando en **dos usuarios distintos**:
- El **huésped**, que necesita navegar fácilmente y contactar en segundos.
- El **administrador**, que puede actualizar habitaciones y servicios editando un solo archivo `data.js`.

***

## ✨ Funcionalidades

### 🔹 Navegación fija con efecto scroll
Navbar transparente que cambia a fondo oscuro al hacer scroll. En móvil se convierte en menú hamburguesa con animación fluida.

***

### 🔹 Carrusel Hero con animaciones
Carrusel automático con transiciones suaves, puntos indicadores y controles manuales. Cada slide tiene animaciones de entrada escalonadas para el título, subtítulo y botones CTA.

![Imagen de portada](/assets/images/Readme/img1.png)

***

### 🔹 Habitaciones — Data-driven
Las tarjetas se generan dinámicamente desde el archivo `data.js`. Para agregar o editar una habitación, el administrador solo modifica ese archivo. Incluye badge, precio, capacidad, tamaño y amenidades.

![Imagen de portada](/assets/images/Readme/img2.png)

***

### 🔹 Servicios
Grid de tarjetas con íconos SVG inline. Al igual que las habitaciones, todo viene del archivo de datos — fácil de escalar.

![Imagen de portada](/assets/images/Readme/img3.png)

***

### 🔹 Galería con Lightbox
Grid asimétrico tipo editorial con soporte para imágenes "wide" (doble columna). Click en cualquier imagen para abrirla en un lightbox con overlay oscuro.

![Imagen de portada](/assets/images/Readme/img4.png)

***

### 🔹 Ubicación
Información de contacto estructurada con íconos e integración preparada para Google Maps embed. Botón directo a Google Maps.



***

### 🔹 Contacto multicanal
Tres canales de contacto directo: **WhatsApp** (con mensaje predefinido), **llamada telefónica** y **Facebook**. El formulario envía el mensaje directamente a WhatsApp al hacer submit.

![Imagen de portada](/assets/images/Readme/img5.png)

***

## 🛠️ Stack Técnico

| Tecnología | Uso |
|---|---|
| **HTML5 semántico** | Estructura accesible con etiquetas `<nav>`, `<section>`, `<article>`, `<footer>` |
| **CSS3 custom properties** | Sistema de diseño con variables (`--color-*`, `--space-*`, `--text-*`) |
| **Vanilla JavaScript ES6+** | Carrusel, render dinámico, IntersectionObserver, DOM manipulation |
| **Google Fonts** | Playfair Display (display) + Work Sans (body) |
| **SVG inline** | Logo, íconos y decoración sin dependencias externas |

***

## 📁 Estructura del Proyecto

```
hostal-encantos/
├── hostal-encantos.html     ← Entrada principal
└── assets/
    ├── css/
    │   └── style.css        ← Design tokens + componentes
    └── js/
        ├── data.js          ← ⚙️ Datos administrables (habitaciones, servicios, galería)
        └── main.js          ← Lógica: carrusel, render, animaciones, nav
```

### ⚙️ ¿Cómo actualiza el contenido el administrador?

Solo edita `data.js`. No necesita tocar HTML ni CSS.

```js
// Agregar una habitación nueva — solo copia y pega este bloque:
{
  id: 5,
  name: "Habitación Triple",
  price: 110,
  description: "Perfecta para grupos pequeños.",
  capacity: 3,
  bed: "1 cama de 2 plazas",
  availability: "¡Últimas disponibles!",
  amenities: ["WiFi", "TV", "Baño privado"],
  badge: null,
  image: "./assets/images/triple.jpg"
}
```

***

## 📱 Diseño Responsivo

Funciona en todos los dispositivos sin librerías externas.

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Grid de 2 columnas, navbar completa |
| `768px – 1024px` | Grid adaptado, columnas reducidas |
| `< 768px` | Una columna, menú hamburguesa |
| `< 480px` | Galería de columna única, stats apilados |

***

## 🎨 Sistema de Diseño

Paleta **Rojo carmesí + Negro + Crema cálida** con escala tipográfica fluida mediante `clamp()` y espaciado basado en unidad de `4px`.

```css
--color-primary:  #c01e2e;   /* Rojo carmesí */
--color-dark:     #0f0b08;   /* Negro cálido */
--color-bg:       #faf8f5;   /* Crema */
--font-display:   'Playfair Display', serif;
--font-body:      'Work Sans', sans-serif;
```

***

## 💼 ¿Por qué está en mi portafolio?

Este proyecto demuestra que puedo:

- Diseñar y desarrollar una **solución web completa para un cliente real**, desde cero.
- Aplicar principios de **UX/UI**: jerarquía visual, tipografía, accesibilidad y responsividad.
- Escribir **JavaScript modular y limpio** sin depender de frameworks.
- Pensar en el **administrador del negocio**: separación de datos y presentación para facilitar el mantenimiento.
- Tomar decisiones de **arquitectura CSS** con custom properties y diseño escalable.

> Fue concebido también como **propuesta comercial** para un hostal en Tacna, con precio de lanzamiento + plan de mantenimiento mensual — lo que me permite mostrarlo como un producto real con valor de negocio, no solo un ejercicio técnico.

***

## 🚀 Uso Local

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/hostal-encantos.git

# 2. Abre el archivo principal en tu navegador
# No requiere servidor ni instalación de dependencias
open hostal-encantos.html
```

***

## 📄 Licencia

MIT — libre de usar como referencia o punto de partida para proyectos similares.

***

<p align="center">Desarrollado por <strong>John Arias</strong> · Tacna, Perú · 2026</p>