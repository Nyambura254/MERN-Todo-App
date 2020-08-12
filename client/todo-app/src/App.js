import React from 'react';

import './App.css';

import Header from './components/Header'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from './context';

function App() {
  return (
    <div className="app-container">
      <Provider>
        <Header></Header>
        <AddTodo></AddTodo>
        <Todos></Todos>
      </Provider>

    </div>

  );
}

export default App;
