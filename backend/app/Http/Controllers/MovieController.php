<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;

class MovieController extends Controller
{
    //
    use HttpResponse;


    public function Movie($id){
        $movie = Movie::findorFail($id);
        $movie->ratings = Review::find($movie->id);
        
        //update movie statistics
        $movie->no_of_views = $movie->no_of_views+1;
        $movie->save();

        return $this->success($movie);
    }
}
