import React from 'react';

function Room({ room, onEnter }) {
  console.log(room)
  return (
    <div style={{marginTop:'4'}}>
      
        {room.roomname.slice(5)} <span>: {room.membercount}명</span>
      
      &nbsp;
      {room.membercount == 5 ? null : <button onClick={() => onEnter(room.roomname)}>입장</button>}
    </div>
  );
}

function RoomList({ rooms, onEnter}) {
  console.log(rooms)
  return (
    <div>
      {rooms.filter(x=>x.roomname).map(room => (
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