import React, { useEffect, useState } from "react";
import Title from "./Title";
import moviesAndSeries from "../data/sample.json";
import Popup from "./Popup";
import "../styles/Media.css";

const Media = ({ programType }) => {
  // Solo nos interesa guardar los elementos filtrados (películas o series)
  const [filteredMedia, setFilteredMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null); // Este es el popup

  /**
   * Filtramos los elementos (películas o series) y los guardamos en el estado
   * Utilizamos useEffect para que se ejecute solo una vez en el renderizado inicial del componente.
   * Por eso el [] vacío
   */
  useEffect(() => {
    if (moviesAndSeries.entries) {
      // Filtramos solo los elementos de la lista que contiene tanto películas como series
      const media = moviesAndSeries.entries.filter(
        (item) => item.programType === programType && item.releaseYear >= 2010
      );

      // Después de filtrar, ordenamos: solo ordenamos lo filtrado. Mayor eficiencia
      // Ordenamos los elementos ahora y no luego en el renderizado. Ya de base los tenemos ordenados.
      const sortedMediaByTitle = media.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      setFilteredMedia(sortedMediaByTitle);
    }
  }, [programType]); // Esto es para que se ejecute solo una vez en el renderizado inicial del componente. Pero hay que añadir programType para que se ejecute cuando cambie.

  // Función que devuelve un array de JSX con las imágenes de los elementos filtrados
  // TODO De momento solo mostramos las 20 primeras sin paginacion
  const mediaAMostrarJSX = () => {
    return filteredMedia.slice(0, 20).map((item) => (
      <div
        className="media-card flex flex-col align-center justify-center"
        key={item.title}
      >
        <img
          className="media-img"
          src={item.images["Poster Art"].url}
          alt={item.title}
          onClick={() => setSelectedMedia(item)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x150/444444/FFFFFF?text=Not+Available";
          }}
        />
        <span>{item.title}</span>
      </div>
    ));
  };

  const titulo =
    programType === "movie" ? "Películas Populares" : "Series Populares";

  return (
    <>
      <Title text={titulo} />
      <section>
        <div className="media-container flex flex-row flex-wrap justify-center gap-1">
          {mediaAMostrarJSX()}
        </div>
        <Popup item={selectedMedia} onClose={() => setSelectedMedia(null)} />
      </section>
    </>
  );
};

export default Media;
