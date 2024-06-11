import Footer from "./Footer"
import Header from "./Home-components"
import MovieCard from "./moviecard"
import Screen from "./Screen"
import {Helmet} from "react-helmet";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom"
import PopularMovies from "./popularMovies";
 

function Home(){
    
  const baseUrl = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');
     
    const [topMovies, setTopMovies] =useState(null);
     
    
    const rheaders ={
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };

      useEffect(() => {
        // Function to fetch user data from the API
        const fetchUserData = async () => {
          try {
            // Make API request using fetch or Axios
            const response = await fetch(baseUrl+'/movies/top',{
              method: 'GET',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            setTopMovies(data.data.data);
            console.log('movies is  '+ data.data.data);
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
          }
        };
    
        // Call the fetchUserData function when the component mounts
        fetchUserData();
    
        // Cleanup function (optional)
        return () => {
          // Cleanup tasks, if any
        };
      }, []); // Empty dependency array ensures the effect runs once after the initial render
    

    return (
    
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome to Moviecap - find interesting movies, rates and watch trailers</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
        <Screen />

        <section class="text-center">
            <div class="section-title text-center">
                <div class="title">
                    Top Movies
                </div>
            </div>
            
            {topMovies == null ? <><Skeleton dataType={'topMovies'} no={5} />  </> : 
            topMovies.map((item) =>{
                return <MovieCard 
                movie={item} />
            })}
         
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section class="text-center">
            <div class="section-title">
                <div class="title">
            Popular Movies
                </div>
            </div>
            <PopularMovies />
            </section>
          <Footer />
        </>
    )
}

export default Home