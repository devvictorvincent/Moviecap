<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use Auth;

 
 
class AccountController extends Controller
{
    //

    use HttpResponse;

    public function Index(){
        $user = Auth::user();
        if($user == null){
            return  $this->error('', 'User Not logged in', 403);
        }
        return $this->success($user, 'User Data loaded successfully');
    } 
    
    
    public function Update(Request $request){
        $user = Auth::user();
        if($user == null){
            return  $this->error('', 'User Not logged in', 403);
        }
        $user->update($request->all());

        return $this->success($user, 'User Updated Successfully');
    }

}
