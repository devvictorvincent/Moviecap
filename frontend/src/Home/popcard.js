
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Rate from '../Components/Rate';

const PopCard = ({content: Content,  popup, ...props}) =>{
 
    const pop  = () => {
        popup(!popup);
    }

    return (
        <div class="popcard">
            <div class="p-box">
            <div class="pop-overlay"></div>
            <div class="pop-content">
                <div class="p-cbox animate__animated animate__fadeIn">
            <span class="fright" onClick={() => pop()}>
            <FontAwesomeIcon icon={faWindowClose} /></span>

                <card>
                        <div className="card-body">
                        <h1>Rate Movie </h1>
                <div class="main"> 
                 <Content {...props} />
                   
                    </div>
                    </div>
                </card>
                </div>
            </div>
             
            </div>
                
        </div>
    )
}

export default PopCard;