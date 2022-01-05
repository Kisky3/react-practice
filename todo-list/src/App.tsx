import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <List />
        <Footer />
      </div>

    </div>
  );
}

export default App;
