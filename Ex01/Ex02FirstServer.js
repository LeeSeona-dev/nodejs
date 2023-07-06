//http 모듈
const http = require('http')

//req(요청), res(응답) 앞자리는 항상 요청객체 req!
http.createServer((req,res)=>{
    //요청, 응답 로직 작성

}).listen(8888, ()=>{
    console.log('8888 포트에서 서버 연결 기다리는 중');
})