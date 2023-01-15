import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청 (fetch, axios(다운))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  // 빈 배열 : 한 번만 실행
  useEffect(() => {
    // 다운로드 가정 = fetch(), axios(), ajax() => 비동기
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    // 다운로드 되기 전 빈 데이터가 들어감
    // 다운로드 완료 되면 콜백되서 데이터가 들어가고 다시 랜더링 => 상태변수 써야함
    setBoards([...data]);
    setUser({ id: 1, username: 'cos' });
  }, []);

  return (
    <div>
      <Home boards={boards} setBoards={setBoards} user={user} />
    </div>
  );
};

export default HomePage;
