import { useNavigate } from "react-router";
import { logout } from "../Utils/auth"

export default function Logout({element}){
    const navigate = useNavigate();
    const handleLogout = () => {
        // Call the logout function to clear tokens
        logout();
    
        // Update application state to reflect that the user is logged out
         
    
        // Redirect to the login page
         navigate('/login');
      };

 return (
     <div onClick={handleLogout}> <h1>Logout</h1>
                {element}
     </div>
     )
}