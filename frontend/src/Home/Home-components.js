import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import PopUp from './popup';
import { Link } from 'react-router-dom';
import UserSnip from './userSnip';

const token = localStorage.getItem("token");
const navigation = (
    <nav>
      <div class="item">
          <Link to="/"> Home </Link>
          </div>
      <div class="item">
          <Link to="/explore"> Movies </Link>
          </div> 
      <div class="item">
          <Link to="/about"> About Us </Link>
      </div>
      
          {token  == null ?  <Link to="/login"> Account </Link> : 
          <> 
          <div class="item">
          <Link to="/profile"> Profile </Link>
       </div>
       <div class="item">
         <Link to="/ratings">  My Ratings </Link>
       </div>
       <div class="item">
          <Link to="/logout"> Logout </Link>
       </div>
       </>
       }

    </nav>
  );
  
 
  
export default function Header(){
    const token = localStorage.getItem("token");
    const [popup, setPopup] = useState(false);
    const pop  = () => {
        setPopup(!popup);
    }
    return (
        <header class="flex flex-spaced-between">
           {popup ?<PopUp content={navigation} popup={setPopup}/> : '' } 
            <div class="logo-box">
                <div class="app-title">
                    Moviecap
                </div>
            </div>

            <div class="search-box destop-only">
                <input type="search" placeholder="Search Moviecap" />
                <button><FontAwesomeIcon icon={faSearch} /></button>

            </div>

            <nav class="flex flex-spaced-between g-10px destop-only">
                <div class="item">
                <Link to="/">    Home </Link>
                </div>
             <div class="item">
                  <Link to="/search"> Explore </Link>
                </div> 
                
                <div class="item">
                    About Us
                </div>
                 <div class="item">
                     {token  == null ?  <Link to="/login"> Account </Link> :  <UserSnip />}
                
                </div>
            </nav>
            <div class="mobile-tog mobile-only" onClick={() => pop()}> <FontAwesomeIcon icon={faBars} /></div>
        </header>
    )
}






 