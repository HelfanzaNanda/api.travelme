<?php

use App\Driver;
use App\User;
use Faker\Generator;
use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $drivers = User::where('role', 'driver')->get();
		$owners = User::where('role', 'owner')->get()->pluck('id')->toArray();
		foreach($drivers as $driver){
			Driver::create([
				'user_id' => $driver->id,
				'owner_id' => $owners[array_rand($owners)],
				'created_at' => now(),
				'updated_at' => now(),
			]);
		}
    }
}
