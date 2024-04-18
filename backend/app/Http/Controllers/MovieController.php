<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Category;

class MovieController extends Controller
{
    //
    use HttpResponse;


    public function Movie($id){
        $movie = Movie::find($id);
        if($movie == null){
            return $this->error('', 'Movie Not Found');
        }
       
        
        //update movie statistics
        $movie->no_of_views = $movie->no_of_views+1;
        $movie->save();
        $movie->ratings = Review::find($movie->id);

        $movie->category_data = Category::find($movie->category_id);

        return $this->success($movie);
    } 
    
    
    public function related_movies($id){
        $movie = Movie::find($id);
        if($movie == null){
            return $this->error('', 'Movie Not Found');
        }
       
        
        //update movie statistics
        $movies= Movie::where('id', '!=', $id)->paginate(15);
        

        return $this->success($movies);
    }

    public function search(Request $request){
        //return $this->success($request->category);
        if($request->key == null)
        {
            return $this->error('', 'key not passed');
        }
      
        if($request->has('category') && $request->category !== 'any'){
            $result=Movie::where('category_id', $request->category)->where('title', 'like',  "%$request->key%")->orderBy('updated_at', 'DESC')->paginate(20);
        }
        else{
            $result=Movie::where('title', 'like',  "%$request->key%")->orderBy('updated_at', 'DESC')->paginate(20);
       
        }
     

        return $this->success($result);
    }
    
    public function categories(){
        $categories=Category::all();

        return $this->success($categories);
    }


}
