import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../components/login/Login';

const LoginPage = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/'); // 1페이지 뒤로는 -1
        }}
      >
        홈으로
      </button>
      <Login />
    </div>
  );
};

export default LoginPage;
