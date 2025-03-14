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
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => navigate("/series")}
          >
            <img
              className="placeholder-img"
              src="/prueba-react/assets/placeholder.png"
              alt="Logo"
            />
            <span>Popular Series</span>
          </div>

          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => navigate("/peliculas")}
          >
            <img
              className="placeholder-img"
              src="/prueba-react/assets/placeholder.png"
              alt="Logo"
            />
            <span>Popular Films</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
