<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\Owner\UserResource;
use Illuminate\Http\Request;

class MeController extends Controller
{
    public function me(Request $request)
	{
		return response()->json([
			'message' => 'successfully get authenticated',
			'status' => true,
			'data' => new UserResource($request->user())
		]);
	}

	public function logout(Request $request)
	{
		$currentAccessToken = $request->user()->currentAccessToken()->id;
		$request->user()->tokens()->where('id', $currentAccessToken)->delete();
		return response()->json([
			'message' => 'you are logout',
			'status' => true,
			'data' => (object)[]
		]);
	}
}
