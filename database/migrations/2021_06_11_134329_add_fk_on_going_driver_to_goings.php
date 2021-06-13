<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkOnGoingDriverToGoings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('goings', function (Blueprint $table) {
            $table->foreignId('driver_id')
			->after('car_id')->constrained('drivers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('goings', function (Blueprint $table) {
            $table->dropColumn('driver_id');
        });
    }
}
