import { Link } from "react-router-dom";
import Rating from "../Components/Rating";

export default function RateCard({review}){
    return (
        <card class="rate-card">
            
                   <img src="https://assetsio.reedpopcdn.com/avatar-netflix-release-date-header.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="Movie Photo" />
                     <div class="title">
                         {review.movie_data.title}
                         <Rating />
                     </div>
                     <div class="text-2 sum-1">
                     {review.movie_data.description}
                    <hr />
                     <card>
                         <p>
                         {review.comment}
                         </p>
                         {review.rating}
                     </card>
                     <div> 
                          </div>
                     </div>
                    
        </card>
    )
}