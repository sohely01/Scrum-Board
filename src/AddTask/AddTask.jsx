import React, { useState } from 'react';
import './AddTask.css'

const AddTask = () => {
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

  ];

  return (
    <div className="Add_task">
      {columns.map(({ key, title }) => (
        <div key={key} className="Add_task_column">
          {/* Column Header */}
          <div className="task_top">
            <p className="task_top_title">{title}</p>
          </div>

          {/* Add Task Section */}
          <div className="board_add_task">
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
          </div>

          {/* Task List */}
          <ul className="task_list">
            {tasks
              .filter((task) => task.status === key)
              .map((task) => (
                <li key={task.id} className="task_item">
                  {task.title}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AddTask;
