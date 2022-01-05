import React , { Component }from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
  
  //init state
  state = {
    todos:[
      {id: 1, name: 'Eat', done: false },
      {id: 2, name: 'SLEEP', done: true },
      {id: 3, name: 'PLAY GAME', done: false }
    ]
  }

  // a method, connect with child component input value
  addTodo = (todoObj: any)=> {
    // get init todos
    const {todos} = this.state
    // add a new todo
    const newTodos = [todoObj, ...todos]
    // set new todos
    this.setState({todos: newTodos});

  }

  render() {
    const {todos} = this.state
    return (
      <div className="App todo-container">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer />
        </div>
    );
  }
}
