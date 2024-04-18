import { countBy } from 'lodash';
import './css/skeleton.css'
 
export default function Skeleton({dataType, no =4 }){
 const render = ()=>{

  switch (dataType){
    case 'topMovies':
      return topMovies(no);
    default:
        return topMovies(no);

  }

 }
 
  
    return (
        <div class="skeleton">
         {render()}
         
         
        </div>
    )
}

function topMovies (no =3)  {

  const cards = [];
  for(let i = 0; i < no; i++){
    cards.push(    <card class="movie-card">
    <div class="img"> </div>
      <div class="title">
          
      </div>
      <div class="text-2">
       
      <div><button> </button> </div>
      </div>
</card>);
  }

return (
      <>
     {cards}
</>
      
       

);
}