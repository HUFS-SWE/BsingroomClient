import React from 'react';

function CreateRoom({ roomname, memberCount, password, onChange, onCreate}) {
    return (
        <div>
          <input
            name="roomname"
            placeholder="방제"
            onChange={onChange}
            value={roomname}
          />
          <input
            name="memberCount"
            placeholder="인원수"
            onChange={onChange}
            value={memberCount}
          />
          <input type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
          />
          <button onClick={onCreate}>방 만들기</button>
        </div>
      );
    }
    
    export default CreateRoom;