import { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../../fetch";
import PopCard from "../../Home/popcard";
import PopUp from "../../Home/popup";
import Skeleton from "../../Home/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faSave } from "@fortawesome/free-solid-svg-icons";

const baseUrl = process.env.REACT_APP_API_URL;
const Categories = () => {
    const [popup, setPopUp] = useState(false);

    let categories = [];
    const {output, error }= useFetch({endpoint: '/admin/categories'});

  if(output){
      categories =output.data;
     // console.log(categories);
  }

  const handleAddNew = ()=>{
      setPopUp(!popup);
  }
    return (
        <div>
        <card>
           
           <div class="card-header">
           
         {popup ? <PopCard title="Add Category" content={Category} popup={setPopUp} /> : ''}  
               Categories
              <div class="fright">
                   <button onClick={handleAddNew}>Add New</button>
                   </div>
           </div>
            <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped  table-dark  w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Descriptions</th>
                        <th>Last Updated</th>
                        </tr>
                </thead>
                {!categories ? <Skeleton /> : (
                             <tbody>
                             {categories.map((item) =>{
                                return  <tr>
                                 
                                  <td>{item.title}</td>
                                  <td> {item.description}  </td>
                                  <td>  {item.created_at}</td>
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
             <button onClick={()=>{
                    
             }}>Next</button>
            </div>
            </div>
            </div>
              
     
        </card>
    </div>
    );
}

export default Categories;

const Category = () => {
    const token = localStorage.getItem('token');
    
    const [isLoading, setisLoading] =useState(false);
    const [error, setError] =useState(null);
    const [response, setResponse] =useState(null);
    const [success, setSuccess] =useState(null);

    const [category, setCategory] = useState({
        title : '',
        description: ''
    });

    const handleInput = (event) =>{

        const {name, value} = event.target;

        setCategory(prevState  =>({
            ...prevState,
            [name]:value
        }));
       

    }

    let validated =  category.title.trim() !== ''&& category.description.trim() !== '';
    async function pushData(data){
        try {
            const response = await fetch(baseUrl+'/admin/category/new',
           {
              
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json'
                }, 
                body: JSON.stringify(data)
           }
            ); 
            if(response.status !== 200) {
              let dat = await response.json(); 
              setError(dat.message);
              return null;
            } 
            let dat = await response.json();  
              return dat;
              
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    const submit = async event =>{
        handleInput(event)
             
        validated =  category.title.trim() !== ''&& category.description.trim() !== '';
   
            console.log(validated);  
            event.preventDefault();
            if(!validated){
                setError('Please fill out All fields');
            }
            else{
                setisLoading(true);
                const goRresponse = await pushData(category);
                if(goRresponse !== null)
                {
                   setSuccess("Category added successfully!");
                   window.location.reload();
                }
                console.log(goRresponse);
                setisLoading(false);
            }
    }
   

    return (
        <section>
            {error ? <div className="alert alert-danger">
                {error}
            </div> : ''}
            
            {success ? <div className="alert alert-success">
                {success}
            </div> : ''}
           <label>Title</label>
           <input type="text" name="title" onChange={handleInput} />
           <label>Description</label>
           <textarea name="description" onChange={handleInput} style={{
               height:300
           }}></textarea>
           <button  style={{ opacity: validated ? 1 : 0.2 }}
           onClick={submit}>  {isLoading ? 'Submiting' : 'Save'}</button>
        </section>
    );
}