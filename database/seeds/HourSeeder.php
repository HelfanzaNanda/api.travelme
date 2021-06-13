<?php

use App\Models\Hour;
use Illuminate\Database\Seeder;

class HourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 24; $i++) {
			$hour = $i > 9 ? $i.':00' : '0'.$i.':00';
			Hour::create([
				'hour' => $hour,
				'created_at' => now(),
				'updated_at' => now(),
			]);
		}
    }
}
