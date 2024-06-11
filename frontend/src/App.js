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
import Profile from './Account/Profile';  
import AdminLayout from './Admin';
import AdminDashboard from './Admin/Dashboard';
import Categories from './Admin/Category/Categories';
import AdminSettings from './Admin/AdminSettings';
import AdminMovies from './Admin/Movie/AdminMovies';
import AdminRatings from './Admin/AdminRatings';
import Users from './Admin/User/Users';
import NewMovie from './Admin/Movie/NewMovie';
import EditMovie from './Admin/Movie/EditMovie';

function App() {
  const token = localStorage.getItem('token');
  console.log('API URL:'+ process.env.REACT_APP_API_URL);
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
          <Route index path="/profile"  element= {token !== null  ? <Profile /> : <Login/>}></Route>
          <Route index path="/login" element={<Login />}></Route>
          <Route index path="/register" element={<Register />}></Route>
          <Route index path="*" element={<NotFound />}></Route>


          <Route  path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="movies" element={<AdminMovies />} />
            <Route path="movies/new" element={<NewMovie />} />
            <Route path="movie/edit" element={<EditMovie />} />
            <Route path="ratings" element={<AdminRatings />} />
            <Route path="users" element={<Users />} />
          </Route>
          
        </Routes>
        </BrowserRouter>
     
  );
}

export default App;
