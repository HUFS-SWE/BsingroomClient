import {io} from 'socket.io-client'

export default class User{

    host = false;
    roomInfo = false;

    constructor(socket, userIcon, nickname, audioDevice){
        this.socket = socket
        this.userIcon = userIcon;
        this.nickname = nickname;
        this.audioDevice = audioDevice;
    }
    //guest (host==false)
    enterRoom(){
        this.socket.emit('enterRoom','hell')
    }
}
    //host (host==true)