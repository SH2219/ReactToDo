import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
uuidv4();
import "./Style.css";
import EditToDoForm from "./EditToDoForm";
const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addToDo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    console.log("00000");
    setTodos(
      todos.map((todo) =>
        todos.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todos.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo=> todo.id === id? {...todo, task, isEditing : !todo.isEditing}: todo))
  } 
  return (
    <>
      <div className="wrapper text-center ">
        <ToDoForm addToDo={addToDo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditToDoForm editToDo={editTask} task={todo}/>
          ) : (
            <ToDo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteToDo={deleteToDo}
              editToDo={editToDo}
            />
          )
        )}
      </div>
    </>
  );
};

export default ToDoWrapper;
