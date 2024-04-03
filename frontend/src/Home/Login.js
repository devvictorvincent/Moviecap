import { Link } from 'react-router-dom';
import './css/auth.css';
import {Helmet} from 'react-helmet';

function Login(){
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
                    <label>Email Or Username: </label>
                    <div class="form-group">
                       
                        <input type="text" name="username" placeholder="Username or Email" />
                    </div> 
                    <label>Password: </label>
                     <div class="form-group">
                     
                        <input type="text" name="password" placeholder="Password" />
                    </div>
                    <p class="fright">  <Link to="/recovery"> Forgot Password ? </Link></p>
                   
                    <button class="w-full" type="button">Login</button>
                    <p>Don't have an account? <Link to="/register"> Create New One </Link></p>
                    </card>
                </div>
        </div>
       
    )
}

export default Login;