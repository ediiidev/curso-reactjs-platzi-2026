import React from "react";
import "./todoCounter.css";
import { TodoContext } from "../TodoContext";
/* una forma para hacer estilos en React es con objetos de JS
const estilos = {
  backgroundColor: "red",
  
};*/
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      {completedTodos !== totalTodos ? (
        <span>
          Has completado{" "}
          <strong style={{ fontWeight: "bold" }}>{completedTodos}</strong> de{" "}
          <strong style={{ fontWeight: "bold" }}>{totalTodos}</strong> TODOs
        </span>
      ) : (
        "Felicitaciones, ¡has completado todas las actividades!"
      )}
    </h1>
  );
}

export { TodoCounter };
