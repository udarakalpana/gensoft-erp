<?php

namespace App\Http\Controllers\User;

use App\Action\User\UserRegister;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;

class UserController extends Controller
{
    public function userRegister(
        UserRegister $userRegister,
        UserRegisterRequest $request
    ): JsonResponse {
        $validatedUserRegisterRequest = $request->validated();

        if ($validatedUserRegisterRequest) {
            return response()->json($userRegister($validatedUserRegisterRequest));
        }

        return response()->json();
    }
}
