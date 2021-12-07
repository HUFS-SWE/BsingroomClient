import React from 'react';

function SendChat({ chat, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
          <input
            name='chat'
            placeholder="메세지 입력"
            onChange={(e) => onChange(e)}
            value={chat}
          />
          <button type='submit'>전송</button>
        </form>
      );
    }
    
    export default SendChat;