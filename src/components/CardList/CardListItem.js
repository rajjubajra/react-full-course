import React from 'react';
import styled from 'styled-components';

const CardItem = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  padding: 10px 10px 10px 15px;
  margin: 30px;

  > ul{
    padding-inline-start: 0px;
  }

  > ul > li{
    list-style: none;
  }
  > ul > li > button{
    padding: 10px 30px;
    font-size: 1.0rem;
    font-weight: 100;
    background-color: aliceblue;
    cursor: pointer;
  }
`;


const imgstyle = {
  display: 'flex',
  alignSelf: 'center',
  width: '90%',
  padding: '10px',
  border:'1px solid #eee'
   
}

const CardListItem = (props) => {
  console.log(props)
  return(
    <CardItem>
        <ul>
          <li><h3>{props.title}</h3></li>
          <li>{<img style={imgstyle} src={props.image} />}</li>
          <li><p>{props.text}</p></li>
          <li><button>More</button></li>
        </ul>
    </CardItem>
  )
}
export default CardListItem;


