<?php

namespace App\Action\User;

use App\Models\User;
use App\Service\ResponseGenerator\ResponseGenerator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class UserRegister
{
    public function __invoke(array $validatedUserRegisterRequest): array
    {
        DB::beginTransaction();
        try {
            User::create([
                'id' => Str::uuid(),
                'first_name' => $validatedUserRegisterRequest['first_name'],
                'last_name' => $validatedUserRegisterRequest['last_name'],
                'email' => $validatedUserRegisterRequest['email'],
                'user_name' => $validatedUserRegisterRequest['user_name'],
                'role' => $validatedUserRegisterRequest['role'],
                'password' => Hash::make($validatedUserRegisterRequest['password']),
            ]);

            DB::commit();

            return ResponseGenerator::sendSuccessResponse('User Registered Successfully');
        }
        catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
        }

        return ResponseGenerator::badResponse();
    }
}
