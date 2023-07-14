const express = require('express')
const cookieRouter = require('./routes/cookie')
const sessionRouter = require('./routes/session')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

const app = express()


app.use(cookieParser('secretkey')) //쿠키 암호화 키 설정
app.use(session({
    httpOnly : true, //http 통신 할때만 허용하겠다는 의미
    secret : 'secretkey', //암호화 키설정
    resave : false, //세션에 수정사항이 없더라도 다시 저장할 것인지 
    cookie : {//쿠키 설정
        httpOnly : true
    },
    store : new fileStore()

}))

//localhost:8888/c/...모든 요청들 쿠키 라우터에서 수행~
app.use('/c',cookieRouter)
app.use('/s',sessionRouter) //localhost:8888/s/...


app.set('port',process.env.POST ||8888)
app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...')
})
