<?php

use App\User;
use App\Models\Car;
use App\Models\Hour;
use App\Models\Going;
use App\Models\Driver;
use Illuminate\Database\Seeder;

class GoingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dests = ['Bandung', 'Cirebon','Jakarta', 'Jogja', 'Purwokerto' , 'Semarang', 'Solo', 'Surabaya'];
		$owners = User::where('role', 'owner')->get();
		$prices = ['100000', '150000', '200000', '250000', '300000', '350000', '400000'];
		foreach($owners as $owner){
			$from = collect($dests)->random(3);
			foreach($from as $destination){
				$index_dest = array_search($destination, $dests);
				$to = collect($dests)->filter(function($value, $key) use($index_dest) {
					return $key != $index_dest;
				})->toArray();

				$cars = Car::where('owner_id', $owner->id)->get()->pluck('id')->toArray();
				$drivers = Driver::where('owner_id', $owner->id)->get()->pluck('id')->toArray();
				$driver = $drivers[array_rand($drivers)];
				$hours = Hour::all()->random(6);
				$going = Going::create([
					'owner_id' => $owner->id,
					'car_id' => $cars[array_rand($cars)],
					'driver_id' => $driver,
					'from_region' => $destination,
					'to_region' => $to[array_rand($to)],
					'price' => $prices[array_rand($prices)],
					'created_at' => now(),
					'updated_at' => now(),
				]);
				$going->hours()->attach($hours);
			}
		}
    }
}
