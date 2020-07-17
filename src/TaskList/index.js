import React from "react";
import "./style.css";

const TaskList = ({tasks, hideDoneTasks}) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hidden" : ""}`}
            >
                <button className="taskList__button taskList__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__name${task.done ? " taskList__name--done" : ""}`}>
                    {task.name}
                </span>
                <button className="taskList__button taskList__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default TaskList;