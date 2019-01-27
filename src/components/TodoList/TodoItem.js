import React from 'react';


const TodoItem = (props) => {
  console.log('PROPS',props);

  return(
    <p>
      <input type="checkbox"  
      checked={props.completed} 
      onChange={()=> props.handlChange(props.id)} />
      {props.text}
    </p>
  )
}
export default TodoItem;

