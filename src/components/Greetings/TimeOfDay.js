import React from 'react';

class TimeOfDay extends React.Component{
    constructor(){
      super();
      this.state = {
        timeofDay: '',
        greetings: ''
      }
    }

 componentDidMount(){
    let date = new Date();
    let hour = date.getHours();
    let timeofDay;

    if(hour < 12){
      this.setState({timeofDay:  'Morning'});
    }else if(hour > 12 && hour < 17 ){
      this.setState({timeofDay: 'Afternoon'});
    }else if( hour >  17 && hour < 20 ){
      this.setState({timeofDay: 'Evening'});
    }else if( hour > 20 ){
      this.setState({timeofDay: "Night"});
    }

  }

  render(){
    return `Good ${this.state.timeofDay}`    
  }

}
export default TimeOfDay;