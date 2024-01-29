const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// const dbinfo = require("../data/dbcontact.json")

router.use(express.json());
router.use(express.urlencoded({ extended: true }))
// const conn = mysql.createPool(dbinfo)

router.get("/", (req, res) => {
  const tablenm = req.body.botable;
  res.send(tablenm)
  // conn.getConnection((error, connection) => { //getConnection : 연결풀에서 연결하나 가져옴. 
  //   if (error) throw console.log("DB 정보가 올바르지 않습니다 : " + error) //throw : 예외발생처리
  //   connection.query(`select * from ${tablenm}`, (err, result) => { // insert, select, updata, delete
  //     if (err) throw "SQL문에 오류가 있습니다 :" + err + result;
  //     // 다음 postman에서 다음 경로로 확인하기. 
  //     // dbtable : api.js에서 선언된 변수. | contact : db의 테이블명
  //     // http://localhost:8011/api?dbtable=contact
  //     res.send(result); // 얘가 sql문 처리 결과보냄.
  //     console.log(result)
  //   })
  //   connection.release(); // release() : 연결 풀에서 빌려온 연결을 사용 후 그 연결을 다시 풀로 반환.
  // })
})

module.exports = router;