import { useEffect, useState } from "react";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 7;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const buscarPeliculas = async () => {
    const url = "https://lucasmoy.dev/data/react/peliculas.json";

    const respuesta = await fetch(url);
    const json = await respuesta.json();

    setPeliculas(json);
  };

  //la misma llamada a una url externa pero con una funcion

  /*   async function buscarPeliculas () {
    const url = "https://lucasmoy.dev/data/react/peliculas.json";

    const respuesta = await fetch(url);
    const json = await respuesta.json();

    setPeliculas(json);
  }; */

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      ></Paginacion>
    </PageWrapper>
  );
}

export default App;
