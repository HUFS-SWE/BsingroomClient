import React from 'react';

function CreateRoom({ roomname, onChange, onCreate }) {
  return (
    <div>
      <input
        name="roomname"
        placeholder="방제"
        onChange={onChange}
        value={roomname}
      />
      
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateRoom;