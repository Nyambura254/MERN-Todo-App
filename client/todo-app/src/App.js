import React from 'react';

import './App.css';

import Header from './components/Header'
import addTodo from './components/addTodo'
import Todos from './components/Todos';
import { Provider } from './context';

function App() {
  return (
    <div className="app-container">
      <Provider>
        <Header></Header>
        <addTodo></addTodo>
        <Todos></Todos>
      </Provider>

    </div>

  );
}

export default App;
