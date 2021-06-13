<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
			$table->string('order_identifier')->unique();
			$table->foreignId('going_id')->constrained('goings')->onDelete('cascade');
			$table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
			$table->foreignId('user_id')->constrained('users')->onDelete('cascade');
			$table->foreignId('seat_id')->constrained('seats')->onDelete('cascade');
			$table->date('date');
			$table->time('hour');
			$table->string('payment_type');
			$table->integer('total_price');
			$table->string('snap_token')->nullable();
			$table->boolean('is_already_paid')->default(false);
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
        Schema::dropIfExists('orders');
    }
}
