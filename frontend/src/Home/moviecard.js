import { Link } from "react-router-dom";
import Rating from "../Components/Rating";

export default function MovieCard({movie}){
    const baseUrl = "http://localhost:8000/";
    return (
        <card class="movie-card">
                   <img src={baseUrl + movie.photo} alt="Movie Photo" />
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