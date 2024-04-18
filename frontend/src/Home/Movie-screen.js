import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import Rating from '../Components/Rating';
import Rate from '../Components/Rate';
import PopCard from './popcard';
import Skeleton from './Skeleton';

export default function MovieScreen({id, background}){
    
    const [pop, setPop] = useState(false);
    const popIt = () =>{
        setPop(!pop);
    }
    const myComponentProps = {
      // Define props here
      movieId: id,
      anotherProp: 123,
    };
     
    const token = localStorage.getItem('token');
     
    const [movie, setMovie] =useState(null);
     
    
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
            const response = await fetch('http://localhost:8000/api/movie/'+id,{
              method: 'GET',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            //console.log(data.data);
            setMovie(data.data);
           // console.log(movie);
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
        <screen>
           {pop ? <PopCard content={Rate} props={{  // Define props here
      movieId: id,
      anotherProp: 123,
    }} popup={setPop}/> : ''} 
            <div class="overlay">
            </div>
              
            <div class="background">
                <img src={background} />
                </div>
                {movie == null ? <Skeleton /> :
                
                
                <div class="content">
                  
                    <div class="left">
                     <video class="movie" controls muted autoPlay playsInline>
                         <source src="/Avatar The Last Airbender Official Trailer Netflix.mp4" />
                     </video>
                     
                       
                     </div>
                     <div class="right">
                     <div class="big-title">
                     {movie.title}
                     
                        </div>
                        <p class="badge badge-info">{movie.category_data.title} </p>
                        <div class="text-2"> 
                                {movie.description}
                         </div>
                        <br />
                        <div>
                            <Rating
                            rating = {movie.rating}
                             no_of_ratings={movie.no_of_ratings} />          
                            <br />
                            <button onClick={() => popIt()}> Rate </button>  
                        </div>
                     </div>
                </div>
                }
                
        </screen>
    )
}