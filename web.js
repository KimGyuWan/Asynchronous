const express = require("express");
const nodeserver = express();
const path = require("path");
const port = 8003;

// 라우터 끌고오는 방법
const apiRouter = require("./server/api/api");
const datain = require("./newData/routers/datain");
const navi = require("./server/navi")

nodeserver.use(express.static(path.join(__dirname, "./front/build")))

nodeserver.get("/", (req, res) => {
  res.send(path.join(__dirname, "./front/build/index.html"));
})

nodeserver.use("/api", apiRouter);
nodeserver.use("/data", datain);
nodeserver.use("/navi", navi);



nodeserver.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./front/nopage.html"))
})

nodeserver.listen(8003, () => {
  console.log("구동완료")
})