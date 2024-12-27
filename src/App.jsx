import React from "react";
import "./App.css";
import Board from "./Component/Board/Board";
// import AddTask from "./AddTask/AddTask";

function App() {
  return (
    <>
      <div className="app">
        <div className="app_navbar">
          <h2>Scrum Board</h2>
        </div>
        {/* <AddTask/> */}

      <div className="container">
        <div className="box">
          <div className="col-md-4">


          <div className="board_add_task">
            <input
              type="text"
              // value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              // placeholder={`Add task to ${title}`}
              className="task_input"
            />
            <button
              // onClick={() => handleAddTask(key)}
              className="add_task_button"
            >
              Add Task
            </button>
          </div>

          </div>
        </div>
      </div>
   















        

        <div className="app_outer">
          <div className="app_boards">
            <Board />
         
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
