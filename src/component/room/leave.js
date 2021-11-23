import React from 'react';

function Leave({onLeave}) {
  return (
    
      <button style={{height:"30px", width:"100px",
      backgroundColor: "#8F2121",
      backgroundRadius: "10px",
      border: "solid 1px black",
      borderRadius: "10px",
      color: "#E88989"
      }} onClick={() => onLeave()} >방 나가기</button>
  );
}

export default Leave;