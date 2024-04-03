import Footer from "./Footer"
import Header from "./Home-components"
import MovieCard from "./moviecard"
import Screen from "./Screen"
import {Helmet} from "react-helmet";

function Home(){
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

export default Home