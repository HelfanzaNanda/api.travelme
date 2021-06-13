<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hour extends Model
{
    protected $guarded = [];

	public function goings()
	{
		return $this->belongsToMany(Going::class, 'goings_hours',  'hour_id', 'going_id');
	}
}
