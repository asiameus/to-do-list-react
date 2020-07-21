import React from "react";
import "./style.css";

const TaskList = ({ tasks, hideDone, removeTask }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}
            >
                <button className="taskList__button taskList__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__name${task.done ? " taskList__name--done" : ""}`}>
                    {task.name}
                </span>
                <button
                    className="taskList__button taskList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default TaskList;