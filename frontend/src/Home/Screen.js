import { Link } from "react-router-dom";

export default function Screen(){
    return (
        <screen>
            <div class="overlay">
            </div>

            <div class="background">
                <img src="/p9972804_b_h8_bl.jpg" />
                </div>
                <div class="content">
                    <div class="left">
                        <div class="big-title">
                          The Black List
                        </div>
                        <div class="text-2"> 
                        The Blacklist is an American crime thriller television series created by Jon Bokenkamp and developed by John Eisendrath. It stars James Spader as Raymond....
                        </div>
                        <br />
                        <div>
                          <Link to="/movie">  <button> Watch Trailer </button> </Link>
                        </div>
                     </div>
                     <div class="right destop-only">
                        <img src="/The_Blacklist_season_5_poster.jpg" alt="Movie Photo" />
                     </div>
                </div>
        </screen>
    )
}