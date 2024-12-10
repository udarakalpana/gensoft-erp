<?php

namespace App\Action\User;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use App\Service\ResponseGenerator\ResponseGenerator;

class UserRegister
{
    public function __invoke(array $validatedUserRegisterRequest): array
    {
        DB::beginTransaction();
        try {
            User::create([
                'id' => Str::uuid(),
                'title' => $validatedUserRegisterRequest['title'],
                'initials' => $validatedUserRegisterRequest['initials'],
                'first_name' => $validatedUserRegisterRequest['first_name'],
                'middle_name' => $validatedUserRegisterRequest['middle_name'],
                'last_name' => $validatedUserRegisterRequest['last_name'],
                'nickname' => $validatedUserRegisterRequest['nickname'],
                'date_of_birth' => $validatedUserRegisterRequest['date_of_birth'],
                'place_of_birth' => $validatedUserRegisterRequest['place_of_birth'],
                'gender' => $validatedUserRegisterRequest['gender'],
                'marital_status' => $validatedUserRegisterRequest['marital_status'],
                'blood_type' => $validatedUserRegisterRequest['blood_type'],
                'citizenship' => $validatedUserRegisterRequest['citizenship'],
                'photo' => $validatedUserRegisterRequest['photo'],
                'email' => $validatedUserRegisterRequest['email'],
                'user_name' => $validatedUserRegisterRequest['user_name'],
                'role' => $validatedUserRegisterRequest['role'],
                'password' => Hash::make($validatedUserRegisterRequest['password']),
            ]);

            DB::commit();

            return ResponseGenerator::sendSuccessResponse('User Registered Successfully');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
        }

        return ResponseGenerator::badResponse();
    }
}
