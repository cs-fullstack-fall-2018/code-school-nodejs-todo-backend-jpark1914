import React, { Component } from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                username: "Jordan",
                todo: "clean room",
                isDone: false
                },
                {
                    username: "Jordan",
                    todo: "cut grass",
                    isDone: false
                },
                {
                    username: "Jordan",
                    todo: "cook dinner",
                    isDone: false
                }]
        }
    }

    render() {

      fetch('api/todos/Jordan')
          .then(data =>data.json()).then(response => this.setState({data:response}));
    return (
      <div className="App">
        <p className="App-intro">
            <ToDoList toDoArr={this.state.data}/>
        </p>
      </div>
    );
  }
}

export default App;
