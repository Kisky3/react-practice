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

  // add Todo method
  addTodo = (todoObj: any)=> {
    // get init todos
    const {todos} = this.state
    // add a new todo
    const newTodos = [todoObj, ...todos]
    // set new todos
    this.setState({todos: newTodos});

  }

    // delete todo method
    delTodo = (id: Date|Number)=> {
      // get init todos
      const {todos} = this.state
      let newTodos = todos.filter(todo=> todo.id !== id)
      if(window.confirm("Are you sure to delete this task?"))
      this.setState({todos: newTodos})
    }

    // handle check status
    handleCheck = (id: any, done: boolean) => {
      const {todos} = this.state
      const newTodos = todos.map((todoObj) => {
        if(todoObj.id === id) return {...todoObj, done};
        else return todoObj
      })
      //set new todos
      this.setState({todos: newTodos})
    }

  render() {
    const {todos} = this.state
    return (
      <div className="App todo-container">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} delTodo={this.delTodo} handleCheck={this.handleCheck}/>
          <Footer />
      </div>
    );
  }
}
