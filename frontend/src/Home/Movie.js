import React from 'react';
import Footer from "./Footer"
import Header from "./Home-components"
import MovieCard from "./moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "./Movie-screen";
import Toggle from "../Components/Toggle";
import { useLocation } from 'react-router-dom';
import RelatedMovies from './relatedMovies';

function Movie(props){
    const location = useLocation();
    const   state = location.state;
    const {id} = state;

    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome to Moviecap - find interesting movies, rates and watch trailers</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
      <MovieScreen id={id} background="p9972804_b_h8_bl.jpg"/>
     
<section>
    <card>
    <Toggle />
    </card>
</section>
      
            
            <section class="text-center">
            <div class="section-title">
                <div class="title">
           Related Movies
                </div>
            </div>
        <RelatedMovies id={id}/>
            </section>
          <Footer />
        </>
    )
}

export default Movie;