import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

export const ToDo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
  return (
    <>
      <div className="ToDo">
        <p
          onClick={() => toggleComplete(task.id)}
          className={` ${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </p>
        <div style={{display:"flex", flexDirection: "row"}}>
          <div className="ed">
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => editToDo(task.id)}
            />
          </div>
          <div className="del">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteToDo(task.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
