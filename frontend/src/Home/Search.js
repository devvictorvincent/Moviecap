import Footer from "./Footer"
import Header from "./Home-components"
import MovieCard from "./moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "./Movie-screen";
import { useEffect, useState } from "react";
import PopularMovies from "./popularMovies";
import Skeleton from "./Skeleton";

function Search(){
    const [categories, setCategories] = useState();
    const [result, setResult] = useState(null);
    const [key, setKey] = useState(null);

    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    
    const [category, setCategory] = useState(null);
    
    const [searchQuery, setQuery] =useState({
        key:'',
        category:'any'
    })

     
 
    const rheaders ={
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };
      const handleInput =  (event) =>{
       
        const {name, value} = event.target;
        setQuery(prevState => ({
            ...prevState, 
            [name]:value
        }));
       
        fetchUserData();
      }
      
        // Function to fetch user data from the API
        const fetchUserData = async () => {
          try {
            setLoading(true);
            // Make API request using fetch or Axios
            const response = await fetch('http://localhost:8000/api/search',{
              method: 'POST',
              headers: rheaders,
              body: JSON.stringify(searchQuery)
    
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
              setResult(data.data.data);
            console.log(result);
            setLoading(false);
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
          }
        };
    
       
     
     


    return (
        <>
        <Helmet>
            
                <meta charSet="utf-8" />
                <title>Welcome to Moviecap - find interesting movies, rates and watch trailers</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
       <section class="flex">
       <div class="search-box" style={{width:'80%'}}>
                <input type="search" name="key"  placeholder="Start Typing to search Moviecap" onChange={handleInput}/>
                 

            </div>

            <div>
            <select  name="category" value={searchQuery.category} onChange={handleInput}>
                <option value="any">ALL</option>
                <option value="Epic">Epic</option>
                <option value="Epic">Romance</option>
                <option value="Epic">Drama</option>
                <option value="Epic">Afro FUsion</option>

            </select>
            </div>

        </section>

        <section class="text-center">
            <div class="section-title text-center">
                <div class="title">
                  
                </div>
            </div>
            {loading == true ? <><Skeleton dataType={'searchResult'} no={3} />  </> : ''}
            {result == null ? <div class="sp-bt-400px">  </div> : 
        result.map((item) =>{
            return <MovieCard 
            movie={item}  />
        })}
            </section>
            
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

export default Search;