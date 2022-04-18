import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Page/Login/Login';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import Home from './Page/Home/Home/Home';
import SignUp from './Page/SignUp/SignUp';
import Blog from './Page/Blog/Blog';
import Services from './Page/Home/Services/Services';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import CheckOut from './Page/CheckOut/CheckOut';
import AboutMe from './Page/AboutMe/AboutMe';
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='home#services' element={<Services></Services>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
