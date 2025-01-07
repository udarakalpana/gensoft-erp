<?php

namespace App\Http\Controllers\User;

use App\Action\User\UserRegister;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userRegister(
        UserRegister $userRegister,
        Request $request
    ): JsonResponse {
        Log::info($request->all());
//        $validatedUserRegisterRequest = $request->validated();

        if ($validatedUserRegisterRequest) {
            return response()->json($userRegister($validatedUserRegisterRequest));
        }

        return response()->json();
    }
}
