<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;

class NewMovie extends FormRequest
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
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'category_id' => ['required', 'string'],
            'trailer_link' => ['required', 'mimes:mp4,jpg,png'],
            'photo' => ['required', 'mimes:mp4,jpg,png'],
        ];
    }
}
