const http = require('http')

const server = http.createServer((req,res)=>{
    //Rest API
    //전체 회원 정보 : [GET]localhost:8888/fullstack(context root)/user
    //1번 회원 정보 : [GET]localhost:8888/fullstack/user/1
    //                              (쿼리스트링)  /user?unum=1

    if(req.url==='/home'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        let data = '<html>'
        data += '<body>'
        data +='<h4>home!</h4>'
        data +='</body>'
        data +='</html>'

        res.write(data)
        res.end()
    }else if(req.url==='/plus'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        let data = '<html>'
        data += '<body>'
        data +='<h4>plus!</h4>'
        data +='</body>'
        data +='</html>'

        res.write(data)
        res.end()
    }
})

server.listen(8888)
server.on('listening',()=>{
    console.log('8888 포트에서 서버 연결 기다리는 중...')
})