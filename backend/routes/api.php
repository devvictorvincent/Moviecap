<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\SliderController as AdminSliderController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//public routes
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register']);


Route::get('/movies/top', [HomeController::class, 'TopMovies']);
Route::get('/movies/trending', [HomeController::class, 'TrendingMovies']);
Route::get('/slider/{name}', [HomeController::class, 'Slider']);
Route::get('/movie/{id}', [MovieController::class, 'Movie']);



Route::group(['middleware' => ['auth:sanctum']], function (){
    Route::post('/reviews', [ReviewController::class, 'reviews']);
    Route::post('/review/new', [ReviewController::class, 'new']);

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::group(['prefix' => 'admin', 'middleware' => ['AdminGuard'], ], function(){
            Route::post('/movies', [AdminMovieController::class, 'Movies']);
            Route::post('/movie/new', [AdminMovieController::class, 'new_movie']);
            Route::get('/movie/{id}', [AdminMovieController::class, 'movie']);
            Route::patch('/movie/update', [AdminMovieController::class, 'update']);
            Route::get('/movie/trash/{$id}', [AdminMovieController::class, 'new_movie']);
            
            Route::get('/categories', [AdminCategoryController::class, 'categories']);
            Route::get('/category/{id}', [AdminCategoryController::class, 'category']);
            Route::post('/category/new', [AdminCategoryController::class, 'new']);
            Route::patch('/category/update', [AdminCategoryController::class, 'update']);
            Route::get('/category/trash/{$id}', [AdminCategoryController::class, 'delete']);
            
            
            Route::get('/slides', [AdminSliderController::class, 'slides']);
            Route::post('/slide/{name}', [AdminSliderController::class, 'slide']);
            Route::post('/slide/new', [AdminSliderController::class, 'new']);
            Route::patch('/slide/update', [AdminSliderController::class, 'update']);
            Route::get('/category/trash/{$id}', [AdminSliderController::class, 'delete']);
    });

});