const socketIO = require('socket.io')

                //express server
module.exports = (server,app) =>{
    //socketIO 객체 생성
    const io = socketIO(server, {path : '/socket.io'})

    app.set('io', io)

    //라우팅(->네임스페이스 : 경로)
    //채팅 -> /chat
    //실시간알림 ->/alram
    
    const chat = io.of('/chat') //채팅 관련 처리 네임스페이스

    chat.on('connection', (socket)=>{
        console.log('chat 네임스페이스 접속 성공')
        //room설정 -> 방이름(roomid활용) 설정 가능 ->클라이언트 요청경로에포함
        //요청 경로(request객체 활용)
        const ref = socket.request.headers.referer
        const roomId = ref.split('/')[ref.split('/').length-1]
        console.log(roomId)

        socket.join(roomId)

        
        socket.on('disconnect', ()=>{
            console.log('chat 네임스페이스에서 접속 해제')
        })
        socket.on('chat', (data)=>{ //data : 채팅 관련 데이터
           // console.log('socket.js : ', data)
           socket.to(roomId).emit(data)
        } )
    })
}