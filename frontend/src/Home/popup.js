
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const PopUp = ({content, popup}) =>{

    const pop  = () => {
        popup(!popup);
    }

    return (
        <div class="popup mobile-only">
            <h1>Menu <span class="fright" onClick={() => pop()}>
            <FontAwesomeIcon icon={faWindowClose} /></span> </h1>
                {content}
                
        </div>
    )
}

export default PopUp;