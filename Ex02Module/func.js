const {odd, even} = require('./var') //현재 폴더의 var.js 모듈 가져다 쓴다는 의미

function checkOddOrEven(num){
    if(num%2===1){
        //홀수입니다 -> var 모듈(odd)
        return odd
    }else{
        //짝수입니다 -> var 모듈(even)
        return even
    }
}

module.exports = checkOddOrEven