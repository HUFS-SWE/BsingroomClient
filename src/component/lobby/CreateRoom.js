import React from 'react';
import styled from 'styled-components';

const CreateButton = styled.button`
    position: relative;
    cursor: pointer;
    width: 80px;
    height: 27px;
    background-color: #86E57F;
    border: solid 1px #777777;
    border-radius: 5px;
    box-shadow: 2px 2px navy;
    &:hover {
        background: lightgreen;}
    &:active {
        background: #59DA50;}
`

function CreateRoom({ roomname, memberCount, password, onChange, onCreate}) {
    return (
        <div>
          <input style={{width:"60%", height:"25px",
                    border:"none", borderRadius:"5px"}}
            name="roomname"
            placeholder="방제"
            onChange={onChange}
            value={roomname}
          />
          <CreateButton onClick={onCreate}>방 만들기</CreateButton>
        </div>
      );
    }
    
    export default CreateRoom;