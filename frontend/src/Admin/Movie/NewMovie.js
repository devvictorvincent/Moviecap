import { useState } from "react";
import useFetch from "../../fetch"
import Skeleton from "../../Home/Skeleton";

export default function NewMovie (){
    const [formData, setFormData] = useState({});
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
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
       // console.log(formData);
      };
    
    
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === 'photo') {
          setPhoto(files[0]);
        } else if (name === 'trailerLink') {
          setTrailerLink(files[0]);
        }

      //  console.log(trailerLink);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create FormData object and append fields
        const formDataToSubmit = new FormData();
        for (const key in formData) {
          formDataToSubmit.append(key, formData[key]);
        }
        if (photo) {
            console.log('phoot added'+ photo);
          formDataToSubmit.append('photo', photo);
         
        }
        if (trailerLink) {
          formDataToSubmit.append('trailer_link', trailerLink);
        }
    
        //setSubmitted(true);
        setFormData(formDataToSubmit);
        console.log(formData);
      };
    return(

       
        
        <div>
            <div class="card">
                <div class="card-header">
                     <h3>New Movie</h3>
                 </div>
            
                 <div class="card-body">
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
                         <button className="w-full"  onClick={handleSubmit}>Submit</button>
                          </div>)}
                     

                 </div>

            </div>
        </div>
    )
}