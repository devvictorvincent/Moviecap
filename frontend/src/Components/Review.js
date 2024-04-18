import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';

function Review({rating = 0, no_of_ratings=0}){
    return (
        <div class="review">
                <div class="user"><img class="user-thumb" src="" />
                     <span> Vincent Victor </span></div>
                     <p>This movie is so intresting it s highly recommended for action lovers </p>
                     <Rating />

        </div>

        )

        }

        export default Review;