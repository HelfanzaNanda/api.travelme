<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goings', function (Blueprint $table) {
            $table->id();
			$table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
			$table->foreignId('car_id')->constrained('cars')->onDelete('cascade');
			$table->string('from_region');
			$table->string('to_region');
			$table->integer('price');
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
        Schema::dropIfExists('goings');
    }
}
