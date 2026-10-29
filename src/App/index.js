import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

/*const defaultTodos = [
  { text: "Aprender React", completed: true },
  { text: "Aprender React Native", completed: false },
  { text: "Aprender JavaScript", completed: false },
  { text: "Aprender Python", completed: true },
];

// Guardar en localStorage
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const emptyTodos = () => {
    console.log("EmptyTodos");
  };
  return (
    <AppUI
      loading={loading}
      error={error}
      emptyTodos={emptyTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
