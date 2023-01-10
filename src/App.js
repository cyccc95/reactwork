import logo from './logo.svg';
import './App.css';

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c; // undefined라는 값이 있는 것
  console.log(c);

  const mystyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
