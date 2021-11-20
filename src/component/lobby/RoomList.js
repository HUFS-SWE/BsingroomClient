import React from 'react';

function Room({ room, onEnter }) {
  return (
    <div>
      
        {room.roomname}
      
      &nbsp;
      
      <button onClick={() => onEnter(room.roomname)}>입장</button>
    </div>
  );
}

function RoomList({ rooms, onEnter}) {
  return (
    <div>
      {rooms.map(room => (
        <Room
          room={room}
          key={room.id}
          onEnter={onEnter}
        />
      ))}
    </div>
  );
}

export default RoomList;