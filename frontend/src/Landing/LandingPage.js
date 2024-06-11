
import {Helmet} from "react-helmet";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"
import LandingScreen from "./LandingScreen"; 
import Footer from "../Home/Footer";
import LandingHeader from "./LandingHeader";
 
 

function Landing(){
    
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
            const response = await fetch('http://localhost:8000/api/movies/top',{
              method: 'GET',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            setTopMovies(data.data.data);
            console.log(topMovies);
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
                <title>Welcome to Moviecap Home - find interesting movies, rates and watch trailers</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    
        <LandingHeader />
        <LandingScreen />

        <section class="text-center" id="features">
            <div class="section-title">
                <div class="title">
            Key Features
                </div>
                <p>See some our awesome key features</p>
            </div>

            <div class="grid grid-3 m-grid-1">
                <card>
                    <div class="card-body">
                        
                    <img src="/3046750_32616.svg" style={featureImage} />
                        <div class="title">
                            Fast Reviews
                        </div>
                        <div class="text-3">
                        Our rating system provides a quick and easy way to gauge the quality of a movie. Each film is rated on a scale of 1 to 5 stars, based on factors such as plot, acting, direction, and overall entertainment value.
                            </div>
                    </div>
                    </card>
                    
                    <card>
                    <div class="card-body">
                        <img src="/stars.svg" style={featureImage} />
                        <div class="title">
                            Manage Reviews/Ratings
                        </div>
                        <div class="text-3">
                          You can track movies in your rating list to see movies you have reviewed in the past </div>
                    </div>
                    </card>
                    <card>
                    <div class="card-body">
                        
                    <img src="/5014.jpg" style={featureImage} />
                        <div class="title">
                            Watch Trailers
                        </div>
                        <div class="text-3">
                             Wet your appetite by eatching official trailers of your favorite movies an d get to view the hottest parts of the movies
                            </div>
                    </div>
                    </card>
                    
                    
                    <card>
                    <div class="card-body">
                        
                    <img src="/mobile-friendly.svg" style={featureImage} />
                        <div class="title">
                           Mobile Friendly
                        </div>
                        <div class="text-3">
                        Access MovieCap anytime, anywhere, on any device. Our website is fully optimized for mobile browsing, so you can read reviews, check ratings, and discover new movies on the go.</div>
                    </div>
                    </card>  
                    
                    
                      <card>
                    <div class="card-body">
                        
                    <img src="/community.jpeg" style={featureImage} />
                        <div class="title">
                        User Reviews
                        </div>
                        <div class="text-3">
                        We believe in the power of community feedback. That's why MovieCap allows users to submit their own reviews and ratings for movies they've watched. Share your thoughts, opinions, and recommendations with fellow movie lovers.
                         
                         </div>
                    </div>
                    </card> 
                    
                    
                      <card>
                    <div class="card-body">
                        
                    <img src="/database.jpeg" style={featureImage} />
                        <div class="title">
                        Extensive Database
                        </div>
                        <div class="text-3">
                        Our database includes a vast collection of movies spanning various genres, languages, and release years. From timeless classics to the latest blockbusters, you'll find it all on MovieCap.
                         </div>
                    </div>
                    </card>
            </div>
         
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        <section class="text-center" id="about">
            <div class="section-title">
            

                <div class="flex flex-spaced-around">
                    <div class="left text-left about-text">
                    <div class="title">
                   About MovieCap
                </div>
                    <h3>Welcome to MovieCap: </h3> Your Ultimate Destination for Movie Ratings and Reviews
<p>
At MovieCap, we're dedicated to providing movie enthusiasts with comprehensive and insightful reviews and ratings to help you make informed decisions about your next cinematic experience.
</p>
 Whether you're a casual moviegoer or a hardcore cinephile, MovieCap has something for everyone.
 <p>
     This Project inspiration was born out of my love for movies and drive towards buiding an active community of
     movie lovers  to share insights and connect

 </p>
         <div>
             <h2>Project Team Members</h2>
             <div class="title">Vincent Victor </div>
             <a target="_blank" href="https://github.com/devvictorvincent">Github</a>

<p>Find the project repository <a href="https://github.com/devvictorvincent/Moviecap" >Here</a></p>
        </div>               
                    </div>

                    <div class="right destop-only">
                            <img src="/pexels-fotios-photos-1092671.jpg" style={{width:'60%', borderRadius:'10px'}} />

                        </div>

                </div>
            </div>
           
         
            </section>
        
            
          <Footer />
        </>
    )
}

export default Landing

const featureImage ={width:'200px', height:'180px', objectFit:'cover', borderRadius: '20px'};