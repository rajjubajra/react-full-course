import React, { Component } from 'react';
import Greetings from './components/Greetings/Greetings';
import CarList from './components/CardList/CardList';
import TodoList from './components/TodoList/TodoList';
import Counter from './components/Counter/Counter';
import Shopping from './components/Shopping/Shopping';
import FetchData from './components/FetchData/FetchData';
import Form from './components/Form/Form';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <FetchData />
        <Shopping />
        <Counter />
        <TodoList />
        <CarList />
        <Greetings />
      </div>
    );
  }
}

export default App;
