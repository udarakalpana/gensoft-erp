<?php

namespace App\Action\Auth;

use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class CheckUser
{
    public function __invoke(array $validatedUserRequest): array
    {
        $user = User::where('user_name', $validatedUserRequest['user_name'])->first();

        if (!$user) {
            return [
                'status' => Response::HTTP_NOT_FOUND,
                'message' => Response::$statusTexts[Response::HTTP_NOT_FOUND]
            ];
        }

        return [
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'user_name' => $user->user_name,
            'role' => $user->role,
        ];
    }
}
