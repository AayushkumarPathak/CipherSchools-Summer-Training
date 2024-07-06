/*React Components
1. Some Logic
2. Some UI Code

1.React Components are LIKE functions.
2. They contain some logical code and they return some logical UI.
3. Just like functions, they accept arguments that can control the UI/loogic of the component
4. Rendering a component is like calling a function.
5. In react a component can be represented by a JS class or a JS function.*/

import logo from "./logo.svg"
import "./App.css"

class App extends Component{
 render() {
  return (
    <div>
      <h1>This is CipherSchools!</h1>
    </div>
  )
 } 
}

import logo from "./logo.svg"
import "./App.css"

class App extends Component{
 name = "CipherSchools";
 render() {
  return (
    <>
    <div>
      <h1>This is {this.name}!</h1>
    </div>
    <div>
      <p>This is paragraph and the name is: ${name}</p>
    </div>
    </>
  )
 } 
}