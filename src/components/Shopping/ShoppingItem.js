import React from 'react';




const ShoppingItem = (props) => {

  const fontstyle = {
     color: 'green',
     textDecoration: 'line-through'
  }
  
  
  return(
  <div>
    <input 
      type="checkbox" 
      checked={props.done} 
      onChange={() => props.handleChanged(props.id)}
    />
    <span style={props.done ? fontstyle : null} >{props.item}</span>
  </div>)
}
export default ShoppingItem;