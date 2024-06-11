import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import PopUp from '../../Home/popup';
import { Link } from 'react-router-dom';
import UserSnip from '../../Home/userSnip';
import Logout from '../../Components/Logout';

const token = localStorage.getItem("token");
const logoutContent =(
    <button>Logout</button>
)

const navigation = (
    <nav>
      
      
      
          {token  == null ?  <Link to="/login"> Account </Link> : 
          <> 
          <div class="item">
          <Link to="/profile"> Profile </Link>
       </div>
       <div class="item">
         <Link to="/ratings">  My Ratings </Link>
       </div>
       <div class="item">
           <Logout element={logoutContent} />
       </div>
       </>
       }

    </nav>
  );
  
 
  
export default function AdminHeader(){
    const token = localStorage.getItem("token");
    const [popup, setPopup] = useState(false);
    const pop  = () => {
        setPopup(!popup);
    }
    return (
        <header class="flex flex-spaced-between admin-header">
           {popup ?<PopUp content={navigation} popup={setPopup}/> : '' } 
            

            <div class="search-box destop-only">
                <input type="search" placeholder="Search Moviecap" />
                <button><FontAwesomeIcon icon={faSearch} /></button>

            </div>

            <nav class="flex flex-spaced-between g-10px destop-only">
                 
                 <div class="item">
                     {token  == null ?  <Link to="/login"> Account </Link> :  <UserSnip />}
                
                </div>
            </nav>
            <div class="mobile-tog mobile-only" onClick={() => pop()}> <FontAwesomeIcon icon={faBars} /></div>
        </header>
    )
}






 