<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('login', 'Auth\LoginController@login');



Route::middleware('auth:sanctum')->group(function(){
	Route::get('me', 'User\MeController@me');
	Route::delete('logout', 'User\MeController@logout');
	
	Route::prefix('cars')->group(function(){
		Route::get('', 'Car\CarController@index');
		Route::post('', 'Car\CarController@store');
		Route::get('{id}', 'Car\CarController@get');
		Route::put('{id}', 'Car\CarController@update');
		Route::delete('{id}', 'Car\CarController@delete');
	});

	Route::prefix('drivers')->group(function(){
		Route::get('', 'Driver\DriverController@index');
		Route::post('', 'Driver\DriverController@store');
		Route::get('{id}', 'Driver\DriverController@get');
		Route::put('{id}', 'Driver\DriverController@update');
		Route::delete('{id}', 'Driver\DriverController@delete');
	});

	Route::prefix('goings')->group(function(){
		Route::get('', 'Going\GoingController@index');
		Route::post('', 'Going\GoingController@store');
		Route::get('{id}', 'Going\GoingController@get');
		Route::put('{id}', 'Going\GoingController@update');
		Route::delete('{id}', 'Going\GoingController@delete');
	});

	Route::prefix('orders')->group(function(){
		Route::get('', 'Order\OrderController@index');
		Route::post('', 'Order\OrderController@store');
		Route::get('{id}', 'Order\OrderController@get');
		Route::put('{id}', 'Order\OrderController@update');
		Route::delete('{id}', 'Order\OrderController@delete');
	});
});
