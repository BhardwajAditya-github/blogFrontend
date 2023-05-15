import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Blog from './component/Blog';
import Addblog from './component/Addblog';
import UserBlog from './component/UserBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/addblog/:author" element={<Addblog />}></Route>
        <Route path="/blogs/:title" element={<UserBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
