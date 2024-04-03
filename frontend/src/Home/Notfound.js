import React from 'react';
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";

function NotFound (){
    const history = useNavigate();


     
    return(
        <div class="full-card">
            <Helmet>
                <title>404 - Not Found</title>
                </Helmet>
        <div class="notcard text-center">
            <img src="/6167023.webp" style={{width:'100%'}} />
            <h1>Not Found</h1>
            <p>So sorry We couldn't find what you are looking for. It's possible it doesn't exist or has been deleted</p>
            <button onClick={() => history(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound;