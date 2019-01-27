import React from 'react';

class YearOfDay extends React.Component{
    constructor(){
      super();
      this.state = {
        yearofDay: '',
        greetings: ''
      }
    }

 componentDidMount(){
    let dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth(); /** Jan 0 - Dec 11 */
    let date = dt.getUTCDate(); 
    let day = dt.getUTCDay(); /* Sun 1 - Sat 7 */
    let time = dt.getHours()
  
    
    let monthDay = `${month}${date}`;
    console.log('month and day', monthDay);
    
    let dayArr = ('Sun','Mon','Tue','Wed','Thu', 'Fri', 'Sat');

    switch(monthDay){
        case '01': /** 0 = Jan and 1 = first day */
        this.setState({yearofDay: `Happy New Year ${year}`});
        break;

        default:
        this.setState({yearofDay:  `${year}-${month + 1}-${date}` });
        break;
    }

  }

  render(){
    return(
      <div>
        {this.state.yearofDay}
      </div>
    ) 
  }

}
export default YearOfDay;