import React from 'react';
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';


import logo from './logo.svg';
import './App.css';
import Home from './Home/Index';
import Login from './Home/Login';
import Register from './Home/Register';
import  NotFound  from './Home/Notfound';
import Movie from './Home/Movie';

function App() {
  return (
    <BrowserRouter>
     <Helmet defaultTitle="MovieCap">
        <meta name="description" content="Welcome to MovieCap. Find interesting movies, revies, ratings and watch trailers here!" />
        <link rel="icon" href="/moviecap.png" />
      </Helmet>
    <Routes>
     
      
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/movie" element={<Movie />}></Route>
          <Route index path="/login" element={<Login />}></Route>
          <Route index path="/register" element={<Register />}></Route>
          <Route index path="*" element={<NotFound />}></Route>
          
        </Routes>
        </BrowserRouter>
     
  );
}

export default App;
