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
  render() {
    const {todos} = this.state
    return (
      <div className="App todo-container">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
    );
  }
}
