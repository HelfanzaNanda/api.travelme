<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Car;
use App\Models\Seat;
use Faker\Generator as Faker;

$factory->define(Seat::class, function (Faker $faker) {
	$cars = Car::get(['id', 'total_seat'])->toArray();
	//$car = $faker->randomElement(array_column($cars, 'id'));
	$seats = [];
	for ($i=1; $i <= array_column($cars, 'id'); $i++) { 
		array_push($seats, $i);
	}
    return [
        'car_id' => array_column($cars, 'total_seat'),
		'seats' => $seats,
		'created_at' => now(),
		'updated_at' => now(),
    ];
});
