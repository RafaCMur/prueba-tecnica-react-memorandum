import { useNavigate } from "react-router-dom";
import "../styles/Inicio.css";
import Title from "./Title";

/* Componente con arrow function, sintaxis mas moderna */
const Inicio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title text="Popular Titles" />
      <section>
        <div className="mt-1 flex flex-row gap-1 flex-wrap">
          <div className="flex flex-col align-center justify-center">
            <div className="media-parent">
              <img
                className="child-img"
                src="/prueba-react/assets/placeholder.png"
                alt="Logo"
              />
              <div
                className="child-clickable"
                onClick={() => navigate("/series")}
              ></div>
              <span className="child-text">SERIES</span>
            </div>
            <p className="w-100 text-start">Series Populares</p>
          </div>

          <div className="flex flex-col align-center justify-center">
            <div className="media-parent">
              <img
                className="child-img"
                src="/prueba-react/assets/placeholder.png"
                alt="Logo"
              />
              <div
                className="child-clickable"
                onClick={() => navigate("/peliculas")}
              ></div>
              <span className="child-text">MOVIES</span>
            </div>
            <p className="w-100 text-start">Peliculas populares</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
