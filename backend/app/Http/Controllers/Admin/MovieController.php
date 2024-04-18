<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use Auth;
use App\Http\Requests\Admin\NewMovie;
use App\Models\Movie;

class MovieController extends Controller
{
    //
    use HttpResponse;

    public function movies(){
        $movies = Movie::orderBy('created_at', 'DESC')->get();
       
        return $this->success($movies);
        
    }
    
    public function new_movie(NewMovie $request){
             
        $request->validated($request->all());

      

        $movie =new Movie;
        $movie->category_id = intval($request->category_id);
        $movie->title = $request->title;
        $movie->description = $request->description;
         if($request->trailer_link){
             $trailer_file=$request->file('trailer_link');
             $trailer_link = $trailer_file->getClientOriginalName();
             $triler_path = $trailer_file->store('gallery','public');
             $movie->trailer_link =$triler_path;
         } 
         
         if($request->photo){
             $photo_file=$request->file('photo');
             $photo = $photo_file->getClientOriginalName();
             $photo_path = $photo_file->store('gallery', 'public');
             $movie->photo = $photo_path;
         }
         $movie->save();

        return $this->success($movie);

    }

    public function movie($id){
            //return $request;
        $movie = Movie::find(intval($id));
        if($movie == null){
            return $this->error('', 'Movie Does not exist', 404);
        }

         
        return $this->success($movie, '');


    }
    
    
    public function update(Request $request){
            //return $request;
        $movie = Movie::find(intval($request->id));
        if($movie == null){
            return $this->error('', 'Movie Does not exist', 404);
        }

        $movie->update($request->all());

        if($request->trailer_link){
            $trailer_file=$request->file('trailer_link');
            $trailer_link = $trailer_file->getClientOriginalName();
            $triler_path = $trailer_file->store('gallery', 'public');
            $movie->trailer_link =$triler_path;
        } 
        
        if($request->photo){
            $photo_file=$request->file('photo');
            $photo = $photo_file->getClientOriginalName();
            $photo_path = $photo_file->store('gallery','public');
            $movie->photo = $photo_path;
        }
        $movie->save();

        return $this->success($movie, 'Movie updated Succesfully');


    }
    public function Delete($id){
        $movie=Movie::find($id)->delete();

        return $this->success('', 'Movie Deleted successfully');
    }
}
