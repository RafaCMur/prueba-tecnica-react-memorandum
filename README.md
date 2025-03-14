# Documentación prueba técnica Memorandum en React

He estructurado el contenido de la prueba en la carpeta `public`. Aunque quizá no es lo mejor, pero por ser un proyecto de pruebas, he decidido hacerlo así.

Me ha dado tiempo a crear lo que es la página principal solamente, pero he podido introducir React Routing. Perdí algo de tiempo en la creación y estructuración del proyecto, pero he podido hacer algo en el tiempo que tenía.

Además, practicamente opté por no utilizar chatgpt, solo para preguntarle dudas sobre la navegación de la página y sobre algún espacio que me quedaba en blanco arriba en el header.

## Mejoras

- He decidido modularizar Peliculas y Series en un comoponente 'media' que se encarga de mostrar las películas y series.
- En caso de que no esté la imagen, hay que mostrar algo, por lo que he añadido un placeholder con un texto que dice "Imagen no disponible".

## El placeholder

Mira que me habia llevado tiempo intentarlo con un fetch, para que en caso de que diese error 404 la url de la imagen, se mostrase el placeholder. Pero no me ha dado tiempo a hacerlo. Así que he decidido hacerlo de esta manera.

```tsx
onError={(e) => {
  e.target.onerror = null;
  e.target.src = "https://placehold.co/100x150/444444/FFFFFF?text=Not+Available";
}}
```

Todo gracias a esta web: https://www.thatsoftwaredude.com/content/11661/4-tips-to-handle-404-images-on-your-websites

Así me ahorro problemas con el fetch y gano en eficiencia.

## ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

- He utilizado JS en vez de TS por ser un proyecto de pruebas.

- mini-tailwind.css es un archivo css que he copiado de otro proyecto y he modificado para que se ajuste a las necesidades de este proyecto.

Si hubiese utilizado directamente tailwind css posiblemente el desarrollo hubiese sido más rápido, además de que hubiese tenido más opciones de personalización y mas facil utilizar las media queries.

## ¿Hay alguna mejora que pueda hacer en su envío?

- Añadir las secciones de series y peliculas
- Corregir los iconos SVG de las películas, que se ven achatados por los lados debido a forzar la width y el height de las imágenes en la página principal
- Quizá estilizar el contenido para que no tenga ese fondo blanco. Haría un diseño más moderno.
- También reorganizaría la estructura de las carpetas, quizá algunas cosas las movería de public a src.
- En las series y películas, aplicar filtros, sorts, permitir al usuario elegir entre cards, listas, etc.

## ¿Qué haría de manera diferente si se le asignara más tiempo?

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
- **Mejorar la organización** de los archivos css.
- **Añadir variables css** por ejemplo para el max-width de 1000.
- **Utilizaría media queries** para móvil.
- Quizá instalaría tailwind.css\*\* porque es algo estándar y ayudaría con el tema de las media queries. Pero de momento he utilizado mi archivo mini-tailwind.
- **Agregaria pruebas unitarias** con Jest y React Testing Library para validar el funcionamiento de los componentes clave.
- **Mejoraría la accesibilidad** asegurando que los elementos tengan etiquetas ARIA siguiendo las guidelines de la WCAG.
