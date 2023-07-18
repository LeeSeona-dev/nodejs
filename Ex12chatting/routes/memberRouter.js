const express = require('express')
const Member = require('../models/member')

const router = express.Router()


router.post('/login',async (req,res,next)=>{
    let {id, pw} =  req.body
    console.log(req.body)
 
    try{
         
         const member = await Member.findOne( {
            where : {id : id , pw : pw}, 
            attributes: ['id', 'pw', 'nick']
         })
 
     //     req.session.memberId = result.id
     //     req.session.memberPw = result.pw
     //     req.session.memberNick = result.nick
            req.session.member = member //세션 값 저장
         req.session.save(function(){
          if(member){
               res.redirect('/rooms')
          }else{
               res.redirect('/')
          }
          })
         
    }catch(err){
         next(err) //에러처리 미들웨어
    }
 })

module.exports = router