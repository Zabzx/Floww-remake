import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { NameProvider } from './context/NameContext';
import App from './App';
import Home from './components/Pages/Home/Home';
import { PostProvider } from './context/PostContext';

ReactDOM.render(
  <React.StrictMode>
    <NameProvider>
    <PostProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </PostProvider>
    </NameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
