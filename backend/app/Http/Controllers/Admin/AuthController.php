<?php

namespace App\Http\Controllers\Admin;

use App\Traits\HttpResponse;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Http\Requests\NewUserRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Validator;
use Hash;
use Auth;


class AuthController extends Controller
{
    //

    use HttpResponse;
    public function login(LoginRequest $request){

        $request->validated($request->all());
        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
            return $this->error('', 'Invalid Login infromation provided', 401);
        }
        $user = User::where('email', $request->email)->first();

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API token of' . $user->name)->plainTextToken
        ]);



    }

    public function register(NewUserRequest $request){
        $request->validated($request->all());
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'country' => $request->country,
            'password' => Hash::make($request->password)


        ]);

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API token for' . $user->name)->plainTextToken
        ]);
    }

    public function logout(){
        Auth::user()->currentAccessToken()->delete();



        return $this->success([
            'message' => 'You have been successfully logged out.'
        ]);
    }
}
