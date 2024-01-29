import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [content, setcont] = useState([]);


  // async 함수 선언은 비동기 함수를 정의하며 async 함수 안에 axios와 같은 비동기통신을 위한 식이 쓰여있을 때 넣어준다.
  const tableselect = async (tablenm) => {
    axios.post(`/data?tablenm=${tablenm}`)
      // 노드의 req -> res -> Response.data로 저장된다.
      .then((Response) => { // 여기 변수에 저장
        console.log(typeof Response.data, Response.data, Array.isArray(Response.data));
        setcont([...Response.data]);
      })
      .catch((Error) => { console.log(Error) })
  }

  useEffect(() => { tableselect("swiper") }, [])

  return (
    <div className="App">
      {
        content.map((e, i) => e.src)
      }
    </div>
  );
}

export default App;
