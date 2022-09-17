import React from "react";

function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };
  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>

      <div className="pagination2">
        <span>
          Pagina {props.pagina} de {props.total}:
        </span>

        {/* otra forma de recorrer */}
        {/*  {Array.apply(0, Array(props.total)).map(value=> 
        <a className="active" href="#"> 1 </a>)} */}

        {getPaginas()}
      </div>
    </div>
  );
}

export default Paginacion;
