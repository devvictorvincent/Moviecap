import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import PopCard from './popcard';

export default function MovieScreen({background}){
    const [pop, setPop] = useState(false);
    const popIt = () =>{
        setPop(!pop);
    }
    return (
        <screen>
           {pop ? <PopCard popup={setPop}/> : ''} 
            <div class="overlay">
            </div>

            <div class="background">
                <img src={background} />
                </div>
                <div class="content">
                    <div class="left">
                     <video class="movie" controls muted autoPlay playsInline>
                         <source src="/Avatar The Last Airbender Official Trailer Netflix.mp4" />
                     </video>
                     
                       
                     </div>
                     <div class="right">
                     <div class="big-title">
                     Avatar The last Air Bender
                        </div>
                        <div class="text-2"> 
                        The series is centered around the journey of twelve-year-old Aang, the current Avatar and last survivor of his nation, the Air Nomads, along with his friends
                        </div>
                        <br />
                        <div>
                            <button onClick={() => popIt()}> Rate </button>  
                        </div>
                     </div>
                </div>
        </screen>
    )
}