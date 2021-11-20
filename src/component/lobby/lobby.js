import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import User from '../../modules/class/user';
import {io} from 'socket.io-client'

const ENDPOINT = "https://792d-211-217-117-91.ngrok.io/";
const socket = io(ENDPOINT);

const Background = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: white;
    text-align: center;
    background: #1F2F47;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Header = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0, auto; 
    width: 75%;
`
const Header_div = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
`
const Go_intro_btn = styled.button`
    flex: 1;
    margin: 20px auto;
    width: 130px;
    height: 40px;
`
const Title = styled.div`
    flex: 1;
    font-size: 30px;
    color: lightgray;
`
const Room_list_create = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    margin: 0px 90px;
    width: 80%;
`
const Room_list = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 10px;
    border: 2px solid lightgray;
    margin-right: 40px;
    width: 350px;
    height: 350px;
    color: lightgray;
`
const Room_search = styled.div`
    display: flex;
    margin: 7px 10px;
    width: 100%;
`
const Room_create = styled.div`
    flex: 1;
    padding: 10px;
    border: 2px solid lightgray;
    width: 350px;
    height: 350px;
    color: lightgray;
`
const Create_setting = styled.div`
    display: flex;
    margin: 7px 10px;
    width: 100%;
`
const Footer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin: 10px 90px 20px 90px;
    width: 80%;
`
const Copyright = styled.div`
    display: flex;
    margin: 50px 5px 20px 90px;
    font-size: 10px;
    color: lightgray;
`
const Volume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 10px 10px;
    border: 2px solid lightgray;
    width: 400px;
    color: lightgray;
`

function Lobby() {
    let nickname;
    let icon;
    let audioDevice;
    useEffect(() => {
        
        nickname = history.state.usr.nickname.nickname;
        icon = history.state.usr.icon.icon;
        console.log(nickname, icon);

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false})
        .then(function(stream){
            audioDevice = stream.getTracks()[0].label
        })

      }, []);

    const user = new User(socket, icon, nickname, audioDevice);
    user.enterRoom();

    return (
        <Background>
            <Header>
                <Header_div><Link to="/" style={{color: 'black'}} sizes="40x110"><Go_intro_btn>back</Go_intro_btn></Link></Header_div>
                <Header_div><Title>B대면 노래방</Title></Header_div>
                <Header_div></Header_div>
                <br></br>
            </Header>
            
            <Room_list_create>
                <Room_list>
                    <h2>ROOM LIST</h2><br></br>
                    <p>(잠금) (방제) <Link to="/room"><button>입장</button></Link></p>
                    <Room_search>Room 검색: <input type='text'></input><button>검색</button></Room_search>
                </Room_list>
                <Room_create>
                    <h2>ROOM CREATE</h2><br></br>
                    <form>
                    <Create_setting>
                        방  제:   <input type='text'></input>
                    </Create_setting>
                    <Create_setting>
                        인  원  수: <input type='text'></input>
                    </Create_setting>
                    <Create_setting>
                        비밀번호: <input type='password'></input>
                    </Create_setting>
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