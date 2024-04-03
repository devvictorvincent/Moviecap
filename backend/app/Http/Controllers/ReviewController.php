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

        $request->validated($request->all());

        $review = Review::create([
                'movie-id' => $request->movie_id,
                'rating' => $request->rating,
                'comment' => $request->rating,
                'user_id' => $user->id
        ]);

        //update movie stats
        $movie = Movie::findorFail($request->movie_id);
        $movie->rating = $movie->rating+$request->rating;
        $movie->no_of_ratings = $movie->no_of_ratings+1;

        $movie->save();


            return $this->success($review, 'Thanks for Rating!');

    }
}
