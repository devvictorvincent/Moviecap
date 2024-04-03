import Footer from "./Footer"
import Header from "./Home-components"
import MovieCard from "./moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "./Movie-screen";

function Movie(){
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome to Moviecap - find interesting movies, rates and watch trailers</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
      <MovieScreen background="p9972804_b_h8_bl.jpg"/>

        <section class="text-center">
            <div class="section-title text-center">
                <div class="title">
                    Top Movies
                </div>
            </div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
            </section>
            
            <section class="text-center">
            <div class="section-title">
                <div class="title">
            Popular Movies
                </div>
            </div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
            </section>
          <Footer />
        </>
    )
}

export default Movie;