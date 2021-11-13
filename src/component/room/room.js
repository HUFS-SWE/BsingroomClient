import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Background = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    height: 100%;
    background: linear-gradient(180deg, #27258C 0%, rgba(32, 60, 130, 0.94) 31.25%, rgba(66, 149, 168, 0.81) 64.58%, rgba(119, 132, 41, 0.76) 95.31%);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `
const Left = styled.div`
    display:flex;
    flex-direction: column;
    flex:1;
    width: 100%auto;
    height: 100%auto;
    font-size: 1em;
    color: white;
    padding: 0.25em 1em;
`
const Center = styled.div`
    display:flex;
    flex-direction: column;
    flex:3;
    width: 100%auto;
    height: 100%auto;
    color: white;
    padding: 0.25em 1em;
`
const Right = styled.div`
    display:flex;
    flex-direction: column; 
    flex:1;
    width: 100%auto;
    height: 100%auto;
    color: white;
    padding: 0.25em 1em;
`
const List = styled.div`
    display: flex;
    flex:4;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Copyright = styled.div`
    display: flex;
    flex:1;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    margin: 0.25em;
    padding: 0.25em 0.25em;

`
const Roomname = styled.div`
    flex:1;
    width: 100%;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: transparent;
`

const ReserveSong = styled.div`
    flex:2;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Sound = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`

const NetworkStatus = styled.div`
    display: flex;
    flex:1;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Chatting = styled.div`
    display: flex;
    flex:8;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const ChatInput = styled.div`
    display: flex;
    flex:3;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color: white;
`
const Exit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:3;
`

const SongReserveButton = styled.div`
    position: relative;
    align-items: center;
    top: 27px;
    left: 220px;
`
const ExitButton = styled.div`
    justify-content: center;
    position: relative;
    
`
function Room() {

    return (
        <Background>
        
        <Left>

            <List>
            <div>   
                예약목록 <br></br><br></br>
                <textarea cols="25" rows="17">
                    <input type='text' ></input>
                </textarea>
            </div>
            </List>

            <List>
            <div>
                참가자<br></br><br></br>
                <textarea cols="25" rows="16"><input type='text'></input></textarea>   
            </div>
            </List>

            <Copyright>
            <center>
            @Copyright 소프트웨어 공학 1조
            </center>
            </Copyright>

        </Left>

        <Center>

            <Roomname>
            <p>
                (방제)
                <input type='text'style={{width: "300px"}}></input>
            </p>
            </Roomname>

            
            <iframe width="400px" height="315px" frameborder='1' border-width='1px' border-color='white' border-style='solid' src="https://www.youtube.com/embed/fF08MR7SvkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
            
            <p>
                현재곡:
                <input type='text'style={{width: "300px"}}></input>

            </p>

            <br></br><br></br><br></br>

            <ReserveSong>
                <center>
                <form>
                    <input type='url' placeholder='반주 URL' style={{width: "90%", height: "30px", position: 'relative', top:'20px'}}></input>
                    <SongReserveButton><button type='submit'>예______약</button></SongReserveButton>
                </form>
                </center>
            </ReserveSong>
            
            <Sound>
            Input <input type='range'></input>
            Output <input type='range'></input>
            </Sound> 

        </Center>

        <Right>
            
            <NetworkStatus>
                    (네트워크 신호)
            </NetworkStatus>

            <Chatting>
                <p>
                (채팅)
                <textarea cols="25" rows="30"><input type='text'></input></textarea>
                </p>
            </Chatting>

            <ChatInput>
                <form>
                <input style={{width: "80%", height: "80%"}}></input>
                <button type='submit'>버</button>
                </form>
            </ChatInput>

            <Exit>
            <ExitButton>
            <Link to="/">
                <button >방 나가기</button>
            </Link>
            </ExitButton>
            </Exit>

        </Right>
        
        </Background>
    )}
  
  export default Room;