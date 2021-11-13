import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
    width:1200px;
    display: flex;
    flex-direction: row;
    height: 700px;
    background-color: white;
    `
const Left = styled.div`
    display:flex;
    flex-direction: column;
    flex:1;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    border-color: black;
`
const Center = styled.div`
    display:flex;
    flex-direction: column;
    flex:3;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    border-color: black;
`
const Right = styled.div`
    display:flex;
    flex-direction: column; 
    flex:1;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    border-color: black;
`
const List = styled.div`
    display: flex;
    flex:4;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Copyright = styled.div`
    display: flex;
    flex:1;
    margin: 0.25em;
    padding: 0.25em 0.25em;

`
const Roomname = styled.div`
    display: flex;
    flex:1;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`

const Video = styled.div`
    flex:5;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`

const Chatting = styled.div`
    display: flex;
    flex:10;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const ReserveSong = styled.div`
    display: flex;
    flex:2;
    justifyContent: 'center';
    alignItems: 'center';
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Volume = styled.div`
    display: flex;
    flex:1;
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
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const ChatInput = styled.div`
    display: flex;
    flex:1;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const Exit = styled.div`
    display: flex;
    flex:1;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
`
const GuestAddButton = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    left: 200px;
    bottom: 17px;
`
const SongReserveButton = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    left: 450px;
    top: 2px;
`
const ExitButton = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    left: 70px;
    top: 4px;
`
function Room() {

    return (
        <Background>
        
        <Left>

            <List>
            <div>   
                예약목록 <br></br><br></br>
                <textarea cols="30" rows="17">
                    <input type='text'></input>
                </textarea>
            </div>
            </List>

            <List>
            <div>
                참가자 <GuestAddButton><button>+</button></GuestAddButton>
                <textarea cols="30" rows="16"><input type='text'></input></textarea>   
            </div>
            </List>

            <Copyright>
            @Copyright 소프트웨어 공학 1조
            </Copyright>

        </Left>

        <Center>

            <Roomname>
            <p>
                (방제)
                <input type='text'></input>
            </p>
            </Roomname>

            <Video>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/fF08MR7SvkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Video>
            
            <p>
                현재곡:
                <input type='text'style={{width: "300px"}}></input>
            </p>

            <br></br><br></br><br></br>

            <ReserveSong>
            <form>
                <input type='url' placeholder='반주 URL' style={{width: "490px", height: "30px"}}></input>
                <SongReserveButton><button type='submit'>예약</button></SongReserveButton>
            </form>
            </ReserveSong>
            
            <Volume>
            Input <input type='range'></input>
            Output <input type='range'></input>
            </Volume> 

        </Center>

        <Right>
            
            <NetworkStatus>
                    (네트워크 신호)
            </NetworkStatus>

            <Chatting>
                <p>
                (채팅)
                <textarea cols="30" rows="30"><input type='test'></input></textarea>
                </p>
            </Chatting>

            <ChatInput>
                <form>
                <input style={{width: "190px", height: "30px"}}></input>
                <button type='submit'>></button>
                </form>
            </ChatInput>

            <Exit>
            <Link to="/">
                <ExitButton><button >방 나가기</button></ExitButton>
            </Link>
            </Exit>

        </Right>
        
        </Background>
    )}
  
  export default Room;