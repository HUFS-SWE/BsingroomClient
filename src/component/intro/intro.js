import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import{ Route, Routes} from 'react-router-dom';

const Abc = styled.div`
    width:500px;
    height: 500px;
    background-color: cornflowerblue;
`

function Intro() {

    return (
        <Abc>
            <Link to="/lobby">intro</Link>
        </Abc>
        
    )}
  
  export default Intro;