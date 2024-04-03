<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
class NewUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'name' => ['required', 'string'],
            'username' => ['required', 'string', ],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'confirmed', Password::defaults()]
        ];
    }
}
