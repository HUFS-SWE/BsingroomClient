import React from 'react';
import styled from 'styled-components';

const Chatpush = styled.button`
    /* 채팅 전송 버튼 */
    position: relative;
    cursor: pointer;
    bottom: 7px;
    left: 5px;
    height: 25px; 
    width: 50px;
    background-color: #EEEEEE;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px navy;
    &:hover {
        background: white;}
    &:active {
        background: #59DA50;}
`

function SendChat({ chat, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
          <input
            style={{width:'160px', height:'80px'}}
            name='chat'
            placeholder="메세지 입력"
            onChange={(e) => onChange(e)}
            value={chat}
          />
          <Chatpush type='submit'>전송</Chatpush>
        </form>
      );
    }
    
    export default SendChat;