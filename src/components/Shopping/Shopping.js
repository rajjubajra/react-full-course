import React from 'react';
import ShoppingItem from './ShoppingItem';
import Data from './Shopping.json';


class Shopping extends React.Component{
  constructor(){
    super();
    this.state = {
      shopping: Data
    }
  }
  
  handleChanged = (id) => {
      console.log('clicked on ', id)
      this.setState(preState => {
        const updateData = Data.map(item=>{
          if(id === item.id){
            /** update done visa versa */
             item.done = !item.done
          }
          return item
        })
        return{ 
          /** new array with updated value */
          shopping: updateData
        }

      })
  }


 
  render(){
    const listing = Data.map((item)=>{
      return <ShoppingItem 
           key={item.id} 
           item={item.item} 
           id={item.id} 
           done={item.done} 
           handleChanged={this.handleChanged} />
    })
  
    return(
      <div>
        <h3>Shopping List</h3>
        <div className="center">
          <div>{listing}</div>
        </div>
       
      </div>
    )
  }

}
export default Shopping;