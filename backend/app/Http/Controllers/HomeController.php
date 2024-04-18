<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use App\Models\Movie;
use App\Models\Slider   ;
use Storage;
class HomeController extends Controller
{
    //
    use HttpResponse;
    public function Slider($name){

        $slider= Slider::where('name', $slider)->where('status', 1)->orderBy('created_at', 'DESC')->paginate(10);

        return $this->success($slider);
    }
    
    
    public function TopMovies(){
        $top_movies= Movie::orderBy('rating', 'DESC')->paginate(5);
        
        return $this->success($top_movies);
    } 
    
    public function TrendingMovies(){
        $trending_movies= Movie::orderBy('no_of_views', 'DESC')->paginate(50);

        return $this->success($trending_movies);
    }

    
}
