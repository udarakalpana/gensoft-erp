<?php

namespace App\Action\User;

use App\Models\EmegencyContactPersonDetail;
use App\Models\GovernmentIdentificationDetail;
use App\Models\User;
use App\Models\UserContactInformation;
use App\Models\UserEducationDetails;
use App\Models\UserResidentialDetail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class UserDetailsStore
{
    // ***********************************************
    // Need to write unit test for this class and need to refactor this class applying laravel dispatching
    // ***********************************************
    public function UserBasicDetailsStore(array $validatedUserRegisterRequest): void
    {
        $userId = $this->StoreUserBasicDetailsAndGetUserId($validatedUserRegisterRequest['employeeBasicDetails']);

       $this->UserResidentialDetailStore($userId, $validatedUserRegisterRequest['employeeResidentialDetails']);
       $this->UserContactInformationStore($userId, $validatedUserRegisterRequest['employeeContactDetails']);
       $this->UserEducationDetailsStore($userId, $validatedUserRegisterRequest['employeeEducationDetails']);
//       $this->UserGovernmentIdentificationDetailsStore($userId, $validatedUserRegisterRequest);
//       $this->UserEmegerncyPersonDetailsStore($userId, $validatedUserRegisterRequest);
    }

    private function StoreUserBasicDetailsAndGetUserId(array $validatedUserRegisterRequest): string
    {
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

        return $user->id;
    }

    private function UserResidentialDetailStore(string $userId, array $validatedUserRegisterRequest): void
    {
        UserResidentialDetail::create([
            'user_id' => $userId,
            'address_line_1' => $validatedUserRegisterRequest['address_line_1'],
            'address_line_2' => $validatedUserRegisterRequest['address_line_2'],
            'city' => $validatedUserRegisterRequest['city'],
            'country' => $validatedUserRegisterRequest['country'],
            'postal_code' => $validatedUserRegisterRequest['postal_code'],
        ]);
    }

    private static function UserContactInformationStore(string $userId, array $validatedUserRegisterRequest): void
    {
        UserContactInformation::create([
            'user_id' => $userId,
            'mobile_number' => $validatedUserRegisterRequest['mobile_number'],
            'telephone_number' => $validatedUserRegisterRequest['telephone_number'],
            'telegram_id' => $validatedUserRegisterRequest['telegram_id'],
            'email_address' => $validatedUserRegisterRequest['email_address'],
            'linkedin_account' => $validatedUserRegisterRequest['linkedin_account'],
            'personal_website' => $validatedUserRegisterRequest['personal_website'],
        ]);
    }

    private function UserEducationDetailsStore(string $userId, array $validatedUserRegisterRequest): void
    {
        foreach ($validatedUserRegisterRequest as $educationDetails) {
            UserEducationDetails::create([
                'user_id' => $userId,
                'category1' => $educationDetails['category1'],
                'school1' => $educationDetails['school1'],
                'category2' => $educationDetails['category2'],
                'school2' => $educationDetails['school2'],
            ]);
        }
    }

//    private function UserGovernmentIdentificationDetailsStore(string $userId, array $validatedUserRegisterRequest): void
//    {
//        GovernmentIdentificationDetail::create([
//            'user_id' => $userId,
//            'epf' => $validatedUserRegisterRequest['epf'],
//            'tax_file' => $validatedUserRegisterRequest['tax_file'],
//            'tin' => $validatedUserRegisterRequest['tin'],
//            'nic' => $validatedUserRegisterRequest['nic'],
//            'driving_license' => $validatedUserRegisterRequest['driving_license'],
//            'passport_number' => $validatedUserRegisterRequest['passport_number'],
//        ]);
//
//    }

//    private function UserEmegerncyPersonDetailsStore(string $userId, array $validatedUserRegisterRequest): void
//    {
//        EmegencyContactPersonDetail::create([
//            'user_id' => $userId,
//            'name' => $validatedUserRegisterRequest['name'],
//            'address' => $validatedUserRegisterRequest['address'],
//            'emegerncy_person_telephone_number' => $validatedUserRegisterRequest['emegerncy_person_telephone_number'],
//            'emegerncy_person_mobile_number' => $validatedUserRegisterRequest['emegerncy_person_mobile_number'],
//            'emegerncy_person_email_address' => $validatedUserRegisterRequest['emegerncy_person_email_address'],
//            'relationship' => $validatedUserRegisterRequest['relationship'],
//        ]);
//    }
}
