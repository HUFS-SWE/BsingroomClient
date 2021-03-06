import React,{useState, useEffect, useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../img/Bsingroomlogo.png";
import User from '../../modules/class/user';
import RoomList from './RoomList';
import CreateRoom from './CreateRoom';
import {io} from 'socket.io-client'
import {UserDispatch} from '../../app.js'
import SearchInput from './searchInput';
import Search from './searchInput';

//style 정의
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
    flex-direction: row;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 5px;
    margin-right: 40px;
    width: 350px;
    height: 380px;
    color: lightgray;
    overflow-y: auto;
`
const Room_search = styled.div`
    display: flex;
    margin: 10px 10px;
    width: 100%;
`
const Refresh_button = styled.button`
    width: 80px;
    height: 28px;
    border: solid gray 1px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 2px 2px navy;
    &:hover {
        background: #FFFFAB;}
    &:active {
        background: #FFECAB;}
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
    margin: 27px 260px;
    padding: 15px 15px;
    justify-content: center;
    align-items: center;
    border: 2px solid lightgray;
    border-radius: 5px;
    color: lightgray;
`


//socket객체 정의
const ENDPOINT = "https://bsingroom.loca.lt/";
const socket = io.connect(ENDPOINT);

//Lobby 컴포넌트 정의
function Lobby() {

    var {user, setUser} = useContext(UserDispatch); //User 전역객체 정의 from app.js
    const navigate = useNavigate(); //react의 redirect함수

    //컴포넌트 마운트 시 한번만 실행. setUser통해 User인스턴스 정의
    //history객체를 통해 intro에서 submit된 값을 세팅한다.
    useEffect(() => {

        socket.on('showRoomList', (rooms)=>{        //socketOn 이벤트는 리렌더링할 때마다 수가 늘어난다.
            let roomList = [];
            console.log(rooms)
            for(var i=0; i<rooms.length; ++i){
                //if (rooms[i])
                if(rooms[i].item.slice(0,4)=="room")
                roomList.push({roomname:rooms[i].item, membercount:rooms[i].leng})
            }
            setRooms(roomList)
        })


        navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: false },
            video: false})
        .then(function(stream){
            setUser(new User(socket, history.state.usr.icon, history.state.usr.nickname, stream))
        })

        setTimeout(() => {
            fetchRoom();
        }, 500);
        
        return ()=>{
            socket.removeAllListeners();
        }

    },[]);

    //RoomList컴포넌트 관련 상태관리
    const [rooms, setRooms] = useState([]);


    const fetchRoom = () => {       //User객체 내부에 room정보를 업데이트한다.
        socket.emit("fetchRoom")
        console.log('fetch')
    };
    

    const onEnter = (roomname) => {
        user.joinRoom(roomname);
        navigate('/room',{replace:true})
    }

    //CreateRoom컴포넌트 관련 상태관리
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

    const onCreate = () => {        //'방만들기' 클릭 시 실행
        user.host = true;
        user.joinRoom("room_"+roomname)
        navigate('/room',{replace:true})
    };


    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    //navigate('/room', {replace:true, state : {roomname : {roomname} }}) };
    // const onToggle = id => {
    //     setUsers(
    //       users.map(user =>
    //         user.id === id ? { ...user, active: !user.active } : user
    //       )
    //     );
    //   };


    //search컴포넌트 관련 상태 정리
    // const {searchinput} = searchinput; 

    // const onclick = (searchinput) => {        //'검색' 클릭 시 실행
    //     Search(searchinput)
    // };


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
                    <h2 style={{fontSize:"20px"}}>ROOM LIST</h2><br></br>
                    <div style={{display:'flex'}}>
                        <div style={{flex:2}}>
                        <SearchInput type='text' onClick={Search}/></div>
                        <div style={{flex:1}}>
                            <Refresh_button onClick={fetchRoom}
                            >새로고침</Refresh_button>
                        </div>
                    </div><br></br>
                    <RoomList rooms={rooms} onEnter={onEnter}/>
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
