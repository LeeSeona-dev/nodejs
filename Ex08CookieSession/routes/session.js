const express = require('express')
const router = express.Router()

//세션 생성
router.get('/setsession',(req,res)=>{
    //클라이언트가 가진 구별할 수 있는 아이디 값을 -> 서버로 =>req
    req.session.nickname = 'newnick'
    req.session.lunch = '닭가슴살'
    
    res.send('세션 생성')
})

//세션 확인
router.get('/getsession', (req,res)=>{
    res.send(req.session.nickname+ ", "+ req.session.lunch)
})

//세션 삭제
router.get('/deletesessions', (req,res)=>{
    req.session.destroy()
    res.send('세션삭제')
})
module.exports = router