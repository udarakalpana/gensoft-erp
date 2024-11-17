<?php

namespace App\Action\Auth;

use App\Models\User;

class CheckUser
{
    public function __invoke(array $validatedUserRequest): array
    {
        $user = User::where('user_name', $validatedUserRequest['user_name'])->first();

        return [
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'user_name' => $user->user_name,
            'role' => $user->role,
        ];
    }
}
