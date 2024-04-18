import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Review from './Review';

function Toggle({rating = 0, no_of_ratings=0}){
    const home=<div class="grid two-cols"> 
    <card><Review />  </card>
    <card><Review />  </card>
    <card><Review />  </card>
    <card><Review />  </card>
    <card><Review />  </card>
    <card><Review />  </card>
     
    </div>;
   const about=<div>About Components</div>;
    const contents ={
        home: home,
        about: about

    }
    const [output, setOutput] = useState(contents.home);

    return (
        <div class="toggle">
        <div class="togNav secondary-background">
            <div class="togItem active" onClick={() =>{
                setOutput(contents.home)
            }}>
               Reviews
            </div>
            <div class="togItem" onClick={() =>{
                setOutput(contents.about)
            }}>
              Info
            </div>
        </div>

        <div class="togContentBox">
            <div class="togContent">
            {output}
            </div>
        </div>
    </div>

        )

        }

        export default Toggle;