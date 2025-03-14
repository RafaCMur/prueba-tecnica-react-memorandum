import React, { useEffect, useState } from "react";
import Title from "./Title";
import moviesAndSeries from "../data/sample.json";
import "../styles/Series.css";

const Series = () => {
  // Solo nos interesa guardar las series, no las películas
  const [filterSeries, setFilterSeries] = useState([]);

  /**
   * Filtramos las series y las guardamos en el estado
   * Utilizamos useEffect para que se ejecute solo una vez en el renderizado inicial del componente.
   * Por eso el [] vacío
   */
  useEffect(() => {
    if (moviesAndSeries.entries) {
      // Filtramos solo las series de la lista que contiene tanto películas como series
      const series = moviesAndSeries.entries.filter(
        (serie) => serie.programType === "series" && serie.releaseYear >= 2010
      );

      // Ordenamos las series alfabéticamente por título
      const sortedSeriesByTitle = series.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      setFilterSeries(sortedSeriesByTitle);
    }
  }, []);

  // Función que devuelve un array de JSX con las imágenes de las series
  const seriesAMostrarJSX = () => {
    return filterSeries.slice(0, 20).map((serie) => (
      <div
        className="series-card flex flex-col align-center justify-center"
        key={serie.title}
      >
        <img
          className="series-img"
          src={serie.images["Poster Art"].url}
          alt={serie.title}
        />
        <span>{serie.title}</span>
      </div>
    ));
  };

  // Función útil para mostrar en consola las series. Solo para debug.
  const consolelog = () => {
    console.log(moviesAndSeries);
    console.log(filterSeries);
  };

  return (
    <>
      <Title text="Series Populares" />
      <section>
        <button onClick={consolelog}>Mostrar en consola BOTON TEMPORAL</button>
        <div className="series-container flex flex-row flex-wrap justify-center gap-1">
          {seriesAMostrarJSX()}
        </div>
      </section>
    </>
  );
};

export default Series;
