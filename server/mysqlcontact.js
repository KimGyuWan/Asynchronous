const express = require("express");
const mysqlrouter = express.Router();
const mysql = require("mysql");
const dbinfo = require("../data/dbcontact.json")

mysqlrouter.use(express.json());
mysqlrouter.use(express.urlencoded({ extended: true }))
const conn = mysql.createPool(dbinfo)
// db접속 json파일을 createPool로 연결하는 작업

mysqlrouter.post("/", (req, res) => {
  res.send(req.body.crud)
})

module.exports = mysqlrouter;