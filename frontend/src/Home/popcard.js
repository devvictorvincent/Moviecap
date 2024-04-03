
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const PopCard = ({content, popup}) =>{

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
                    <h1>Rate Movie </h1>
                 {content}
                </card>
                </div>
            </div>
             
            </div>
                
        </div>
    )
}

export default PopCard;