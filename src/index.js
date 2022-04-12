import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { NameProvider } from './context/NameContext';
import App from './App';
import Home from './components/Pages/Home/Home';
import { PostProvider } from './context/PostContext';
import { ResponsiveContextProvider } from './context/ResponsioveContext';
import Profile from './components/Pages/Profile/Profile';
import { PfpProvider } from './context/PfpContext';
import { LikedPostsProvider } from './context/LikedPostsContext'

ReactDOM.render(
  <React.StrictMode>
    <NameProvider>
    <PostProvider>
    <LikedPostsProvider>
    <ResponsiveContextProvider>
    <PfpProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
    </PfpProvider>
    </ResponsiveContextProvider>
    </LikedPostsProvider>
    </PostProvider>
    </NameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
