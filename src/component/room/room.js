import React, { useEffect,useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chatbutton from '../../img/채팅전송버튼.png';
import bsing from '../../img/B대면노래방.png';
import {UserDispatch} from '../../app.js'

const Background = styled.div`
    /* 배경 */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    //background: linear-gradient(180deg, #252F8C 0%, rgba(32, 60, 130, 0.6) 25.52%, rgba(38, 146, 170, 0.76) 66.67%, #843199 100%);
    background: linear-gradient(180deg, #27258C 0%, rgba(32, 60, 130, 0.94) 31.25%, rgba(66, 149, 168, 0.81) 64.58%, rgba(119, 132, 41, 0.76) 95.31%);
    box-sizing: border-box;
`

const Left = styled.div`
    /* 왼쪽 (예약목록, 참가자) */
    display:flex;
    flex-direction: column;
    flex:1;
    width: 100%auto;
    height: 100%auto;
    width: 25%;
    height: 100%;
    font-size: 1em;
    color: white;
    padding: 0.25em 1em;
    box-sizing: border-box;
`

const Center = styled.div`
    /* 가운데(방제, 영상, 현재곡, 반주예약, 장치조절) */
    display:flex;
    flex-direction: column;
    flex:3;
    width: 100%auto;
    height: 100%auto;
    color: white;
    padding: 0.25em 1em;
    box-sizing: border-box;
`

const Right = styled.div`
    /* 오른쪽(네트워크 신호, 채팅창, 채팅전송) */
    position: relative;
    display:flex;
    flex-direction: column; 
    flex:1;
    width: 100%auto;
    height: 100%auto;
    color: white;
    padding: 0.25em 1em;
    box-sizing: border-box;
`

const List = styled.div`
    /* 예약 목록 & 참가자 테두리 */   
    display: flex;
    flex:4;
    position: relative;
    //width: auto;
    //height: auto;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color:rgba(255, 255, 255, 0.1);
    box-sizing: content-box;
`

const Copyright = styled.div`
    /* 소웨공 1조 */
    display: flex;
    flex:1;
    position: relative;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    margin: 0.25em;
    padding: 0.25em 0.25em;
`


const Roomname = styled.div`
    /* 방제 */ 
    flex:1;
    width: 100%;
    height: auto;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: transparent; 
    box-sizing: content-box;
`

const ViewTextarea = styled.input`
    /* 방제, 현재곡 텍스트 */
    width: 85%;
    font-size: 15px;
    color: white;
    background: transparent;
    box-sizing: content-box;
`

const ReserveSong = styled.div`
    /* 노래 예약 */
    flex:2;
    position: relative;
    width: auto;
    height: 20%;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color:rgba(255, 255, 255, 0.1);
`

const SongReserveButton = styled.div`
    /* 노래 예약 버튼 */ 
    position: relative;
    align-items: center;
    top: 40px;
    left: 190px;
`

const Sound = styled.div`
    /* 장치 조절 */
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color:rgba(255, 255, 255, 0.1);
`

const NetworkStatus = styled.div`
    /* 네트워크 상태 */
    display: flex;
    flex:1;
    position: relative;
    width: auto;
    height: auto;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color:rgba(255, 255, 255, 0.1);
`

const Chatting = styled.div`
    /* 채팅 박스 */
    display: flex;
    flex:8;
    position: relative;
    width: auto;
    height: auto;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    word-break:break-all;
    background-color:rgba(255, 255, 255, 0.1);
`

const ChatInput = styled.div`
    /* 채팅 입력 */
    display: flex;
    flex:3;
    position: relative;
    justify-content: center;
    width: auto;
    height: auto;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 2px solid palevioletred;
    border-radius: 1px;
    border-color: black;
    background-color:rgba(255, 255, 255, 0.1);
    word-break:break-all;
`


const Exit = styled.div`
    /* 방 나가기 버튼 */
    display: flex;
    flex:3;
    align-items: center;
    justify-content: center;
`

const ExitButton = styled.button`
    justify-content: center;
    position: relative;
`


function Room() {
    const {user, setuser} = useContext(UserDispatch);
    useEffect(()=>{
        console.log(user);
    })

    return (
        <Background>
        
        <Left>

            <List>
                <div>
                예약목록 <br></br><br></br>
                <textarea cols="25" rows="15" 
                        style={{backgroundColor: "rgba(255,255,255,0.5)", 
                        resize: "none"}}>
                    <input type='text'></input>
                </textarea>
                </div>
            </List>

            <List>
                <div>
                참가자<br></br><br></br>
                <textarea cols="25" rows="15"
                        style={{backgroundColor: "rgba(255,255,255,0.5)", 
                        borderColor: "white",
                        resize: "none"}}>
                    <input type='text'></input></textarea>
                </div>   
            </List>

            <Copyright><center>
                @Copyright 소프트웨어 공학 1조
            </center></Copyright>

        </Left>

        <Center>
            
            <Roomname>
                (방제) <ViewTextarea readonly="readonly"></ViewTextarea>
            </Roomname>

            
            <iframe width="400px" height="315px" frameborder='1' border-width='1px' border-color='white' border-style='solid' src="https://www.youtube.com/embed/fF08MR7SvkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
            
            <br></br><p>
                현재곡: <ViewTextarea></ViewTextarea>
            </p><br></br>

            <ReserveSong>
                <center>
                <form>
                    <input type='url' placeholder='반주 URL' 
                        style={{width: "90%", 
                                height: "30px", 
                                position: 'relative', 
                                top:'20px'}}>
                    </input>
                    <SongReserveButton>
                        <button type='submit' 
                                style={{width: "60px", height: "30px",
                                backgroundColor: "#C3FF9E",
                                border: "solid 1px",
                                borderRadius: "10px"}}>
                            예약</button></SongReserveButton>
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
                채팅<br></br><br></br>
                <textarea cols="25" rows="25"
                        style={{backgroundColor: "rgb(255,255,255,0.5)", 
                            resize: "none"}}>
                        <input type='text'></input>
                </textarea>
                </p>
            </Chatting>

            <ChatInput>
                <form>
                    <textarea type="input" text-overflow="clip" 
                        style={{width: "80%", 
                                height: "100%",  
                                resize: "none",
                                border: "white"}}>        
                    </textarea>

                    <button type="submit" 
                        style={{height:"30px", width:"auto",
                                backgroundColor: "#11ffee00"}} >
                        <img src='../../img/채팅전송버튼.png' 
                            height="15" width="15"></img>
                    </button>
                </form>
            </ChatInput>

            <Exit>
                <Link to="/lobby">
                    <ExitButton style={{height:"30px", width:"100px",
                                backgroundColor: "#8F2121",
                                backgroundRadius: "10px",
                                border: "solid 1px black",
                                borderRadius: "10px",
                                color: "#E88989"
                                }} >
                         방 나가기 </ExitButton>
                </Link>
            </Exit>

        </Right>
        
        </Background>
    )}

export default Room;