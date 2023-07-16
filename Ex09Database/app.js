const express = require('express')
const nunjucks = require('nunjucks')
const indexRouter = require('./routes') //==> ./routes/index index는 생략가능
const app = express()

// html 문서 경로 , 형식 지정
app.set('views', __dirname+'/views')
app.set('view engine', 'html')
//numjucks 설정
nunjucks.configure('views',{
    express : app, //app(express) 객체 연결
    watch : true //html 파일이 연결되면 템플릿 엔진을 렌더링하겠다는 의미
})

app.use(express.urlencoded({extended:true})) //body데이터 다루기

app.use('/',indexRouter) //localhost:8888/...


app.set('port',process.env.POST ||8888)
app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...')
})
