import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Abc = styled.div`
    width:500px;
    height: 500px;
    background-color: pink;
    `

function Room() {

    return (
        <Abc>
            <Link to="/">Room</Link>
        </Abc>
    )}
  
  export default Room;