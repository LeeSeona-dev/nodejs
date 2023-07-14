const express = require('express')
const router = express.Router()

//쿠키 생성
router.get('/setcookie', (req,res)=>{
    let nick ='nickname1'
    //서버에서 쿠키 생성 -> 클라이언트로 응답 시 포함
    res.cookie('nickname', nick , {
        maxAge : 1000000000, //만료기간(밀리초 단위 : 1000ms-> 1s)
        signed : true //쿠키 서명 -> 암호화
    })

    res.cookie('lunch', '닭가슴살', {
        expires : new Date(Date.now() + 1000*60*60*24) //하루 후 만료
    })

    res.send('쿠키 생성')
})

//쿠키 값 확인하기
router.get('/getcookies',(req,res)=>{
    //클라이언트에 쿠키 저장 되어있으므로 클라이언트->서버 -> request
    console.log(req.cookies.lunch) //서명이 안된 쿠키만 가지고 올 수 있음
    console.log(req.signedCookies.nickname)//서명이 된 쿠키만 가지고 올 수 있음
    res.send('쿠키 확인')
})
//쿠키 삭제
router.get('/deletecookie',(req,res)=>{
    res.clearCookie('nickname')
    res.send('쿠키 삭제')
})

module.exports = router
