export default class User{

    host = false;
    roomInfo = false;
    roomList = [];
    constructor(socket, userIcon, nickname, audioDevice){
        this.socket = socket;
        this.userIcon = userIcon;
        this.nickname = nickname;
        this.audioDevice = audioDevice;
        this.socket.on('showRoomList', (rooms)=>{
            this.roomList = [];
            for(var i=0; i<rooms.length; ++i){
                if(rooms[i]) //if(rooms[i].slice(3)=="room")
                this.roomList.push({roomname:rooms[i]}) 
            }
        })
    }
    //guest (host==false)
    joinRoom(roomname){
        this.socket.emit('joinRoom',roomname)
        this.roomInfo = roomname;
    }
}
    //host (host==true)