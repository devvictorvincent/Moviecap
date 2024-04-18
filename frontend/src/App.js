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
import Search from './Home/Search';
import Ratings from './Account/Ratings';
import Landing from './Landing/LandingPage';

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter forceRefresh={true}>
     <Helmet defaultTitle="MovieCap">
        <meta name="description" content="Welcome to MovieCap. Find interesting movies, revies, ratings and watch trailers here!" />
        <link rel="icon" href="/moviecap.png" />
      </Helmet>
    <Routes>
     
      
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/landing" element={<Landing />}></Route>
          <Route index path="/search" element={<Search />}></Route>
          <Route index path="/movie" element={<Movie />}></Route>
          <Route index path="/ratings"  element= {token !== null  ? <Ratings /> : <Login/>}></Route>
          <Route index path="/login" element={<Login />}></Route>
          <Route index path="/register" element={<Register />}></Route>
          <Route index path="*" element={<NotFound />}></Route>
          
        </Routes>
        </BrowserRouter>
     
  );
}

export default App;
