import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import PopUp from './popup';
import { Link } from 'react-router-dom';

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
      <div class="item">
          <Link to="/login"> Account </Link>
          </div>
    </nav>
  );
  
export default function Header(){
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
                    Home
                </div>
             <div class="item">
                  <Link to="/search"> Explore </Link>
                </div> 
                
                <div class="item">
                    About Us
                </div>
                 <div class="item">
                   <Link to="/login"> Account </Link>
                </div>
            </nav>
            <div class="mobile-tog mobile-only" onClick={() => pop()}> <FontAwesomeIcon icon={faBars} /></div>
        </header>
    )
}

  



 