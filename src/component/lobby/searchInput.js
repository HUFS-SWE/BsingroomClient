import React from 'react';
import styled from 'styled-components';
import RoomList from './RoomList';
import Room from './RoomList';
import rooms from './lobby';

const SearchButton = styled.button`
    position: relative;
    cursor: pointer;
    width: 50px;
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

const onclick = (searchinput) => {
    Search(searchinput);
}

function SearchInput({ searchinput, onChange, onClick, Search }) {

    return (
        <div>
            <input
                style={{width:"70%", height:"25px",
                    border:"none", borderRadius:"5px"}}
                name="searchinput"
                placeholder="방찾기"
                value={searchinput}>
            </input>
            <SearchButton type='submit' onClick={onclick} > 검색 </SearchButton>
        </div> 
    );
}

function Search(searchinput){
    const resultRooms = []; //검색 결과가 담겨 업데이트 될 rooms 리스트
    
    //console.log(rooms);
    for(let i=0; rooms.length; i++) { 
        roomname = rooms[i].room; //rooms 배열에서 roomname 접근

        if (roomname === searchinput) { 
            //만약 searchinput과 동일한 roomname이 있다면, 단일 반환
            resultRooms.add(roomname);
            return resultRooms;
        }
        //아니라면 searchinput을 포함하는 roomname 저장
        else{

        }
        //RoomList랑 resultRooms랑 바꿈...
        
    }
    return resultRooms;
}
export default SearchInput;
