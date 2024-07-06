/*
import ToDoScreen from "./screens/ToDoScreen";

const App = () =>{
  return <ToDoScreen />;
}

export default App;

import {use State} from "react";
const ToDoScreen = ()=>{

  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className="screen">
     <h1 className="ui heading center">To Do List</h1>
    </div>
     <button
        onClick={(e)=>{
         setTaskCount(taskCount + 1);
        }}
        className="ui secondary button"
      >
        Add Task
      </button>
      <p>The number of tasks are: {taskCount}</p>
    </div> 
  </div>
  )
}

import {use State} from "react";
const ToDoScreen = ()=>{

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="screen">
     <h1 className="ui heading center">To Do List</h1>
    </div>
     <button
        onClick={(e)=>{
         setTaskList([...taskList],{
         title: "Go to gym",
         description: "Going to gym is good for muscle growth."
         })
        }}
        className="ui secondary button"
      >
        Add Task
      </button>
      <p>The number of tasks are: {taskList.length}</p>
    </div> 
  </div>
  )
}

const Task = ()=> {
  return <h6>Task</h6>
}

export default Task;

import {use State} from "react";
const ToDoScreen = ()=>{

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="screen">
     <h1 className="ui heading center">To Do List</h1>
    </div>
     <button
        onClick={(e)=>{
         setTaskList([...taskList],{
         title: "Go to gym",
         description: "Going to gym is good for muscle growth."
         })
        }}
        className="ui secondary button"
      >
        Add Task
      </button>
       {taskList.map((task)) => <Task />}
    </div>  
  </div>
  )
}

*/