import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas, faCamera, faCogs, faHome, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () =>{
    return(
         <div class="sidebar fixed left">
             <div style={{padding: '20px'}}>
             <img src="/moviecap-white.png"  style={{width:'120px '}}/>

             </div>
            
             <div class="item">
               
               <NavLink to="/admin" end ><FontAwesomeIcon icon={faHome} />  Dashboard </NavLink>
             </div>
             
             <div class="item">
                <NavLink to="/admin/movies" reloadDocument ><FontAwesomeIcon icon={faCamera}  /> Movies </NavLink>
             </div> 
              <div class="item">
                <NavLink to="/admin/categories" end > <FontAwesomeIcon icon={faBookAtlas}   /> Categories</NavLink>
             </div> 
             <div class="item">
              <NavLink to="/admin/ratings" end > <FontAwesomeIcon icon={faStar}   /> Ratings </NavLink>
             </div>
             <div class="item">
                <NavLink to="/admin/users" end > <FontAwesomeIcon icon={faUsers} /> Users </NavLink>
             </div>
             <div class="item">
               <NavLink to="/admin/settings" end > <FontAwesomeIcon icon={faCogs}  />  Settings </NavLink>
             </div>
         </div>
    );
}

export default Sidebar;