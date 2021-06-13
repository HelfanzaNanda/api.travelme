<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
			HourSeeder::class,
			UserSeeder::class,
			OwnerSeeder::class,
			DriverSeeder::class,
			CarSeeder::class,
			GoingSeeder::class
			//SeatSeeder::class
		]);
    }
}
