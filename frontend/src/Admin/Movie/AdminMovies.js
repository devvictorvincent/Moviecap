import { useNavigate, useRoutes } from "react-router"; 
 
import {Helmet} from "react-helmet";
import useFetch from "../../fetch";
import Skeleton from "../../Home/Skeleton";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminMovies = () => {
    const router = useRoutes;
    const navigate = useNavigate();
    //const [movies, setMovies] = useState([])
    let movies = [];
    const {output, error }= useFetch({endpoint: '/admin/movies'});
  if(output){
      movies =output.data.data;
     // console.log(movies);
  }
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Movies - Admin - MovieCap</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <card>
               <div class="card-header">
                   Movies
                  <div class="fright">
                       <button onClick={() =>{
                           navigate("/admin/movies/new")
                       }}>Add New</button>
                       </div>
               </div>
                <div class="card-body">
                <div class="table-responsive">
                <table class="table table-striped  table-dark  w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Stats</th>
                           
                            <th>Date</th>
                            <th>Actions</th>
                            </tr>
                    </thead>
                    {!output ? <Skeleton /> : (
                             <tbody>
                             {movies.map((item) =>{
                                return  <tr>
                                    <td> <input type="checkbox" /> </td>
                                  <td><img src={"http://localhost:8000/"+item.photo}  style={{
                                      width:48,
                                      height:48
                                  }}/></td>
                                  <td>{item.title}</td>
                                  <td> Views :{item.no_of_views} , Ratting: {item.rating} </td>
                                  <td> Created At: {item.created_at}</td>
                                  <td> 
                                     <Link to="/admin/movie/edit" state={{id:item.id}}> <button>Edit</button>  </Link>
                                      <button>Delete</button>
                                      </td>
                              </tr> 
                             })}
                             </tbody>
                    )}
                   
                        
                </table>
                <div class="flex flex-centered">
                 {output && output.data.next_page_url ? <button onClick={()=>{
                        
                    }}>Next</button> : ''}
                </div>
                </div>
                </div>
                  
         
            </card>
        </div>
    );
}

export default AdminMovies;
 