import React from "react";
import "./emptyTodos.css";

function EmptyTodos() {
  return (
    <div className="EmptyTodos-container">
      <p className="EmptyTodos-title">¡Crea tu primera tarea!</p>
      <p className="EmptyTodos-instructions">
        Haz clic en el botón azul <strong className="plus-accent">+</strong> de
        la esquina inferior derecha para añadir una nueva actividad a tu lista.
      </p>
    </div>
  );
}

export { EmptyTodos };
