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
        Schema::create('sliders', function (Blueprint $table) {
            
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('movie_id');
            $table->integer('order')->default(0);
            $table->string('background')->default('/gallery/default-movie-background');
            $table->integer('published')->default(0);
            $table->foreign('movie_id')->references('id')->on('movies')->onDelete('cascade');
           
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
        Schema::dropIfExists('sliders');
    }
};
