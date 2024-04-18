import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Rate({props, movie_id}){
   const token = localStorage.getItem('token');
   //console.log(token);

    const [rate, setRate]= useState(0);
    const [comment, setComment]= useState(null);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
   let validated =  rate < 1 ;
    const activeStar ='star active-star';
    const justAStar = 'star';
    
    
//alert(props.movieId);



    const handleForm = (event) =>{
        setComment(event.target.value)
    }

  

    async function pushData(data){
        try {
            const response = await fetch('http://localhost:8000/api/review/new',
           {
              
                  method: 'POST',
                  headers: {
                    'Authorization' : `Bearer ${token}`,
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
           // console.log(error);
            return null;
        }
    }
      const submit = async event =>{
          handleForm(event)
              //console.log(user);  
               validated = rate >= 1 ;
     
              
              event.preventDefault();
              if(!validated){
                  setError('Please Click on the stars to enter a rating form 1-5');
              }
              else{
                  setIsLoading(true);

                  const rData = {
                    rating: rate,
                    comment: comment,
                    movie_id: props.movieId
                }
                  const goRresponse = await pushData(rData);
                  if(goRresponse !== null)
                  {

                      //console.log( goRresponse);
                      window.location.reload();
                     // history('/movie');
                  }
                 // console.log(goRresponse);
                  setIsLoading(false);
              }
      }
     
    return (
        <>
        {token == null ? <button>Please Login To Continue </button> :
        
        <div>
            
           {error !== null ? <ErrorCard  error={error}/> :''} 
            <label>Comment</label>
            <textarea name="comment" placeholder="Please kindly leave a comment" onChange={handleForm} />
            <div class="stars">
                <FontAwesomeIcon icon={faStar} className={rate >= 1 ?  activeStar :justAStar}  onClick={() =>{
                    setRate(1)
                }}/>
                <FontAwesomeIcon icon={faStar}  className={rate >= 2 ?  activeStar :justAStar}   onClick={() =>{
                    setRate(2)
                }}/>
                <FontAwesomeIcon icon={faStar}  className={rate >= 3 ?  activeStar :justAStar}   onClick={() =>{
                    setRate(3)
                }}/>
                <FontAwesomeIcon icon={faStar}  className={rate >= 4 ?  activeStar :justAStar}   onClick={() =>{
                    setRate(4)
                }}/>
                <FontAwesomeIcon icon={faStar} className={rate >= 5 ?  activeStar :justAStar}  onClick={() =>{
                    setRate(5)
                }}/>
                ({rate})
                </div>
                <br />
                 
                 <p>Comment: {comment} </p>
                 <button className="w-full" type="submit" onClick={submit}> {isLoading ? 'Rating....' : 'Rate'} </button>
        </div>
        }
        
        </>

        )

        }

        export default Rate;


        const ErrorCard =({error}) =>{
            return(
                <div class="alert alert-error">
                {error}  
                 </div>
                           
            )
        }