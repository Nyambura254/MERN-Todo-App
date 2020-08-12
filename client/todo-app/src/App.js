import React from 'react';

import './App.css';

import Header from './components/Header'
import addTodo from './components/addTodo'
import Todos from './components/Todos';

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <addTodo></addTodo>
      <Todos></Todos>
    </div>

  );
}

export default App;
