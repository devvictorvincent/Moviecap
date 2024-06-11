import React,{ useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/auth.css';

import {Helmet} from 'react-helmet';

function Register(){
    
    const baseUrl = process.env.REACT_APP_API_URL;

    const history = useNavigate();
    const [isLoading, setisLoading] =useState(false);
    const [error, setError] =useState(null);
    const [response, setResponse] =useState(null);
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
        setUser(prevState => ({
            ...prevState, 
            [name]:value
        }));
    }
  async function pushData(data){
      try {
          const response = await fetch(baseUrl+'/api/register',
         {
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/vnd.api+json',
                  'Accept': 'application/vnd.api+json'
              }, 
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
             validated = user.name.trim() !== '' && user.username !== '' && user.email.trim() !== '' && user.password.trim() !== ''&& user.password_confirmation.trim() !== ''&& user.country.trim() !== ''&& user.sex.trim() !== '';
   
            console.log(validated);  
            event.preventDefault();
            if(!validated){
                setError('Please fill out All fields');
            }
            else{
                setisLoading(true);
                const goRresponse = await pushData(user);
                if(goRresponse !== null)
                {
                    localStorage.setItem('token', goRresponse.data.token);
                    history('/movie');
                }
                console.log(goRresponse);
                setisLoading(false);
            }
    }
    return(
        <div class="auth-page">
                   <Helmet>
                <meta charSet="utf-8" />
                <title>Create Account - Moviecap

                </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <div class="auth-card">
                    <card >
                  <Link to="/">  <div class="section-title text-center">
                  <img src="/moviecap-white.png"  style={{width:'120px '}}/>
                   
                    </div>
                    </Link>
                    <h2>Create New Account </h2>
                   {error !== null ? <ErrorCard  error={error}/> :''}  
                    <label>Name: </label>
                    <div class="form-group">
                       
                        <input type="text" name="name" placeholder="Full Name" onChange={handleForm} required />
                    </div> 
                    <label>Email Address: </label>
                     <div class="form-group">
                     
                        <input type="email" name="email" placeholder="Password" onChange={handleForm} required />
                    </div>
                    
                    <label>Choose Username: </label>
                     <div class="form-group">
                     
                        <input type="text" name="username" placeholder="Choose a cathcy unique username" onChange={handleForm} required />
                    </div>
                     <label>Create Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password" placeholder="Create a strong Password" onChange={handleForm} required />
                    </div>  
                    
                    <label>Confirm Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password_confirmation" placeholder="Re-type your password just to be sure" onChange={handleForm} required />
                    </div>
                    
                    <label>Country: </label>
                     <div class="form-group">
                        <select name="country"  value={user.country} onChange={handleForm}>
                            
                        <option value="CHOOSE" selected> CHOOSE COUNTRY </option>
                        <option value="Nigeria"> NIGERIA </option>
                        <option value="Ghana"> Ghana </option>

                        </select>
                    </div>  
                    
                        <label>Sex: </label>
                     <div class="form-group">
                        <select name="sex" onChange={handleForm}>
                        <option value="CHOOSE" selected> CHOOSE SEX </option>
                        <option value="MALE"> MALE </option>
                        <option value="FEMALE"> FEMALE </option>
                        <option value="OTHER"> OTHER </option>

                        </select>
                    </div>

                    
                    <button class="w-full" type="submit" style={{ opacity: validated ? 1 : 0.2 }} onClick={submit}>
                        {isLoading ? 'Creating...' : 'Create Account'}</button>
                    <p>Already have an account? <Link to="/login"> login </Link></p>
                    </card>
                </div>
        </div>
       
    )
}

export default Register;


const ErrorCard =({error}) =>{
    return(
        <div class="alert alert-error">
        {error}  
         </div>
                   
    )
}