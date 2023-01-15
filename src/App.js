import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
