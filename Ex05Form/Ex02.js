const http = require('http')
const fs = require('fs').promises
const url = require('url')

const server = http.createServer(async(req,res)=>{
    
    //url 다루기! -> url 모듈 사용
    let reqUrl = req.url
    let pathname = url.parse(reqUrl, true).pathname

    if(pathname==='/api/form'){
        const f = await fs.readFile('./Ex02.html')
        res.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'})
        res.write(f)
        res.end()
    }else if(pathname==='/api/ope'){
        
       let queryData = url.parse(reqUrl, true).query
        //query,data(사용자가 입력한 값)
        let num1 = parseInt(queryData.num1)
        let num2 = parseInt(queryData.num2)
        let ope = queryData.ope
        
        res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
        
        let html = '<html>'
        html +='<body>'
        if(ope ==='+'){
            html +='<h3>'+num1+'+'+num2+'='+(num1+num2)+'</h3>'
        }else if(ope ==='-'){
            html +='<h3>'+num1+'-'+num2+'='+(num1-num2)+'</h3>'
        }else if(ope ==='*'){
            html +='<h3>'+num1+'*'+num2+'='+(num1*num2)+'</h3>'
        }else {
            html +='<h3>'+num1+'/'+num2+'='+(num1/num2)+'</h3>'
        }
        html +='</body>'
        html += '</html>'
        res.write(html)
        res.end()
    }
})

server.listen(8888)
server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 기다리는 중...')
})