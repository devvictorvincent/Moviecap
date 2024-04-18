import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import MovieCard from "./moviecard";
 

export default function PopularMovies(){
    const token = localStorage.getItem('token')
    const [popularMovies, setpopularMovies] =useState(null);
     
    
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
            const response = await fetch('http://localhost:8000/api/movies/trending',{
              method: 'GET',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            setpopularMovies(data.data.data);
            console.log(popularMovies);
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
    

    return (<>
        {popularMovies == null ? <><Skeleton dataType={'popularMovies'} no={10} />  </> : 
        popularMovies.map((item) =>{
            return <MovieCard 
            movie={item}  />
        })}

        </>
    )
}