import React from 'react';
import styled from 'styled-components';




class Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    }

    
    // this.starCounting = this.starCounting.bind(this)
  }

  // starCounting(){
  //   this.setState( (prestate)=>{
  //       return{
  //         counter: prestate.counter + 1 
  //       } 
  //   })
  // }

  starCounting = () => {
    this.setState(preState => {
      return {
        counter: preState.counter +1
      }
    })
  }



  render(){
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <div className="center">
        <button onClick={this.starCounting}>Start Count</button>
        </div>
        
      </div>
    )
  }



}export default Counter;



