import {Component} from "react";

class App extends Component {
  render(){
    return(
      <h1>Welcome to To Do List App</h1>
    )
  }
}
export default App;

// @import url("https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css");
// body{
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helevetica Neue', sans-serif;
//   -webkit-font-smoothing:antialiased;
//   -moz-osx-font-smoothing:grayscale;
// }

// code{
//   font-family: source-code-pro, merlo, Monaco, Conasolas, "Courier New",
//     monospace;
// }

// .center{
//   text-align: center;
// }

import {Component} from "react";
import ToDoScreen from "./screens/ToDoScreen"
class ToDoScreen extends Component {

  render(){
    return <h1 className="ui heading center">To Do List </h1>
}
}

// export default ToDoScreen;
import {Component} from "react";
import ToDoScreen from "./screens/ToDoScreen"
class ToDoScreen extends Component {

  render(){
    return <ToDoScreen />;
}
}
// export default ToDoScreen;