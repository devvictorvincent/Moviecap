import { useState } from "react";
import useFetch from "../../fetch"
import Skeleton from "../../Home/Skeleton";
import usePost from "../../push";

export default function NewMovie (){
  const formData = new FormData();
  const [isLoading, setIsLoading] = useState();
  const [photo, setPhoto] = useState(null);
  const [trailerLink, setTrailerLink] = useState(null);

    const {output, error, url} = useFetch({endpoint: '/admin/categories'});
    let categories = null;
    if(error){
        alert(error);
    }
     if(output){
            categories =output.data;
           // console.log('data is' + output.data.data)
     }

       const [movie, setMovie] =useState({
            title: '',
            description: '',
            category_id: '',
            trailer_link: '',
            photo: ''
       });
        
       const handleInput = (e) => {
        const { name, value } = e.target;
         formData.append(name, value);
       // console.log(formData);
      };
    
    
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === 'photo') {
          formData.append('photo', files[0])
          //setPhoto(files[0]);
        } else if (name === 'trailerLink') {
          formData.append('trailer-link', files[0])
       //   setTrailerLink(files[0]);
        }

        //console.log(formData);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await usePost('/admin/movie/new', formData);

          
        } catch (error) {
          
        }
      
        //setSubmitted(true);
       // setFormData(formDataToSubmit);
        console.log(formData);
      };
    return(

       
        
        <div>
            <div class="card">
                <div class="card-header">
                     <h3>New Movie</h3>
                 </div>
            
                 <div class="card-body">
                   {error ? <div class="alert alert-danger"> {error} </div> : ''}
                     {!categories ? <Skeleton /> : (<div className="row">
                         
                         <div className="col-sm-5">
                            <label>Title</label>
                            <input type="text" name="title" onChange={handleInput} placeholder="Title"></input>

                            <label>Category </label>
                            <select name="category_id" onChange={handleInput}>
                                    {categories.map((item) =>{
                                        return <option value={item.id}> {item.title} </option>
                                    })}
                            </select>
                          
                                <label>Movie Description </label>
                            <textarea name="description" placeholder="Description" onChange={handleInput} style={{height:300}}></textarea>
                        </div>
                        <div className="col-sm-7">
                            <label>Video Trailer</label>
                            <input type="file" onChange={handleFileChange} name="trailerLink" />
                            
                            <label>Photo</label>
                            <input type="file" onChange={handleFileChange} name="photo" />
                        </div>
                         <button className="w-full"  onClick={handleSubmit}>
                           {isLoading ? 'Submiting......': 'Submit'}
                           </button>
                          </div>)}
                     

                 </div>

            </div>
        </div>
    )
}