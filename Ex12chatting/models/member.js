const Sequelize = require('sequelize')

module.exports = class Member extends Sequelize.Model {
    // init : 테이블에 대한 정의(컬럼, 자료형, 테이블 설정)
    // associate : 테이블 관계 설정

    static init(sequelize){
        return super.init({
             //컬럼 정보(id,pw,nick)
             id : {
                 type : Sequelize.STRING(50), //저료형과 크기 지정
                 allowNull : false, //null값을 허용할 건지
                 primaryKey : true, //기본키 지정
                 unique : true //unique 설정(겹치지 않아야 함)
             },
             pw : {
                 type : Sequelize.STRING(50),
                 allowNull : false
             },
             nick : {
                type : Sequelize.STRING(50),
                allowNull : false
             }
         },{ //테이블에 대한 설정 지정
             sequelize, //models/index.js -> user연결하기 위한 옵션
             timestamps : false ,//true로 하면 createAt, updateAt이 자동 생성
             modelName : 'Member', //프로젝트에서 사용하는 모델 이름
             tableName : 'member', //실제 db테이블 이름
             charset : 'utf8', //인코딩 방식 지정
             collate : 'utf8_general_ci' //인토딩 방식 지정
         })
     }
     static associate(db){ //다른 테이블에 대한 설정을 넣어줘 테이블 사이의 연관이 가능하게 해줌
        db.Member.hasMany(db.Chat, {foreignKey : 'userid', sourceKey : 'id'}) 
        // db.User.hasMany(db.Board, {foreignKey : 'id', sourceKey : 'id'}) //1:N관계
         // db.User.hasOne //1:1
         // db.User.belongToMany // N:N
     }
}