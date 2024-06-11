import Footer from "../Home/Footer"; 
import MovieCard from "../Home/moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "../Home/Movie-screen";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Components/Sidebar";

import '../Admin/makeup.css'
import AdminHeader from "./Components/AdminHeader";
import { Outlet } from "react-router";

function AdminLayout(){
    const baseUrl = process.env.REACT_APP_API_URL;
    const [userData, setUserData] =useState();
    const [isLoading, setIsLoading] =useState();
    const [error, setError] =useState();
    const token = localStorage.getItem('token');
    const [user, setUser] =useState({
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
        country: 'Nigeria',
        sex: 'CHOOSE'
    });
    let validated = user.name.trim() !== '' && user.username !== '' && user.email.trim() !== ''&& user.password.trim() !== ''&& user.password_confirmation.trim() !== ''&& user.country.trim() !== ''&& user.sex.trim() !== '';
   
    const handleForm =(event) =>{
        const {name, value} = event.target;
        setUserData(prevState => ({
            ...prevState, 
            [name]:value
        }));
    }
     
    const rheaders ={
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };

      useEffect(() => {
        // Function to fetch user data from the API
        const fetchUserData = async () => {
          try {
            // Make API request using fetch or Axios
            const response = await fetch(baseUrl+'/profile',{
              method: 'POST',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            setUserData(data.data);
            console.log(data);
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
          }
        };
    
        // Call the fetchUserData function when the component mounts
        fetchUserData();
    
        // Cleanup function (optional)
        return () => {
          // Cleanup tasks, if any
        };
      }, []); // Empty dependency array ensures the effect runs once after the initial render
    

      async function pushData(data){
        try {
            const response = await fetch('http://localhost:8000/api/profile/update',
           {
              
                  method: 'POST',
                  headers:rheaders, 
                body: JSON.stringify(data)
           }
            ); 
            if(response.status !== 200) {
              let dat = await response.json(); 
              setError(dat.message);
              return null;
            } 
            let dat = await response.json();  
              return dat;
              
        } catch (error) {
            console.log(error);
            return null;
        }
    }
      const submit = async event =>{
          handleForm(event)
              console.log(user);  
               validated =  true;
     
              
              event.preventDefault();
              if(!validated){
                  setError('Please fill out All fields');
              }
              else{
                  setIsLoading(true);
                  const goRresponse = await pushData(user);
                  if(goRresponse !== null)
                  {
                      //localStorage.setItem('token', goRresponse.data.token);
                      //history('/ratings');
                      alert('Profile updated'); 

                  }
                  console.log(goRresponse);
                  setIsLoading(false);
              }
      }
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Admin - MovieCap</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <AdminHeader />

   <Sidebar />
       

       <div class="dash-body">
 <Outlet />
            </div>
          
          <Footer />
        </>
    )
}

export default AdminLayout;