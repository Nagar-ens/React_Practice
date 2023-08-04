import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Projects from './pages/projects';
import Products from './pages/products';
import Home from './pages/home';
import Blog from './pages/blog';
import Pages from './pages/pages';
import Cart from './pages/cart';

import GetInTouch from './pages/getInTouch';
import './index.css';
import ToDoList from './tasks/toDoList';
import DarkMode from './tasks/darkMode';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/getInTouch" element={<GetInTouch />} />
          <Route path="/project/toDoList" element={<ToDoList />} />
          <Route path="/project/darkMode" element={<DarkMode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
