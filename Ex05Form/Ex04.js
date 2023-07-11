const http = require('http')
const fs = require('fs').promises
const url = require('url')
const qs = require('querystring')

const server = http.createServer(async(req,res)=>{
    
    //url 다루기! -> url 모듈 사용
    let reqUrl = req.url
    let pathname = url.parse(reqUrl, true).pathname

    console.log(req.method)

    if(pathname==='/api/form'){
        const f =   await fs.readFile('./Ex04.html')
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(f)
        res.end()
       }
        if(pathname ==='/api/join'){
            
            let body = ''
            //data 이벤트(data가 들어오는)가 발생하면 함수 호출
            //들어오는 데이터들을 하나로 묶어주는 작업
            req.on('data', function(data){
                body  += data
                console.log(body)
            })
            //data가 더 이상 들어오지 않을때 이벤트 발생
            req.on('end', function(){
                let data = qs.parse(body)
                console.log(data)

                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        
                let html = '<html>'
                html += '<body>'
                html += '<h4>'+'아이디 :'+data.id+'</h4>'
                 if(data.password1===data.password2){
                    html += '<h4>'+'비밀번호가 일치합니다.'+'</h4>'
                 }else{
                    html += '<h4>'+'비밀번호가 일치하지않습니다.'+'</h4>'
                 }
                
                html += '<h4>'+'성별 : '+data.gender+'</h4>'
                html += '<h4>'+'혈액형 : '+data.gender+'</h4>'
                html += '<h4>'+'생일 : '+data.birthday+'</h4>'
                html += '<h4>'+'취미 : '+data.hobby+'</h4>'
                html += '<h4>'+'좋아하는 색: '+data.color+'</h4>'
                html += '<h4>'+'남기는 말: '+data.text+'</h4>'
                html +='</body>'
                html += '</html>'
                res.write(html)
                res.end()
            })
        }
    
})

server.listen(8888)
server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 기다리는 중...')
})