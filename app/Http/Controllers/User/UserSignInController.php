<?php

namespace App\Http\Controllers\User;

use App\Action\Auth\CheckUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserSignInRequest;
use Illuminate\Http\JsonResponse;

class UserSignInController extends Controller
{
    public function checkUserAuthentication(
        UserSignInRequest $request,
        CheckUser $checkUser
    ): JsonResponse {
        $validatedUserRequest = $request->validated();

        return response()->json($checkUser($validatedUserRequest));
    }
}
