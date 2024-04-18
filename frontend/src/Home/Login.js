import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
 
import './css/auth.css';
import {Helmet} from 'react-helmet';

function Login(){
    const history = useNavigate();
    const [isLoading, setisLoading] =useState(false);
    const [error, setError] =useState(null);
    const [response, setResponse] =useState(null);
    const [user, setUser] =useState({
        email: '',
        password: '',
        });
    let validated =  user.email.trim() !== ''&& user.password.trim() !== '';
    const handleForm =(event) =>{
        const {name, value} = event.target;
        setUser(prevState => ({
            ...prevState, 
            [name]:value
        }));
    }
  async function pushData(data){
      try {
          const response = await fetch('http://localhost:8000/api/login',
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
             validated =  user.email.trim() !== '' && user.password.trim() !== '';
   
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
                    history('/ratings');
                }
                console.log(goRresponse);
                setisLoading(false);
            }
    }
   
    return(
        <div class="auth-page">
                  <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Moviecap

                </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <div class="auth-card">
                    <card>
                    <div class="section-title text-center">
                        <img src="/moviecap-white.png"  style={{width:'120px '}}/>
                    </div>
                    <h2>Login </h2>
                    
                   {error !== null ? <ErrorCard  error={error}/> :''} 
                    <label>Email Or Username: </label>
                    <div class="form-group">
                       
                        <input type="text" name="email" value={user.email} onChange={handleForm} placeholder="Username or Email" />
                    </div> 
                    <label>Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password" value={user.password} onChange={handleForm} placeholder="Password" />
                    </div>
                    <p class="fright">  <Link to="/recovery"> Forgot Password ? </Link></p>
                   
                    <button class="w-full" type="button" style={{ opacity: validated ? 1 : 0.2 }} onClick={submit}>{isLoading ? 'connecting...' : 'Login'}</button>
                    <p>Don't have an account? <Link to="/register"> Create New One </Link></p>
                    </card>
                </div>
        </div>
       
    )
}

export default Login;


const ErrorCard =({error}) =>{
    return(
        <div class="alert alert-error">
        {error}  
         </div>
                   
    )
}