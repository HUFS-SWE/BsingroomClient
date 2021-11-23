export default class User{

    host = false;
    roomInfo = false;
    constructor(socket, userIcon, nickname, audioDevice){
        this.socket = socket;
        this.userIcon = userIcon;
        this.nickname = nickname;
        this.audioDevice = audioDevice;
    }
    //guest (host==false)
    joinRoom(roomname){
        this.socket.emit('joinRoom',roomname)
        this.roomInfo = roomname;
    }
}
    //host (host==true)