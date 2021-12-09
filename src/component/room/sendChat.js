import React from 'react';
import styled from 'styled-components';
import chatbutton from '../../img/채팅전송버튼.png';

const Chatpush = styled.button`
    /* 채팅 전송 버튼 */
    position: relative;
    cursor: pointer;
    height: 25px; 
    width: 50px;
    background-color: transparent;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px navy;
    margin-left: 2px;
    &:hover {
        background: white;}
    &:active {
        background: #59DA50;}
`

function SendChat({ chat, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit} style={{alignItems:'center'}}>
          <input
            style={{width:'150px', height:'70px', border:"1", backgroundColor:'rgba(255,255,255,0.3)'}}
            name='chat'
            placeholder="메세지 입력"
            onChange={(e) => onChange(e)}
            value={chat}
          />
          <Chatpush type='submit'><img style={{width:'100%', height:'100%'}} src={chatbutton}></img></Chatpush>
        </form>
      );
    }
    
    export default SendChat;