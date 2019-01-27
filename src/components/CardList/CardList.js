import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import Data from './CardList.json';

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

class CardList extends React.Component{


  render(){

    const cardlist = Data.map((data)=>
                      <CardListItem 
                      key={data.id} 
                      title={data.title} 
                      image={data.image} 
                      text={data.text} />);
    return <Cards>{cardlist}</Cards>;
  }

}
export default CardList;


{/* <CardListItem 
           title='Title title'
           image="./images/camera.jpg"
           text="text text text"
        />
        */}