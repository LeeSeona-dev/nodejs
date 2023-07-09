const http = require('http')
const fs = require('fs').promises
const server = http.createServer(async (req, res)=>{

    const file = await fs.readFile('./Ex03.html') 
    //async + await => 비동기방식

    res.writeHead(200, {'Content-Type':'text/html; charset = UTF-8'})
    res.write(file)
    res.end()
})

server.listen(8888)
server.on('listening',()=>{
    console.log('8888번 포트에서 서버 연결 기다리는 중...')
})