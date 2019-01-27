import React from 'react';
import YearOfDay from './YearOfDay';
import TimeOfDay from './TimeOfDay';



class Greetings extends React.Component{


  render(){
    return(
      <div className='center'>
        <div>
        Year of the Day:[ if Jan the First display will be Happy New Year] 
        <YearOfDay /><br />
        Greetings : <TimeOfDay />
        </div>
      </div>
    )
  }

  


}
export default Greetings;

