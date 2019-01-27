import React from 'react';


class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      firstname: '',
      lastname: '',
      gender: '',
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      text: '',
      country: ''
    }
  }


  handleOnChange = (event) => {
      const {name, value, type, checked } = event.target;
          type === 'checkbox' ?
          this.setState({[name]: checked})
          : this.setState({ 
          // [event.target.name]: event.target.value
          /** Better way setState change */
          [name]: value
          })
  }

  render(){
    return(
      <div className='center'>
      {/** LEFT COLUM FORM DISPLAY */}  
        <div className="row">
              <h3>Form</h3>
      {/** INPUT TEXT */}
              <p><input 
                type='text' 
                name='firstname' 
                onChange={this.handleOnChange} 
                value={this.state.firstname}
                placeholder='Firstname' /></p>

              <p><input 
                type='text' 
                name='lastname' 
                onChange={this.handleOnChange} 
                value={this.state.lastname}
                placeholder='Lastname' /></p>
      {/** RADIO BUTTON */}
             <p><label>Male</label>  <input 
                                          type="radio"
                                          name="gender" 
                                          value="male"    
                                          checked={this.state.gender === 'male'} 
                                          onChange={this.handleOnChange}
                                          /> 
                <label>Female</label>  <input 
                                          type="radio"
                                          name="gender" 
                                          value="female"    
                                          checked={this.state.gender === 'female'} 
                                          onChange={this.handleOnChange}
                                          /> 
             </p>
       {/** CHECKBOX */} 
            <h3>Checkbox</h3>        
              <p>
                <label>Box 1</label><input type="checkbox" 
                                            name="box1" 
                                            onChange={this.handleOnChange} 
                                            checked={this.state.box1} />
                <label>Box 1</label><input type="checkbox" 
                                            name="box2" 
                                            onChange={this.handleOnChange} 
                                            checked={this.state.box2} />
                <label>Box 1</label><input type="checkbox" 
                                            name="box3" 
                                            onChange={this.handleOnChange} 
                                            checked={this.state.box3} />
                <label>Box 1</label><input type="checkbox" 
                                            name="box4" 
                                            onChange={this.handleOnChange} 
                                            checked={this.state.box4} />
              </p>
        {/** TEXT ARE */}      
              <p><label>Text</label><textarea name="text" 
                                              onChange={this.handleOnChange} 
                                              value={this.state.text} /></p>

         {/** SELECT OPTIONS */}    
              <p>Select Option</p> 
              <p><select name="country" value={this.state.country} onChange={this.handleOnChange}>
                      <option value="UK">UK</option>
                      <option value="JP">JP</option>
                      <option value="USA">USA</option>
                </select></p>   
        </div> 

       

{/** RIGHT COLUM FORM VALUE DISPLAY */}
        <div className="row">
            <h3>Form Value</h3>
            <p><label>First name</label> {this.state.firstname}</p>
            <p><label>Last name</label> {this.state.lastname}</p>
            <p><label>Gender</label>{this.state.gender}</p>
            <p><label>Box 1</label>{this.state.box1 ? 'Yes' : null}</p>
            <p><label>Box 2</label>{this.state.box2 ? 'Yes' : null}</p>
            <p><label>Box 3</label>{this.state.box3 ? 'Yes' : null}</p>
            <p><label>Box 4</label>{this.state.box4 ? 'Yes' : null}</p>
            <p>Text Area</p>
            <p>{this.state.text}</p>
            <p>SELECT OPTION</p>
            <p>Country: {this.state.country}</p>
        </div>           
      </div>
    )
  }
}
export default Form;