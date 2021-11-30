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
          <button onClick={onCreate}>방 만들기</button>
        </div>
      );
    }
    
    export default CreateRoom;