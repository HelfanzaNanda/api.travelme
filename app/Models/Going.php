<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Going extends Model
{
    protected $guarded = [];

	public function hours()
	{
		return $this->belongsToMany(Hour::class, 'goings_hours', 'going_id', 'hour_id');
	}
}
