<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');  
            $table->unsignedBigInteger('category_id');
 
            $table->string('trailer_link');
            $table->string('photo');
            $table->integer('no_of_ratings');
            $table->decimal('rating', 18,2);
            $table->integer('no_of_views');
         
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
