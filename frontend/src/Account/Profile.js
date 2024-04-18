import Footer from "../Home/Footer";
 import Header from "../Home/Home-components"
import MovieCard from "../Home/moviecard" 
import {Helmet} from "react-helmet";
import MovieScreen from "../Home/Movie-screen";

function Profile(){
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My Profile - MovieCap</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
       
 
        <section class="text-center">
            <div class="section-title text-center">
                <div class="title">
                   My Profile
                </div>
                <form>
                    <div class="img-box">
                        <img src="" />
                        <span className="alert">Edit</span>
                    </div>

                    <div class="form-group">
                       
                        <input type="text" name="name" placeholder="Full Name" onChange={handleForm} required />
                    </div> 
                    <label>Email Address: </label>
                     <div class="form-group">
                     
                        <input type="email" name="email" placeholder="Password" onChange={handleForm} required />
                    </div>
                    
                    <label>Choose Username: </label>
                     <div class="form-group">
                     
                        <input type="text" name="username" placeholder="Choose a cathcy unique username" onChange={handleForm} required />
                    </div>
                     <label>Create Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password" placeholder="Create a strong Password" onChange={handleForm} required />
                    </div>  
                    
                    <label>Confirm Password: </label>
                     <div class="form-group">
                     
                        <input type="password" name="password_confirmation" placeholder="Re-type your password just to be sure" onChange={handleForm} required />
                    </div>
                    
                    <label>Country: </label>
                     <div class="form-group">
                        <select name="country"  value={user.country} onChange={handleForm}>
                            
                        <option value="CHOOSE" selected> CHOOSE COUNTRY </option>
                        <option value="Nigeria"> NIGERIA </option>
                        <option value="Ghana"> Ghana </option>

                        </select>
                    </div>  
                    
                        <label>Sex: </label>
                     <div class="form-group">
                        <select name="sex" onChange={handleForm}>
                        <option value="CHOOSE" selected> CHOOSE SEX </option>
                        <option value="MALE"> MALE </option>
                        <option value="FEMALE"> FEMALE </option>
                        <option value="OTHER"> OTHER </option>

                        </select>
                    </div>

                </form>
            </div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
            </section>
            
          
          <Footer />
        </>
    )
}

export default Profile;