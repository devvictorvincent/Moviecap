<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use App\Http\Requests\Admin\NewCategory;
use App\Models\Category;

class CategoryController extends Controller
{
    //
    use HttpResponse;

    public function categories(){
        $categories = Category::orderBy('created_at', 'DESC')->get();

        return $this->success($categories);
        
    }
    
    public function new(NewCategory $request){

        $request->validated($request->all());

        $category = Category::create([
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $request->photo
        ]); 

        return $this->success($category, 'Category Created succesfully');

    }

    public function category( $id){

        $category = Category::find($id);
        if($category == null){
            return $this->error('', 'Category Does not exist', 404);
        }
        
        return $this->success($category, '');


    } 
    
    public function update(Request $request){

        $category = Category::find($request->id);
        if($category == null){
            return $this->error('', 'Category Does not exist', 404);
        }
        $category->update($request->all());
        return $this->success($category, 'Category Updated successfully');


    }
    public function Delete($id){
        $category=Category::find($id)->delete();

        return $this->success('', 'Movie Deleted successfully');
    }
}
