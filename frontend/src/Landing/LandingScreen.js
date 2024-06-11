import { Link } from "react-router-dom";

export default function LandingScreen(){
    return (
        <screen>
            <div class="overlay">
            </div>

            <div class="background">
                <img src="/pngtree.png" />
              
                </div>
                <div class="content flex flex-center">
                    <div class="w-full" style={{textAlign:'center'}}>
                        <div class="big-title" style={{fontSize:'70px'}}>
                          MovieCap
                        </div>
                        <div class="text-2"> 
                              <h2>  Your ultimate guild to the best movies in the world. </h2>
                               
                                Find the best movies, read exclusive reviews and watch trailers here.
                        </div>
                        <br />
                        <div>
                          <Link to="/">  <button> Get Started With Moviecap </button> </Link>
                        </div>
                     </div>
                    
                </div>
        </screen>
    )
}