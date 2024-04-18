import Footer from "../Home/Footer";
 import Header from "../Home/Home-components"
import MovieCard from "../Home/moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "../Home/Movie-screen";
import PopularMovies from "../Home/popularMovies";
import RateCard from "../Components/RateCard";
import { useEffect, useState } from "react";
import Skeleton from "../Home/Skeleton";

function Ratings(){



    const token = localStorage.getItem('token')
    const [myRatings, setmyRatings] =useState(null);
     
    
    const rheaders ={
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };

      useEffect(() => {
        // Function to fetch user data from the API
        const fetchData = async () => {
          try {
            // Make API request using fetch or Axios
            const response = await fetch('http://localhost:8000/api/reviews',{
              method: 'POST',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            setmyRatings(data.data);
            console.log(myRatings);
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
          }
        };
    
        // Call the fetchData function when the component mounts
        fetchData();
    
        // Cleanup function (optional)
        return () => {
          // Cleanup tasks, if any
        };
      }, []); // Empty dependency array ensures the effect runs once after the initial render
    

   
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My Ratings - MovieCap</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
       
 
        <section class="text-center">
            <div class="section-title text-center">
                <div class="title">
                   My Ratings
                </div>
            </div>
            {myRatings == null ? <><Skeleton dataType={'myRatings'} no={10} />  </> : 
        myRatings.map((item) =>{
            return <RateCard 
            review={item}  />
        })}
            
            </section>
            
            <section class="text-center">
            <div class="section-title">
                <div class="title">
            More Movies
                </div>
            </div>
      <PopularMovies />
     
            </section>
          <Footer />
        </>
    )
}

export default Ratings;