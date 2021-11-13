import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import{ Route, Routes} from 'react-router-dom';

const Abc = styled.div`
    width:500px;
    height: 500px;
    background-color: cornflowerblue;
`

const Background = styled.div`
    /* 초기 화면 */
    position: absolute;
    width: 1200px;
    height: 700px;

    background-position: center center;
    background: linear-gradient(180deg, #252F8C 0%, rgba(32, 60, 130, 0.6) 25.52%, rgba(38, 146, 170, 0.76) 66.67%, #843199 100%);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Outground = styled.div`
    /* 디스플레이 영역 */
    position: relative;
    width: 700px;
    height: 500px;
    left: 20%;
    top: 20%;

    background: rgba(200, 255, 255, 0.25);
    border-radius: 20px; 
    border: 1px solid rgba(255, 255, 255, 0.5);
`

const Inground = styled.div`
    /* 로그인 영역 */
    position: relative;
    width: 400px;
    height: 300px;
    left: 20%;
    top: 20%;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 50px;    
`


const Emoji = styled.div`

`

const Nickname = styled.div`

`

const Entrance = styled.div`
    width: 60px;
    height: 30px;
    background-color: cornflowerblue;
`




function Intro() {

    return (
        //<Abc>
         //   <Link to="/lobby">intro</Link>
        //</Abc>
        
        <Background>

            <Outground>

                <input type="button" value="< OUT" onclick="window.Click();"></input>

                <Inground>
                    <center>
                        <br></br>이모티콘과 닉네임을 입력하세요<br></br><br></br>

                        <form nickname="닉네임">

                            <p> <button type="select"> 
                                <input type="text" id="changeImoji"></input>
                                <select id="changeTest" onchange="selectBoxChange()"> 
                                
                                </select>

                                </button>
                                <input type="text" name="닉네임"></input> 
                            </p>
                            
                            <button><Link to="/lobby">입장</Link></button>
                        
                        </form>
                    </center>
                    

                </Inground>
            </Outground>
        </Background>



    )}
  
  export default Intro;
