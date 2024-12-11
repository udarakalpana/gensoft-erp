<?php

namespace App\Action\User;

use App\Models\User;
use App\Models\UserContactInformation;
use App\Models\UserResidentialDetail;
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
            $user = User::create([
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

            if ($user->id) {
                UserResidentialDetail::create([
                    'user_id' => $user->id,
                    'address_line_1' => $validatedUserRegisterRequest['address_line_1'],
                    'address_line_2' => $validatedUserRegisterRequest['address_line_2'],
                    'city' => $validatedUserRegisterRequest['city'],
                    'country' => $validatedUserRegisterRequest['country'],
                    'postal_code' => $validatedUserRegisterRequest['postal_code'],
                ]);

                UserContactInformation::create([
                    'user_id' => $user->id,
                    'mobile_number' => $validatedUserRegisterRequest['mobile_number'],
                    'telephone_number' => $validatedUserRegisterRequest['telephone_number'],
                    'telegram_id' => $validatedUserRegisterRequest['telegram_id'],
                    'email_address' => $validatedUserRegisterRequest['email_address'],
                    'linkedin_account' => $validatedUserRegisterRequest['linkedin_account'],
                    'personal_website' => $validatedUserRegisterRequest['personal_website'],
                ]);
            }

            DB::commit();

            return ResponseGenerator::sendSuccessResponse('User Registered Successfully');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
        }

        return ResponseGenerator::badResponse();
    }
}
