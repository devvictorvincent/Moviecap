<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\NewReview;
use App\Traits\HttpResponse;
use App\Models\User;
use App\Models\Review;
use App\Models\Movie;
use Auth;

class ReviewController extends Controller
{
    //
     use HttpResponse;
    public function reviews(){
        //getting user reviews
        $user = Auth::user();
        $reviews = Review::where('user_id', $user->id)->get();
        foreach($reviews as $item){
            $item->movie_data=Movie::find($item->movie_id);
        }

        return $this->success($reviews);
    }
    public function new(NewReview $request){
        //adding a new review
        $user = Auth::user();
        $request->validated($request->all());

        $movie = Movie::find($request->movie_id);
        $review = Review::create([
                'movie_id' => $request->movie_id,
                'rating' => $request->rating,
                'comment' => $request->comment,
                'user_id' => $user->id
        ]);

        //update movie stats
        
        $movie->rating = $movie->rating+$request->rating;
        $movie->no_of_ratings = $movie->no_of_ratings+1;

        $movie->save();


            return $this->success($review, 'Thanks for Rating!');

    }
}
