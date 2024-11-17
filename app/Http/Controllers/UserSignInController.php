<?php

namespace App\Http\Controllers;

use App\Action\Auth\CheckUser;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\UserSignInRequest;

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
