const express = require('express')
const Room = require('../models/room')

const router = express.Router()

//첫페이지(login.html)
router.get('/',(req,res)=>{
    res.render('login') //login.html렌더링
})

//rooms.html(db에서 채팅방 데이터 불러오기)
router.get('/rooms', async(req,res,next)=>{
    // room 테이블에 있는 모든 데이터
    // console 출력
    try{
       const rooms = await Room.findAll()
       // console.log(rooms)
       res.render('rooms',{ rooms: rooms})
    }catch(err){
        next(err)
    }
    
})

module.exports = router