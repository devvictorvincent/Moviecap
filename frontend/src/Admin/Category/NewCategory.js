import {useEffect, useState} from 'react'
import usePost from '../../push';
import useFetch from "../../fetch";
export default function EditCategory ({id}){
    
    
 
    const token = localStorage.getItem('token');
    
    const [submitData, setSubmitData] = useState(null);
    const { output, error } = usePost({ endpoint: '/admin/category/update', body: submitData });
    const [category, setCategory] = useState({ 
        id:id,
        title : '',
        description: ''
    });
    
    let validated = true
    console.log(category) 
    const [isLoading, setisLoading] =useState(false); 
    const [response, setResponse] =useState(null);
    const [success, setSuccess] =useState(null);


    let fetchCategory = [];
    const {output: fetchOutput, error: fetchError }= useFetch({endpoint: '/admin/category/'+id});

  if(fetchOutput){
      fetchCategory =fetchOutput.data;
     // console.log(categories);
  }


    useEffect(() =>{
        if(fetchCategory){
            setCategory({
                title:fetchCategory.title,
                description: fetchCategory.description
            })
        }
    });

    const handleInput = (event) =>{

        const {name, value} = event.target;

        setCategory(prevState  =>({
            ...prevState,
            [name]:value
        }));
       

    }
 


    const submit = async event =>{
        handleInput(event)
             
        validated =  category.title.trim() !== ''&& category.description.trim() !== '';
   
            //console.log(validated);  
            event.preventDefault();
            if(!validated){
                 
            }
            else{
                setisLoading(true);
                const goRresponse =setSubmitData(category);
                if(goRresponse !== null)
                {
                   setSuccess("Category Updated successfully!");
                  // window.location.reload();
                }
                console.log(goRresponse);
                setisLoading(false);
            }
    }
   

    return(
        <div>
            <h1>Edit</h1>
            <label>Title</label>
           <input type="text" value={category.title} name="title"   onChange={handleInput} />
           <label>Description</label>
           <textarea name="description" value={category.description} onChange={handleInput} style={{
               height:300
           }}></textarea>
           <button  style={{ opacity: validated ? 1 : 0.2 }}
           onClick={submit}>  {isLoading ? 'Submiting' : 'Save'}</button>
        </div>
    );
}