import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './css/auth.css';

import {Helmet} from 'react-helmet';

function Register(){
    const [error, setError] =useState('null');
    
    const submit = () =>{

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
                   {error != null ? <ErrorCard  error={error}/> :''}  
                    <label>Name: </label>
                    <div class="form-group">
                       
                        <input type="text" name="Name" placeholder="Full Name" required />
                    </div> 
                    <label>Email Address: </label>
                     <div class="form-group">
                     
                        <input type="email" name="email" placeholder="Password" required />
                    </div>
                    
                    <label>Choose Username: </label>
                     <div class="form-group">
                     
                        <input type="text" name="username" placeholder="Choose a cathcy unique username" required />
                    </div>
                     <label>Create Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password" placeholder="Create a strong Password" required />
                    </div>  
                    
                    <label>Confirm Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password_confirmation" placeholder="Re-type your password just to be sure" required />
                    </div>
                    
                    <label>Country: </label>
                     <div class="form-group">
                        <select name="country">
                        <option value="NGN"> NIGERIA </option>

                        </select>
                    </div>  
                    
                        <label>Sex: </label>
                     <div class="form-group">
                        <select name="sex">
                        <option value="MALE"> MALE </option>
                        <option value="FEMALE"> FEMALE </option>
                        <option value="OTHER"> OTHER </option>

                        </select>
                    </div>

                    
                    <button class="w-full" type="button">Create Account</button>
                    <p>Already have an account? <Link to="/login"> login </Link></p>
                    </card>
                </div>
        </div>
       
    )
}

export default Register;


const ErrorCard =({error}) =>{
    return(
        <div class="alert alert-error w-300px"> 
        {error}   </div>
                   
    )
}