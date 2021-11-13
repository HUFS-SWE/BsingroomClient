import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
    width:1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
    background-color: white;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 90px; 
    width: 60%;
    background-color: white;
`
const Header_div = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
`
const Go_intro_btn = styled.button`
    margin: 20px 200px 10px 0px;
    width: 130px;
    height: 40px;
`
const Title = styled.div`
    font-size: 40px;
`
const Room_list_create = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px 90px;
    width: 80%;
    background-color: white;
`
const Room_list = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid black;
    margin-right: 40px;
    width: 350px;
    height: 350px;
`
const Room_create = styled.div`
    padding: 10px;
    border: 2px solid black;
    width: 350px;
    height: 350px;
`
const Create_setting = styled.div`
    display: flex;
    margin: 7px 10px;
    width: 260px;
`
const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 20px 90px;
    width: 80%;
`
const Copyright = styled.div`
    display: flex;
    margin: 50px 5px 20px 90px;
    font-size: 10px;
`
const Volume = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 10px 10px;
    border: 2px solid black;
    width: 400px;
`

function Lobby() {

    return (
        <Background>
            <Header>
                <Header_div><Link to="/"><Go_intro_btn>back</Go_intro_btn></Link></Header_div>
                <Header_div><Title>B대면 노래방</Title></Header_div>
                <Header_div></Header_div>
                <br></br>
            </Header>
            
            <Room_list_create>
                <Room_list>
                    <h2>ROOM LIST</h2><br></br>
                    <p>(잠금) (방제) <Link to="/room"><button>입장</button></Link></p>
                </Room_list>
                <Room_create>
                    <h2>ROOM CREATE</h2><br></br>
                    <Create_setting>
                        방  제:   <input type='text'></input>
                    </Create_setting>
                    <Create_setting>
                        인  원  수: <input type='text'></input>
                    </Create_setting>
                    <Create_setting>
                        비밀번호: <input type='password'></input>
                    </Create_setting>
                    <form>
                        방제:
                        <input type='text'></input><br></br>
                        인원수:
                        <input type='text'></input><br></br>
                        비밀번호:
                        <input type='text'></input><br></br><br></br>
                        <button type='submit'>방 만들기</button>
                    </form>
                </Room_create>
            </Room_list_create>
            <Footer>
                <Copyright>
                    @Copyright 소프트웨어 공학 1조
                </Copyright>
                <Volume>
                    Input <input type='range'></input>
                    Output <input type='range'></input>
                </Volume>
            </Footer>
        </Background>
    )}
  
  export default Lobby;