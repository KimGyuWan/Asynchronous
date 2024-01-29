const express = require("express");
const mysql = require("mysql");
// mysql연결할 것이다
const apiRouter = express.Router();
const mysqlcontact = require("../mysqlcontact");

// ~~~.cafe24app.com/data/notice
// ~~~.cafe24app.com/data/gallery

// 내보낼 때
apiRouter.use(express.json())
// 받을 때
apiRouter.use(express.urlencoded({ extended: true }))
// query방식은 12번째 라인 명령이 꼭 있어야 읽을 수 있다.
// params방식은 12번째 라인 명령이 없어도 된다.

apiRouter.get("/", (req, res, next) => {
  // localhost:8003/api?bo_table=gallery
  // req -> res
  // req -> next -> req -> res (종료)
  // req.query ( get: 주소창 ), req.body ( post: 글쓰기 )
  const botable = req.query.botable

  // req.body.crud = "select";
  // req.query.crud = "select";
  // req.body.botable = botable
  // next("route")
})

apiRouter.use("/", mysqlcontact)

// apiRouter.use("/", (req, res) => {
//   res.send(`받았습니다. ${req.query.crud} ${req.query.botable}`)
// })


module.exports = apiRouter;
// 일반 라우터 만드는 방법

