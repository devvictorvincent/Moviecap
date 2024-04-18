import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({rating = 0, no_of_ratings=0}){
    const activeStar ='star active-star';
    const justAStar = 'star';
    const cRating =rating > 0 ? rating/no_of_ratings: rating;
    
     
    return (
        <div>
            <div class="stars">
                <FontAwesomeIcon icon={faStar} className={cRating >= 1 ?  activeStar :justAStar}  />
                <FontAwesomeIcon icon={faStar} className={cRating >= 2 ?  activeStar :justAStar}  />
                <FontAwesomeIcon icon={faStar} className={cRating >= 3 ?  activeStar :justAStar} />
                <FontAwesomeIcon icon={faStar}  className={cRating >= 4 ?  activeStar :justAStar} />
                <FontAwesomeIcon icon={faStar} className={cRating >= 5 ?  activeStar :justAStar} />
                </div>
                 {cRating}({no_of_ratings})
        </div>

        )

        }

        export default Rating;