import './App.css';
import { useState } from 'react';

function App() {
  console.log('App 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: 'park' },
    { id: 2, name: 'lee' },
    { id: 3, name: 'choi' },
    { id: 4, name: 'kim' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    // const a = sample.concat({ id: 5, name: 'Jo' });
    setUsers([...sample, { id: num, name: 'Jo' }]);
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
