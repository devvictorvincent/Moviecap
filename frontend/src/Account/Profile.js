import Footer from "../Home/Footer";
 import Header from "../Home/Home-components"
import MovieCard from "../Home/moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "../Home/Movie-screen";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Profile(){
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
                <title>My Profile - MovieCap</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
       
 
        <section class="text-center" style={{paddingLeft:'15%', paddingRight:'15%'}}>
            <div class="section-title text-center">
                <div class="title">
                   My Profile
                </div>
                
                {userData == null ? 'Loading...': 
                <form style={{textAlign:"left"}}>
                <div class="img-box">
                    <img src="" />
                    <span className="alert">Edit</span>
                </div>

                <div class="form-group">
                   
                    <input type="text" name="name" placeholder="Full Name" value={userData.name} onChange={handleForm} required />
                </div> 
                <label>Email Address: </label>
                 <div class="form-group">
                 
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleForm} required />
                </div>
                
                <label>Choose Username: </label>
                 <div class="form-group">
                 
                    <input type="text" name="username" value={userData.username} placeholder="Choose a cathcy unique username" onChange={handleForm} required />
                </div>
                
                <label>Country: </label>
                 <div class="form-group">
                    <select name="country"  value={userData.country} onChange={handleForm}>
                        
                    <option value="CHOOSE" selected> CHOOSE COUNTRY </option>
                    <option value="Nigeria"> NIGERIA </option>
                    <option value="Ghana"> Ghana </option>

                    </select>
                </div>  
                
                    <label>Sex: </label>
                 <div class="form-group">
                    <select name="sex" value={userData.country} onChange={handleForm}>
                    <option value="CHOOSE" selected> CHOOSE SEX </option>
                    <option value="MALE"> MALE </option>
                    <option value="FEMALE"> FEMALE </option>
                    <option value="OTHER"> OTHER </option>

                    </select>
                </div>
                
                <label>Change Password: </label>
                 <div class="form-group">
                 
                    <input type="password" name="password" placeholder="Create a strong Password" onChange={handleForm} required />
                </div>  
                
                <label>Confirm Password: </label>
                 <div class="form-group">
                 
                    <input type="password" name="password_confirmation" placeholder="Re-type your password just to be sure" onChange={handleForm} required />
                </div>
                
                <button class="w-full" onClick={submit}>Save Profile{isLoading  ? <FontAwesomeIcon icon={faSpinner} /> : ''}  </button>
                
            </form> }
            </div>
        
            </section>
            
          
          <Footer />
        </>
    )
}

export default Profile;