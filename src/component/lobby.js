import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Abc = styled.div`
    width:500px;
    height: 500px;
    background-color: skyblue;
`

function Lobby() {

    return (
        <Abc>
            <Link to="/room">lobby</Link>
        </Abc>
    )}
  
  export default Lobby;