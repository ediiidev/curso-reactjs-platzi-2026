import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateButton";

const defaultTodos = [
  { text: "Aprender React", completed: true },
  { text: "Aprender React Native", completed: false },
  { text: "Aprender JavaScript", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={2} total={3} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <div>{/* un ejercicio extra */}</div>
    </>
  );
}

export default App;
