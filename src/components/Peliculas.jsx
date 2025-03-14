import React, { useEffect, useState } from "react";
import Title from "./Title";
import moviesAndSeries from "../data/sample.json";
import "../styles/Peliculas.css";

const Peliculas = () => {
  // Solo nos interesa guardar las películas, no las series
  const [filterMovies, setFilterMovies] = useState([]);

  /**
   * Filtramos las películas y las guardamos en el estado
   * Utilizamos useEffect para que se ejecute solo una vez en el renderizado inicial del componente.
   * Por eso el [] vacío
   */
  useEffect(() => {
    if (moviesAndSeries.entries) {
      // Filtramos solo las películas de la lista que contiene tanto películas como series
      const movies = moviesAndSeries.entries.filter(
        (movie) => movie.programType === "movie" && movie.releaseYear >= 2010
      );

      // Después de filtrar, ordenamos: solo ordenamos lo filtrado. Mayor eficiencia
      // Ordenamos las películas ahora y no luego en el renderizado. Ya de base las tenemos ordenadas.
      const sortedMoviesByTitle = movies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      setFilterMovies(sortedMoviesByTitle);
    }
  }, []);

  // Función que devuelve un array de JSX con las imágenes de las películas
  // TODO De momento solo mostramos las 20 primeras sin paginacion
  const peliculasAMostrarJSX = () => {
    return filterMovies.slice(0, 20).map((movie) => (
      <div
        className="movie-card flex flex-col align-center justify-center"
        key={movie.title}
      >
        <img
          className="movie-img"
          key={movie.title}
          src={movie.images["Poster Art"].url}
          alt={movie.title}
        />
        <span>{movie.title}</span>
      </div>
    ));
  };

  // Funcion util para mostrar en consola las películas clickando por ejemplo un botón. No es necesario para la tarea.
  const consolelog = () => {
    console.log(moviesAndSeries);
    console.log(filterMovies);
  };

  return (
    <>
      <Title text="Películas Populares" />
      <section>
        <button onClick={consolelog}>Mostrar en consola BOTON TEMPORAL</button>
        {/* Debemos hacer un carousel de imagenes */}
        {/* Con la imagen extraida de la propieadad images.Poster Art de cada película */}
        {/* Ahora de 10 en 10 */}

        <div className="movie-container flex flex-row flex-wrap justify-center gap-1">
          {peliculasAMostrarJSX()}
        </div>
      </section>
    </>
  );
};

export default Peliculas;
