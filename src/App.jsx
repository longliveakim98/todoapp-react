import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddToDo = (newTodo) => {
    const newToDoList = [...todos, newTodo];
    persistData(newToDoList);
    setTodos(newToDoList);
  };

  const handleDelete = (i) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== i;
    });
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handleEdit = (i) => {
    const editValue = todos[i];
    setInput(editValue);
    handleDelete(i);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddToDo={handleAddToDo}
        input={input}
        setInput={setInput}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
