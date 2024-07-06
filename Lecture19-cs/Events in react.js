import {Component} from "react";

class ToDoScreen extends Component{

  render(){
    return (
    <>
    <div className="screen">
    <div><h1 className="ui-heading center">To Do List</h1></div>
    <div>
      <button onCLick={(e) => {
        console.log("Add Task button was clicked.")
      }} className="ui secondary button">Add Task</button>
    </div>
    </div>
    </>
    );
    
  }
}
export default ToDoScreen;
/*
.screen{
  padding: 5vh 10%; 
}
  */

import {Component} from "react";

class ToDoScreen extends Component{

  taskCount = 0;
  render(){
    return (
    <div className="screen">
    <div><h1 className="ui-heading center">To Do List</h1></div>
    <div>
      <button onCLick={(e) => {
        this.taskCount++;
        console.log(this.taskCount);
      }} className="ui secondary button">Add Task
      </button>
      <p>The number of tasks are: {this.taskCount}</p>
    </div>
    </div>
    );
    
  }
}
// export default ToDoScreen;

import {Component} from "react";

class ToDoScreen extends Component{

  state = {
  taskCount: 0,
  };
  render(){
    return (
    <div className="screen">
    <div><h1 className="ui-heading center">To Do List</h1></div>
    <div>
      <button onCLick={(e) => {
        this.setState({...this.state,taskCount: this.state.taskCount + 1,});
        console.log(this.taskCount);
      }} className="ui secondary button">Add Task
      </button>
      <p>The number of tasks are: {this.state.taskCount}</p>
    </div>
    </div>
    );
    
  }
}
// export default ToDoScreen;