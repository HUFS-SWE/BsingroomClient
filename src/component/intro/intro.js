import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mirrorball from "../../img/mirrorball.png";
import bchar from "../../img/b대면인트로캐릭터.png";
import bsing from "../../img/B대면노래방.png";


const Background = styled.div`
    /* 초기 화면 */
    display: flex;
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, #252F8C 0%, rgba(32, 60, 130, 0.6) 25.52%, rgba(38, 146, 170, 0.76) 66.67%, #843199 100%);
    box-sizing: border-box;
`

const Outground = styled.div`
    /* 디스플레이 영역 */
    margin: auto auto;

    width: 90%;
    height: 90%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px; 
    border: 1px solid rgba(255, 255, 255, 0.5);
`

const Inground = styled.div`
    /* 로그인 영역 */
    
    display: table;
    //position: relative;
    margin-left: 48%;
    margin-top: 23%;

    width: 400px;
    height: 300px;

    border: 1px solid white;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;    
`

const Mirrorball = styled.img`
    position: absolute;
    margin-left: 43%;
    width: 155px;
    height: 120px;
`

const Bchar = styled.img`
    position: absolute;
    margin-left: 4%;
    margin-top: 12%;
    width: 500px;
    height: 500px;
`

const Bsing = styled.img`
    position: absolute;
    margin-left: 45%;
    margin-top: 10%;
    width: 480px;
    height: 170px;
`

const Entrance = styled.button`
    position: relative;
    width: 70px;
    height: 30px;
`


function Intro() {

    return (

        <Background>
            <Mirrorball src={mirrorball}></Mirrorball>
            <Bchar src={bchar}></Bchar>
            <Bsing src={bsing}></Bsing>
            <Outground>
                <Inground>
                    <center>
                    <br></br><br></br><br></br><br></br>이모티콘과 닉네임을 입력하세요<br></br><br></br><br></br><br></br>

                        <form>
                        
                            <select id="이모티콘" onchange="selectBoxImoji()"> 
                                <option value="1">💖</option>
                                <option value="2">🧡</option>
                                <option value="3">💛</option>
                                <option value="4">💚</option>
                                <option value="5">💙</option>
                                <option value="6">💜</option>
                                <option value="7">🤎</option>
                                <option value="8">🖤</option>
                                <option value="9">🤍</option>
                                <option value="10">💗</option>
                            </select> &nbsp;
                            
                            <input type="text" name="닉네임" size="20"></input>

                            <br></br><br></br><br></br><br></br><br></br>
                            
                            <Link to="/lobby"> 
                                <Entrance type="summit"> 입장</Entrance> 
                            </Link>

                        </form>
                    </center>
                </Inground>
            </Outground>
        </Background>

    )}
  
  export default Intro;
