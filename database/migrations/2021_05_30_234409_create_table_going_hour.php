<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableGoingHour extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goings_hours', function (Blueprint $table) {
            $table->foreignId('going_id')->constrained('goings')->onDelete('cascade');
            $table->foreignId('hour_id')->constrained('hours')->onDelete('cascade');
			$table->primary(['going_id', 'hour_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goings_hours');
    }
}
