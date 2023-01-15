// rsc로 자동완성
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트 생성(재사용)
// styled-components => js파일과 css파일 관리
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeaderLink = styled(Link)`
  // styled에 없는 것은 상속해서 사용
  color: red;
`;

const Header = () => {
  return (
    <>
      <StyledHeaderDiv backgroundColor="blue">
        <ul>
          <li>
            <StyledHeaderLink to="/">홈</StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink to="/login/10">로그인</StyledHeaderLink>
          </li>
        </ul>
      </StyledHeaderDiv>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              홈
            </Link>
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Link to="/login" className="nav-link">
              로그인
            </Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
