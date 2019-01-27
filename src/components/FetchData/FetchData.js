import React from 'react';



class FetchData extends React.Component{
   constructor(){
     super();
     this.state = {
       loading: false,
       charecters: {}
     }
   }


   componentDidMount(){
     this.setState({loading: true})
     fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
      //  .then(data => console.log('ApiData : ',data))
        .then(data=> {
                this.setState({
                  loading: false,
                  charecters: data
                })
        }) 
    
   }


   render(){ 
     console.log('Apidata : ', this.state.charecters.name);
     
     const textloading = this.state.loading 
              ? <h1>Loading...</h1> 
              : this.state.charecters.name;

     
     return(
      <div><h1>{textloading}</h1></div>
     )
   }


}
export default FetchData;