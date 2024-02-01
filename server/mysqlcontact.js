const express = require("express");
const mysqlrouter = express.Router();
const mysql = require("mysql");
const dbinfo = require("../dbdata/dbcontact.json")

mysqlrouter.use(express.json());
mysqlrouter.use(express.urlencoded({ extended: true }))
const conn = mysql.createPool(dbinfo)
// db접속 json파일을 createPool로 연결하는 작업

mysqlrouter.post("/", (req, res) => {
  // db접속
  conn.getConnection((error, connection) => {
    if (error) throw console.log("DB 정보가 올바르지 않습니다 : " + error)
    // db 정보가 올바르지 않을 때 실행되는 식
    // db접속 성공 -> query문 써서 처리결과 받아야함
    connection.query(`select * from markerData`, (err, result) => {
      if (err) throw "SQL문에 오류가 있습니다 :" + err + result;
      // 쿼리처리결과를 result에 저장함
      res.send(result);
    })
    connection.release();
    // 연결 반환
  })
})

module.exports = mysqlrouter;