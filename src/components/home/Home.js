import React from 'react';
import styled from 'styled-components';

// 부모로부터 받아온 어떤 데이터를 가지고 스타일링을 동적으로 할 것이라면?
let StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

const Home = (props) => {
  const { boards, setBoards, user } = props;

  return (
    <div>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
