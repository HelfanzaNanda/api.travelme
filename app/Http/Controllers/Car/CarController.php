<?php

namespace App\Http\Controllers\Car;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index()
	{
		$cars = Car::paginate(10);
		return response()->json([
			'data' => $cars
		]);
	}
}
