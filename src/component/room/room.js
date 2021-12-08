import React, {useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import chatbutton from '../../img/채팅전송버튼.png';
import bsing from '../../img/B대면노래방.png';
import { UserDispatch } from '../../app.js'
import Leave from './leave';
import { stepIconClasses } from '@mui/material';
import { flexbox } from '@mui/system';

const Background = styled.div`
    /* 배경 */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #252F8C 0%, rgba(32, 60, 130, 0.6) 25.52%, rgba(38, 146, 170, 0.76) 66.67%, #843199 100%);
    //background: linear-gradient(180deg, #27258C 0%, rgba(32, 60, 130, 0.94) 31.25%, rgba(66, 149, 168, 0.81) 64.58%, rgba(119, 132, 41, 0.76) 95.31%);
    box-sizing: border-box;
`

const Left = styled.div`
    /* 왼쪽 (예약목록, 참가자) */
    display:flex;
    flex-direction: column;
    flex:1;
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
    height: 100%;
    color: white;
    padding: 0.25em 1em;
    box-sizing: border-box;
`

const List = styled.div`
    /* 예약 목록 & 참가자 테두리 */   
    display: flex;
    flex:4;
    flex-direction: column;
    position: relative;
    width:100%;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
    background-color:rgba(255, 255, 255, 0.1);
    box-sizing: content-box;
    overflow: hidden;
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
    flex: 1;
    font-size: 15px;
    color: white;
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-sizing: content-box;
    margin: 0.25em;
    padding: 0.25em 0.25em;
`

const ReserveSong = styled.div`
    /* 노래 예약 */
    flex:8;
    position: relative;
    width: auto;
    height: 20%;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
    background-color:rgba(255, 255, 255, 0.1);
`

const SongReserveButton = styled.button`
    /* 노래 예약 버튼 */ 
    position: relative;
    align-items: center;
    width: 60px; 
    height: 30px;
    margin-top: 5%;
    margin-left: 75%;
    color: black;
    background: #86E57F;
    border: solid 1px #777777;
    border-radius: 10px;
    box-shadow: 2px 2px navy;
    &:hover {
        background: lightgreen;}
    &:active {
        background: #59DA50;}
`

const Sound = styled.div`
    /* 장치 조절 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1.5;
    margin: 0.25em;
    padding: 0.25em 0.25em;
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
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
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
    background-color:rgba(255, 255, 255, 0.1);
`

const Chatting = styled.div`
    /* 채팅 박스 */
    display: flex;
    flex: 8;
    position: relative;
    width: auto;
    height: auto;
    margin: 0.25em;
    padding: 0.7em 0.7em;
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
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
    margin-bottom: 10px;
    padding: 0.7em 0.7em;
    border: 1px solid palevioletred;
    border-color: lightgray;
    border-radius: 10px;
    background-color:transparent;
    word-break:break-all;
`
const Chatpush = styled.button`
    /* 채팅 전송 버튼 */
    position: relative;
    cursor: pointer;
    bottom: 7px;
    left: 5px;
    height: 25px; 
    width: 30px;
    background-color: #EEEEEE;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px navy;
    &:hover {
        background: white;}
    &:active {
        background: #59DA50;}
`

const Exit = styled.div`
    /* 방 나가기 구역 */
    display: flex;
    flex:3;
    align-items: center;
    justify-content: center;
`

const ExitButton = styled.button`
    /* 방 나가기 버튼 */
    justify-content: center;
    position: relative;
    cursor: pointer;
    box-shadow: 3px 3px navy;
`
const Member =({member})=>{
    return(
        <div style={{display:'flex', height:"10%", padding:"5px"}}>
            <p>{member.nickname}</p>
            <audio id={member.id}></audio>
        </div>
    );
}
const Song =({song})=>{
    return(
        <p style={{margin:"2px",width:"100%", overflow:'hidden'}}>{song.title}</p>
    );
}
function Room() {
    const navigate = useNavigate(); 

    const {user, setuser} = useContext(UserDispatch);

    const [members, setMembers] = useState([]);
    let memberList = [];

    const [songs, setSongs] = useState([]);
    let songList = []

    const [warning, setWarning] = useState();

    let connections = [];

    const [songURL, setSongURL] = useState();

    const [nowPlaying, setnowPlaying] = useState({id:"", title:"",url:""});
    let nowSong = {};
    let playing = false;

    let player;

    const setPlaying=(state)=>{
        playing = state;
    }

    const setnowSong = (state)=>{
        let nowSong = state;
    }

    const handleURLChange =(e)=>{
        setSongURL(e.target.value)
    }

    let audioCtx = new AudioContext();
    let localSource 
    let localgain = audioCtx.createGain();
    localgain.gain.value = 1;

    useEffect(()=>{

        //Youtube API   
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        //song event
        user.socket.on("showReservedSong", (senderID,title, url)=>{
            songList.push({id:senderID,title:title,url:url})
            setSongs([...songList])
            console.log(songList)
        })

        user.socket.on("playReservedSong", (playData)=>{
            setPlaying(true);
            setVideo(songList[0].url,0);
            songList.shift();
            setSongs([...songList]);
            setnowPlaying(playData)
            setnowSong(playData)
        })

        user.socket.on("fetchPlayingVideo", (id, title, url,currentTime, list)=>{
            console.log(id, title, url,currentTime, list)
            songList = [...list]
            setSongs([...songList])
            setPlaying(true);
            setVideo(songList[0].url,currentTime);
            setSongs([...songList]);
            setnowPlaying({id:id, title:title, url:url})
            setnowSong({id:id, title:title, url:url})
        })


        user.socket.on("setPlayingStop", ()=>{
            setPlaying(false);
            player.clearVideo();
            setnowPlaying({id:"", title:"",url:""});
        })

        user.socket.on("showPlayingVideo", (offer, receiverID) => {
            console.log(user.host,playing,player)
            console.log(receiverID,nowPlaying.id,nowPlaying.title,nowPlaying.url,player.getCurrentTime(),songList)
            if(user.host&&playing&&player){
                user.socket.emit("sendPlayingVideo",receiverID,nowPlaying.id,nowPlaying.title,nowPlaying.url,player.getCurrentTime(),songList)
            }
          });

        //audio event 등록
        
        user.socket.on("offer", (offer, senderID) => {
            setOffer(offer, senderID);
          });
        
        user.socket.on("answer", (answer, senderID) => {
            setAnswer(answer, senderID);
        });

        user.socket.on("ice", (ice, senderID) => {
            setIce(ice, senderID);
          });


        //Room event 등록
        user.socket.emit('fetchMember', user.roomInfo)  //첫 접속 시 발생
        if(!user.host){
            user.socket.emit('fetchVideo', user.roomInfo) //첫 접속 시 발생
        }

        user.socket.on("showMemberList", (data, joined)=>{
            let tempMemberList = [];
            for(const value of data){
                tempMemberList.push(value) 
            }
           
            setMembers(tempMemberList)

            console.log(memberList, data)

            if(data.length>=memberList.length){
                addAudioConnect(joined,data);
            }
            else{
                audioDisConnect(joined,data);
            }

            memberList = tempMemberList.slice();

            if(memberList.length==1){
                document.getElementById(user.socket.id).srcObject = user.mediaStream;
                localSource = audioCtx.createMediaStreamSource(document.getElementById(user.socket.id).srcObject)
                localSource.connect(localgain);
                localSource.connect(audioCtx.destination);
            }
        })

        user.socket.on("breakRoom",()=>{
            exitToLobby()
        })
        
        return ()=>{
            user.socket.removeAllListeners();
            for(const connection of connections){
                connection.connection.close();
            }
            connections = null;
            audioCtx.close();
        }
    }, [])

    useEffect(()=>{
        if(songs.length>0&&!playing&&(songs[0].id==user.socket.id)){
            setTimeout(() => {
                user.socket.emit("playSong",user.roomInfo,songs[0])
            }, 3000);
        }

    },[playing, songs])

    //Audio connection 함수
    const setOffer = async (offer, senderID) => {
        console.log(connections.find(data=> data.id == senderID), senderID)
        let offerConn = connections.find(data=> data.id == senderID).connection
        offerConn.setRemoteDescription(offer);
        offerConn.createAnswer()
        .then((result)=>{
            console.log(result)
            offerConn.setLocalDescription(result);
            user.socket.emit("answer", result, senderID);
        })
    }

    const setAnswer = (answer, senderID) => {
        let answerConn = connections.find(data=> data.id == senderID).connection
        answerConn.setRemoteDescription(answer);
    }
    
    const setIce = (ice, senderID) =>{
        let iceConn = connections.find(data=> data.id == senderID).connection
        iceConn.addIceCandidate(ice);
    }

    const addAudioConnect=(join,data)=>{
        let memberIDList = []
        memberList.forEach(mb=>memberIDList.push(mb.id))
        for(const value of data){
            if(!memberIDList.includes(value.id)&&value.id!=user.socket.id){
                let connection = new RTCPeerConnection({
                    iceServers: [
                        {
                            urls: [
                                "stun:stun1.l.google.com:19302",
                                "stun:stun2.l.google.com:19302",
                                "stun:stun3.l.google.com:19302",
                                "stun:stun4.l.google.com:19302",
                            ]
                        }
                    ]
            
                })
                connections.push({id:value.id, connection:connection})

                user.mediaStream.getTracks().forEach(track =>{
                    connection.addTrack(track, user.mediaStream)
                })

                if(join){
                connection.createOffer()
                .then((result)=>{
                    console.log(result)
                    connection.setLocalDescription(result)
                    user.socket.emit("offer", result, value.id)
                })
            }
                connection.addEventListener("icecandidate", (ice)=>{
                    console.log(ice)
                    user.socket.emit("ice", ice.candidate, value.id )
                })
                
                connection.addEventListener("addstream", (data)=>{
                    document.getElementById(value.id).srcObject = data.stream
                    var gainNode = audioCtx.createGain();
                    var source = audioCtx.createMediaStreamSource(document.getElementById(value.id).srcObject)
                    source.connect(gainNode);
                    source.connect(audioCtx.destination);
                })
                console.log("audioConnected", connections, document.getElementById(value.id).src)
            }
        }
        
    }

    const audioDisConnect=(joined, data)=>{
        let memberIDList = []
        data.forEach(mb=>memberIDList.push(mb.id))
        for(const value of memberList.filter(x => !memberIDList.includes(x.id))){
            let leavedConn = connections.find(data=> data.id == value.id)
            leavedConn.connection.close();
            let IDList = connections.map(a => a.id);
            const index = IDList.indexOf(leavedConn.id);
            console.log(index)
            connections.splice(index,1);
        }
        console.log("audioDisConnected", connections)
    }

    const createReserv = async (e) =>{
        e.preventDefault();
        //https://www.youtube.com/watch?v=3duS7p-H6KQ
        // https://www.youtube.com/watch?v=gX0rdGE8tW8
     
            fetch('https://www.youtube.com/oembed?url='+songURL)
            .then(response => response.json())
            .then(data => {
                user.socket.emit("createReserv",user.roomInfo,user.socket.id,data.title,songURL)
            })
            .catch(e=>{
                setWarning("유효하지 않은 URL입니다.")
            });
            
            setSongURL("");
            setWarning("")
        
        //user.socket.emit('createReserv', url);
    }
    const youtubeParser = (url) =>{
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    const setVideo =(url, time)=>{
        const ytbID = youtubeParser(url);
        if(ytbID){
            player = new YT.Player('player', {
                height: '100%',
                width: '100%',
                startSeconds: time,
                videoId: ytbID,
                playerVars: { 'autoplay': 1, 'controls': 0 },
                events:{
                    onStateChange: songUpdate
                }
                })
        }
        
    }
    
    const songUpdate = (e)=>{
        console.log(e.data)
        if((e.target.data!=1)&&(nowPlaying.id==user.socket.id)){
            socket.emit("setStop", user.roomInfo)
        }
    }


    const exitToLobby = () =>{
        user.socket.emit('leaveRoom', user.roomInfo, user.host)
        user.host=false;
        navigate('/lobby', {replace:true, state: { nickname : user.nickname, icon : user.userIcon}})
    }

    return (

        <Background>
        
        <Left>

            <List>
                <p  style={{width:"100%"}}>예약목록</p> <br></br><br></br>
                <div style={{width:"100%",overflowY:'auto', overflowX:'hidden'}}>
                {songs.map(song => (
                    <Song song={song}/>
                ))
                }
                </div>
            </List>

            <List>
                <div>
                참가자<br></br><br></br>
                {members.map(member => (
                    <Member member={member}/>
                ))
                }
                </div>   
            </List>

            <Copyright><center>
                @Copyright 소프트웨어 공학 1조
            </center></Copyright>

        </Left>

        <Center>
            <ViewTextarea></ViewTextarea>
            <div style={{flex:"12", border: "1px solid lightgray", borderRadius: "10px",pointerEvents:"none"}} id='player'>
            </div>           
            <ViewTextarea readOnly value={nowPlaying.title}></ViewTextarea>

            <ReserveSong>
                
                <form onSubmit={createReserv}><center>
                    <input type='url' placeholder='반주 URL' 
                        style={{position: 'relative', 
                                width:"70%", height:"25px",
                                border:"none", borderRadius:"5px", marginTop:"20px"}}
                        name = "url" value={songURL} onChange={handleURLChange}>
                    </input><input readOnly type="test" value={warning} style={{backgroundColor:"transparent", color:"red", width:"70%",border:"none"}}></input></center>
                    <SongReserveButton type='submit'>예약</SongReserveButton>
                </form>
                
            </ReserveSong>
            
            <Sound>
                <p>Input</p><input type='range'></input> &nbsp; &nbsp;
                <p>Output</p><input type='range'></input>
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
                        style={{
                            backgroundColor: "rgb(255,255,255,0.5)",
                            resize: "none"}}>
                        <input type='text'></input>
                    </textarea>
                </p>
            </Chatting>

            <ChatInput>
                    <form>
                        <textarea type="input" text-overflow="clip"
                            style={{width: "80%", height: "100%",
                                resize: "none", border: "white"}}>        
                        </textarea>

                        <Chatpush type="submit"> 
                            <img src='../../img/채팅전송버튼.png' 
                                style={{width:"15px",height:"15px"}}></img>
                        </Chatpush>
                    </form>
            </ChatInput>
            

            <Exit>
                <ExitButton onClick={exitToLobby} 
                            style={{height:"30px", width:"100px",
                            backgroundColor: "#8F2121",
                            backgroundRadius: "10px",
                            border: "solid 1px black",
                            borderRadius: "10px",
                            color: "#E88989"}} >
                방 나가기 </ExitButton>
            </Exit>

        </Right>
        
        </Background>
    )
}

export default Room;