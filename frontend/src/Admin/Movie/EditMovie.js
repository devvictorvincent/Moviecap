import { useLocation, useNavigate, useParams } from "react-router";
import useFetch from "../../fetch"
import Skeleton from "../../Home/Skeleton";

export default function EditMovie (){
    const params = useParams();
    const location = useLocation();
    const   state = location.state;
    const {id} = state;
 
    const navigate = useNavigate();
    if(!id){
                navigate('/admin/movies');
    }
    const end_point = '/admin/movie/' + id;
    const {output, error, url} = useFetch({endpoint: end_point});
    let movie = null;
    if(error){
        alert(error);
    }
     if(output){
            movie =output.data;
           // console.log('data is' + output.data.data)
     }
       
        
    

    return(

       
        
        <div>
            <div class="card">
                <div class="card-header">
                     <h3>New Movie</h3>
                 </div>
            
                 <div class="card-body">
                     {!movie ? <Skeleton /> : (<div className="row">
                         <h5> Upload a new Movie </h5>
                         <div className="col-sm-5">
                            <label>Title</label>
                            <input type="text" value={movie.title} name="title" placeholder="Title"></input>

                            <label>Category </label>
                             
                                <label>Movie Description </label>
                            <textarea name="description" value={movie.description} placeholder="Description" style={{height:300}}></textarea>
                        </div>
                        <div className="col-sm-7">
                            <video className="box" style={{
                                width:400
                            }} controls>
                                <source src={"http://localhost:8000/" + movie.trailer_link} />
                            </video>
                            <br />
                            <label>Video Trailer</label>
                            <input type="file" name="trailer_link" />
                            
                            <img src={"http://localhost:8000/" + movie.photo} 
                                style={{width:200,
                                height:200,
                            objectFit: 'cover'}}
                            />

                            <br />
                            <label>Photo</label>
                            <input type="file" name="photo" />
                        </div>
                         <button className="w-full">Submit</button>
                          </div>)}
                     

                 </div>

            </div>
        </div>
    )
}