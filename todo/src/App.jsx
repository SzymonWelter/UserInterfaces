import React, { Component } from "react";
import Input from "./Input.jsx";
import List from "./List.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      dones: []
    };
  }

  inputHandler = e => {
    e.preventDefault();

    if(!e.target.newtodo.value){
      return;
    }

    const newTodo = {
      id: generateId(),
      value: e.target.newtodo.value
    };

    this.setState(prev => ({
      todos: [...prev.todos, newTodo]
    }));

    e.target.reset();
  };

  moveToTodos = e => {
    this.move(e, 'dones', 'todos');
  };

  moveToDones = e => {
    this.move(e, 'todos', 'dones');
  };
  move = (e, source, destination) => {
    const newElem = this.state[source].filter(t => t.id === e.target.id).pop();
    this.setState(prev => ({
      [source]: prev[source].filter(t => t.id !== newElem.id),
      [destination]: [...prev[destination], newElem]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <Input name="newtodo" handler={this.inputHandler}></Input>
        <List
          name="To do"
          data={this.state.todos}
          checkHandler={this.moveToDones}
        ></List>
        <List
          name="Done"
          data={this.state.dones}
          checkHandler={this.moveToTodos}
          checked
        ></List>
      </div>
    );
  }
}

function generateId() {
  return [...Array(10)]
    .map(i => (~~(Math.random() * 36)).toString(36))
    .join("");
}

export default App;
