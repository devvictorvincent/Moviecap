<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Traits\HttpResponse;

use Auth;
class AdminGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    use HttpResponse;

    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if($user == null){
            return $this->error('', 'Unauthorized to access resources', 403);
        }
        if($user->role !== 'admin'){
            return $this->error('', 'Unauthorized to access resources', 403);
        }
        return $next($request);
    }
}
