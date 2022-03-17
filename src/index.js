import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { NameProvider } from './context/NameContext';
import App from './App';
import Home from './components/Pages/Home/Home';
import { PostProvider } from './context/PostContext';
import { ResponsiveContextProvider } from './context/ResponsioveContext';

ReactDOM.render(
  <React.StrictMode>
    <NameProvider>
    <PostProvider>
    <ResponsiveContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </ResponsiveContextProvider>
    </PostProvider>
    </NameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
