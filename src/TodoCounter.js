import React from "react";
import "./todoCounter.css";
/* una forma para hacer estilos en React es con objetos de JS
const estilos = {
  backgroundColor: "red",
  Has completado <span style={{ fontWeight: "bold" }}>{completed}</span> de{" "}
      <span style={{ fontWeight: "bold" }}>{total}</span> TODOs
};*/
function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      {completed !== total ? (
        <span>
          Has completado{" "}
          <strong style={{ fontWeight: "bold" }}>{completed}</strong> de{" "}
          <strong style={{ fontWeight: "bold" }}>{total}</strong> TODOs
        </span>
      ) : (
        "Felicitaciones, ¡has completado todas las actividades!"
      )}
    </h1>
  );
}

export { TodoCounter };
