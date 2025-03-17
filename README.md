# 📌 Documentación técnica

## 📌 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión recomendada: 22)
- npm

## 🚀 Instalación

Clona el repositorio e instala las dependencias con:

```bash
npm install
```

## 🛠️ Tecnologías utilizadas

- React
- CSS Modules con una librería propia
- React Router

### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

- He utilizado JS en vez de TS por ser un proyecto de pruebas.

- mini-tailwind.css es un archivo css que he copiado de otro proyecto mio personal y he modificado para que se ajuste a las necesidades de este proyecto.

Si hubiese utilizado directamente tailwind css posiblemente el desarrollo hubiese sido más rápido, además de que hubiese tenido más opciones de personalización y mas facil utilizar las media queries.

## 📂 Estructura

He estructurado el contenido de la prueba en la carpeta `public`, excepto data/sample.json. Al ser código JSON debe estar en SRC.

```php
📦 proyecto-raíz
 ┣ 📂 node_modules        # Dependencias del proyecto
 ┣ 📂 public              # Archivos estáticos (HTML, imágenes, etc.)
 ┣ 📂 src                 # Código fuente
 ┃ ┣ 📂 components        # Componentes reutilizables
 ┃ ┣ 📂 data              # Datos JSON
 ┃ ┃ ┗ 📜 sample.json     # Archivo JSON con datos
 ┃ ┣ 📂 styles            # Archivos de estilos
 ┃ ┣ 📜 App.css           # Estilos globales de la App
 ┃ ┣ 📜 App.js            # Componente principal de la App
 ┃ ┣ 📜 App.test.js       # Pruebas para App.js
 ┃ ┣ 📜 index.css         # Estilos generales
 ┃ ┣ 📜 index.js          # Punto de entrada de React
 ┃ ┣ 📜 reportWebVitals.js # Métricas de rendimiento
 ┃ ┣ 📜 setupTests.js     # Configuración de pruebas
 ┣ 📜 .gitignore          # Archivos ignorados por Git
 ┣ 📜 package-lock.json   # Bloqueo de dependencias
 ┣ 📜 package.json        # Configuración y dependencias del proyecto
 ┗ 📜 README.md           # Documentación del proyecto
```

## 💡 Decisiones técnicas

### Diseño

Se ha intentado seguir el mismo diseño que el presentado en la prueba, o lo más cercano a este. Se utiliza generalmente flexbox para estilizar y ubicar los elementos en la pantalla ya que es sencillo, fácil de usar y pproporciona un estandar para todo el proyecto.

### Cómo se ha utilizado ChatGPT

Si bien es cierto que chatgpt es una herramienta que puede ayudar a potenciar el desarrollo, como esto es una prueba técnica, he intentado utilizar ChatGPT lo menos posible. Sobre todo a modo de preguntas, pero no para generar código de una vez como tal. Lo he utilizado principalmente para:

1. Preguntas sobre la navegación (Routing)
2. Preguntas sobre el placeholder para la imagen (al final acabé implementandolo yo mediante onError de React)
3. Estilizar esta documentación
4. Algo de ayuda con los estilos CSS, preguntar dudas sobre como se posicionaba un elemento relative y absolute, preguntar como se hacía para que el footer siempre permaneciese pegado abajo, este tipo de cosas.

### El placeholder

Mira que me habia llevado tiempo intentarlo con un fetch, para que en caso de que diese error 404 la url de la imagen, se mostrase el placeholder. Pero no me ha dado tiempo a hacerlo. Así que he decidido hacerlo de esta manera.

```tsx
onError={(e) => {
  e.target.onerror = null;
  e.target.src = "https://placehold.co/100x150/444444/FFFFFF?text=Not+Available";
}}
```

Todo gracias a esta web: https://www.thatsoftwaredude.com/content/11661/4-tips-to-handle-404-images-on-your-websites

Así me ahorro problemas con el fetch y gano en eficiencia.

## 📌 Mejoras y próximos pasos

- He decidido modularizar Peliculas y Series en un comoponente 'media' que se encarga de mostrar las películas y series.
- En caso de que no esté la imagen, hay que mostrar algo, por lo que he añadido un placeholder con un texto que dice "Imagen no disponible".
- El footer se encuentra pegado a la parte de abajo de la pantalla, de tal manera aunque se aumente el zoom, se reduzca la pantalla o se scrollee, no queden espacios en blanco.

### ¿Hay alguna mejora que pueda hacer en su envío?

- Añadir las secciones de series y peliculas
- Corregir los iconos SVG de las películas, que se ven achatados por los lados debido a forzar la width y el height de las imágenes en la página principal
- Quizá estilizar el contenido para que no tenga ese fondo blanco. Haría un diseño más moderno.
- También reorganizaría la estructura de las carpetas, quizá algunas cosas las movería de public a src.
- En las series y películas, aplicar filtros, sorts, permitir al usuario elegir entre cards, listas, etc.
- Añadir linting
- Añadir tests
- Añadir un loading, puesto que las imagenes tardan algo en cargar

### ¿Qué haría de manera diferente si se le asignara más tiempo?

- **Utilizaría tailwind.css**. Aunque de momento he utilizado mi archivo mini-tailwind.css, utilizar Tailwind me ayudaría a mantener un diseño estándar en la aplicación, reducir código, ahorrar tiempo y la **posibilidad de hacer el diseño responsivo sin complicaciones** o media-queries específicas.

- Por supuesto, lo haría todo más profesional, cambiaría los estilos y modernizaría la web.

- CI/CD y Github actions

- Despliegue automático con Jenkins o Vercel.

- Crearía un componente solo para la sección, tal y como muestro en mi proyecto de next (en este caso está hecho con tailwind):

import React from "react";

interface SectionProps {
children: React.ReactNode;
className?: string;
fullWidth?: boolean;
}

```tsx
const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  fullWidth = false,
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div id="section-content" className={`mx-auto w-full`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
```

- Reorganizar las secciones y la estructura del proyecto en general.
- **Añadir variables de estilos** en tailwind por ejemplo para el max-width de 1000 o para los colores de la app.
- **Agregaria pruebas unitarias** con Jest y React Testing Library para validar el funcionamiento de los componentes clave.
- **Mejoraría la accesibilidad** asegurando que los elementos tengan etiquetas ARIA siguiendo las guidelines de la WCAG.
- **Añadir Linting**
