import React,{useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../img/Bsingroomlogo.png";
import User from '../../modules/class/user';
import RoomList from './RoomList';
import CreateRoom from './CreateRoom';
import {io} from 'socket.io-client'
import { borderRadius } from '@mui/system';

const ENDPOINT = "https://3ba1-211-217-117-91.ngrok.io/";
const socket = io(ENDPOINT);

const Background = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    text-align: center;
    //background: #1F2F47;
    background: linear-gradient(180deg, #252F8C 0%, rgba(32, 60, 130, 0.6) 25.52%, rgba(38, 146, 170, 0.76) 66.67%, #843199 100%);
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
    width: 100%;
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
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 3px 3px navy;
`
const Title = styled.div`
    flex: 1;
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
    border-radius: 5px;
    margin-right: 40px;
    width: 350px;
    height: 380px;
    color: lightgray;
    overflow-y: scroll;
`
const Room_search = styled.div`
    display: flex;
    margin: 10px 10px;
    width: 100%;
`
const Room_create = styled.div`
    flex: 1;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 5px;
    width: 350px;
    height: 380px;
    color: lightgray;
`
const Create_setting = styled.div`
    display: flex;
    margin: 10px 10px;
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
    position: absolute;
    margin-top: 50px;
    font-size: 10px;
    color: lightgray;
`
const Volume = styled.div`
    display: flex;
    position: absolute;
    width: 400px;
    margin: 27px 220px;
    padding: 15px 15px;
    justify-content: center;
    align-items: center;
    border: 2px solid lightgray;
    border-radius: 5px;
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
    const [inputs, setInputs] = useState({
        roomname: '',
    });
    const { roomname } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [rooms, setRooms] = useState([
        {
          id: 1,
          roomname: 'velopert',
        //   email: 'public.velopert@gmail.com',
        //   active: true
        },
        {
          id: 2,
          roomname: 'tester',
        //   email: 'tester@example.com',
        //   active: false
        },
        {
          id: 3,
          roomname: 'liz',
        //   email: 'liz@example.com',
        //   active: false
        }
      ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const room = {
            id: nextId.current,
            roomname
            
        };
        setRooms(rooms.concat(room));

        setInputs({
            roomname: ''
        });
        nextId.current += 1;
    };
    const navigate = useNavigate();
    const onEnter = roomname => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    navigate('/room', {replace:true, state: { nickname : {roomname}}})    };
    // const onToggle = id => {
    //     setUsers(
    //       users.map(user =>
    //         user.id === id ? { ...user, active: !user.active } : user
    //       )
    //     );
    //   };


    return (
        <Background>
            <Header>
                <Header_div>
                    <Link to="/" style={{color: 'black'}} sizes="40x110">
                        <Go_intro_btn>back</Go_intro_btn></Link></Header_div>
                <Header_div><Title><img src={logo} width="100%"></img></Title></Header_div>
                <Header_div></Header_div>
                <br></br>
            </Header>
            
            <Room_list_create>
                <Room_list>
                    <h2 style={{fontSize:"20px"}}>ROOM LIST</h2> 
                    <Room_search><input type='text'></input>
                                <button style={{width:"50px", height:"30px",
                                                backgroundColor:"lightgreen",
                                                border:"solid 1px #333333",
                                                borderRadius:"5px"}}
                                        active={{backgroundColor:"#66CC33"}}>
                                검색</button></Room_search>
                    <RoomList rooms={rooms} onEnter={onEnter} />
                </Room_list>
                <Room_create>
                    <h2 style={{fontSize:"20px"}}>ROOM CREATE</h2><br></br>
                    <CreateRoom style={{whitespace: "pre-line"}}
                        roomname={roomname} 
                        onChange={onChange}
                        onCreate={onCreate}
                    />
                </Room_create>
            </Room_list_create>
            <Footer>
                <Copyright>
                    @Copyright 소프트웨어 공학 1조
                </Copyright>
                <Volume>
                    <a style={{cursor: "pointer"}} onClick={onclick}> Input </a> 
                    <input type='range'></input> &nbsp; &nbsp;
                    <a style={{cursor: "pointer"}} onClick={onclick}> Output </a> 
                    <input type='range'></input>
                </Volume>
            </Footer>
        </Background>
    )}
  
  export default Lobby;
