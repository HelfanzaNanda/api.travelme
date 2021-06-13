<?php

use Illuminate\Support\Facades\{Auth, Route};


Route::view('/', 'app');
Route::view('/{path?}', 'app');

Auth::routes();



Route::get('/home', 'HomeController@index')->name('home');
