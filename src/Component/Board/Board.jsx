import React, { useState } from 'react';
import './Board.css';
import { MoreHorizontal } from 'react-feather';

const Board = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (status) => {
    if (taskInput.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), title: taskInput, status },
      ]);
      setTaskInput('');
    }
  };

  const columns = [
    { key: 'backlog', title: 'Backlog' },
    { key: 'todo', title: 'To Do' },
    { key: 'inprogress', title: 'In Progress' },
    { key: 'done', title: 'Done' },
  ];

  return (
    <div className="board">
      {columns.map(({ key, title }) => (
        <div key={key} className="board_column">
          {/* Column Header */}
          <div className="board_top">
            <p className="board_top_title">
              {title}
              <span>
                {
                  tasks.filter((task) => task.status === key).length
                }
              </span>
            </p>
            <MoreHorizontal />
          </div>

          {/* Add Task Input */}
          {/* <div className="board_add_task">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder={`Add task to ${title}`}
              className="task_input"
            />
            <button
              onClick={() => handleAddTask(key)}
              className="add_task_button"
            >
              Add Task
            </button>
          </div> */}

          {/* <ul className="task_list">
            {tasks
              .filter((task) => task.status === key)
              .map((task) => (
                <li key={task.id} className="task_item">
                  {task.title}
                </li>
              ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default Board;
