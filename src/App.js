import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Page/Login/Login';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import Home from './Page/Home/Home/Home';
import LogOut from './Page/LogOut/LogOut';
import Blog from './Page/Blog/Blog';
import Services from './Page/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='home#services' element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
