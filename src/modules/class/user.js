export default class User{

    host = false;
    roomInfo = false;
    constructor(socket, userIcon, nickname, mediaStream){
        this.socket = socket;
        this.userIcon = userIcon;
        this.nickname = nickname;
        this.mediaStream = mediaStream;
        this.socket.emit("getNickname", this.nickname, this.userIcon)
    
    }
    //guest (host==false)
    joinRoom(roomname){
        this.socket.emit('joinRoom',roomname)
        this.roomInfo = roomname;
    }
    
}
    //host (host==true)