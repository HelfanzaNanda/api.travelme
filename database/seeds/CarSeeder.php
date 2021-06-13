<?php

use App\User;
use App\Models\Car;
use App\Models\Media;
use App\Models\Seat;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$owners = User::where('role', 'owner')->get()->pluck('id')->toArray();
		$cars = ['Isuzu', 'APV', 'Toyota Hiyace', 'Isuzu Elf', 'Luxio', 'Hyundai'];
		$seats = [ '6', '9', '12', '15'];
		$falicities = ['AC', 'Snack', 'Air Putih'];

		for ($i=0; $i < 200; $i++) { 
			$car = Car::create([
				'owner_id' => $owners[array_rand($owners)],
				'name' => $cars[array_rand($cars)],
				'total_seat' => $seats[array_rand($seats)], 
				'facility' => implode(' ', $falicities),
				'created_at' => now(),
				'updated_at' => now(),
			]);


			Media::create([
				'model_type' => Media::class,
				'model_id' => $car->id,
				'filename' => url(''). '/public/uploads/cars/'. rand(1, 21).'.jpg',
				'created_at' => now(),
				'updated_at' => now(),
			]);

			$total_seats = [];
			for ($j=1; $j <= $car->total_seat; $j++) { 
				array_push($total_seats, $j);
			}

			Seat::create([
				'car_id' => $car->id,
				'seats' => json_encode($total_seats),
				'created_at' => now(),
				'updated_at' => now(),
			]);
		}
    }
}
