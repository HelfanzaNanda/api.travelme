<?php

use App\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class OwnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$names = ['Connext Shuttle', 'Rama Sakti', 'Oke Trans', 'Andis Travel',
	 'Daffa Travel', 'Bahari Trans Travel', 'Mada Trans Travel', 'Nusantara Travel'];
        foreach($names as $name){
			User::create([
				'name' => $name,
				'email' => strtolower(implode('', explode(' ', $name)). '@gmail.com'),
				'email_verified_at' => now(),
				'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
				'avatar' => "https://ui-avatars.com/api/?name=".implode('+', explode(' ', $name)),
				'role' => 'owner',
				'fcm_token' => Str::random(60),
				'created_at' => now(),
				'updated_at' => now(),
			]);
		}
    }
}
