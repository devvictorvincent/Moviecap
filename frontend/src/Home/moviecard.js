import { Link } from "react-router-dom";
import Rating from "../Components/Rating";

export default function MovieCard({movie}){
    return (
        <card class="movie-card">
                   <img src="https://assetsio.reedpopcdn.com/avatar-netflix-release-date-header.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="Movie Photo" />
                     <div class="title">
                         {movie.title}
                         <Rating rating={movie.rating}  no_of_ratings={movie.no_of_ratings}/>
                     </div>
                     <div class="text-2 sum-1">
                    {movie.description}
                    <br />
                    <br />
                     <div> <Link to="/movie" state={{id:movie.id}}>
                         <button>Watch Trailer</button>
                         </Link>
                          </div>
                     </div>
        </card>
    )
}