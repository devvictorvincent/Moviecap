<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use App\Models\Slider;
use App\Models\Movie;

use App\Http\Requests\Admin\NewSlide;

class SliderController extends Controller
{
    //

    use HttpResponse;

    public function slides(){
        $slides = Slider::orderBy('created_at', 'DESC')->get();
        foreach($slides as $item){
            $item->movie_data = Movie::find($item->movie_id);
        }
        return $this->success($slides);
        
    }  
    
    public function slide($name){
        $slides = Slider::where('name', $name)->orderBy('created_at', 'DESC')->get();

        if(empty($slides)){
            return $this->error('', 'Not Found', 404);
        }
        foreach($slides as $item){
            $item->movie_data = Movie::find($item->movie_id);
        }
        return $this->success($slides);
        
    }
    
    public function new(NewSlide $request){

        $request->validated($request->all());

        $slide = Slider::create([
            'name' => $request->name,
            'movie_id' => $request->movie_id, 
            'background' => $request->background
        ]); 

        return $this->success($slide);

    }

    public function update(Request $request){

        $slide = Slider::find($request->id);

        $slide->update($request->all());


    }
    public function Delete($id){
        $slide=Slider::find($id)->delete();

        return $this->success('', 'Slide Deleted successfully');
    }
}
