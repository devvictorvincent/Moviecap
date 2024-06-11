import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function UserSnip  () {
    const [flyout, setFlyout] = useState(false);
    return(
    <div class="user-snip">
      <div> Hi Harmony</div>  
        
       <FontAwesomeIcon icon={faUserCircle} onClick={() =>{setFlyout(!flyout)}} />
        {flyout ?  <div class="fly-out">
           <div class="item">
              <Link to="/profile"> Profile </Link>
           </div>
           <div class="item">
             <Link to="/ratings">  My Ratings </Link>
           </div>
           <div class="item">
              <Link to="/logout"> Logout </Link>
           </div>
       </div>
        : ''}
      
    </div>

)}