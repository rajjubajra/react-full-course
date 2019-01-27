import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import Data from './TodoList.json';




class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: Data
    }
  }


  handlChange = (id) => {
    console.log('changed',id);
    this.setState(prevState => {
        const updatedData = prevState.todos.map((todo)=>{
          if(todo.id === id){
            /** update vise versa */
            todo.completed = !todo.completed
          }
            return todo
          })
          return{
            /** new array with updated value */
            todos: updatedData
          }
    })
  }

  render(){
      



       const items = Data.map( data => 
           <TodoItem  key={data.id} 
           text={data.text} 
           id={data.id}
           completed={data.completed} 
           handlChange={this.handlChange}
           /> )
        return(
          <div>
            <h3>To do List</h3>
            <div  className='center'>
              <div>
              {items}
              </div>
            </div>          
          </div>
        )
  }
  
  


}
export default TodoList;