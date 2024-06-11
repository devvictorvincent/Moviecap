import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../Home/popup";

const navigation = (
    <nav>
      <div class="item">
          <Link to="/landing"> Home </Link>
          </div>
          <div class="item">
                  <a href="#features"> Features </a>
                </div> 
                <div class="item">
                  <a href="#about"> About </a>
                </div>
      <div class="item">
          <Link to="/"> Get Strated </Link>
          </div>
          
           <div class="item">
          <Link to="/login"> Sign in </Link>
          </div>
    </nav>
  );
  
export default function LandingHeader(){
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

             

            <nav class="flex flex-spaced-between g-10px destop-only">
                <div class="item">
                    <Link to="/landing">
                    Home
                    </Link>
                </div>
             <div class="item">
                  <a href="#features"> Features </a>
                </div> 
                <div class="item">
                  <a href="#about"> About </a>
                </div> 

 
                
                 
                 <div class="item">
                   <Link to="/"> Get Started </Link>
                </div> 
                
                <div class="item">
                   <Link to="/login"> Sign In </Link>
                </div>
            </nav>
            <div class="mobile-tog mobile-only" onClick={() => pop()}> <FontAwesomeIcon icon={faBars} /></div>
        </header>
    )
}
