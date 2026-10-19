import "./todoCounter.css";
/* una forma para hacer estilos en React es con objetos de JS
const estilos = {
  backgroundColor: "red",
};*/
function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span style={{ fontWeight: "bold" }}>{completed}</span> de{" "}
      <span style={{ fontWeight: "bold" }}>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
