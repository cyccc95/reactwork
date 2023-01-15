import './App.css';
// import styled from 'styled-components';
import { Title } from './MyCss';

const a = {
  backgroundColor: 'red',
};

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

function App() {
  return (
    <div>
      <div style={a}>안녕</div>
      <div className="box-style">헬로</div>
      <Title>잘가</Title>
    </div>
  );
}

export default App;
