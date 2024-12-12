<?php

use App\Models\EmegencyContactPersonDetail;
use App\Models\GovernmentIdentificationDetail;
use App\Models\User;
use App\Models\UserContactInformation;
use App\Models\UserResidentialDetail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Symfony\Component\HttpFoundation\Response;

uses(RefreshDatabase::class);

// ***********************************************
// Need to refactor this test
// ***********************************************

it('test user can register', function () {
    $demoUser = User::factory()->create();

    Sanctum::actingAs($demoUser, ['server:demo']);

    $employeeUser = User::factory()->make([
        'role' => 2,
        'password' => '12345678',
    ])->toArray();

    $employeeUserResidentialDetails = UserResidentialDetail::factory()->make()->toArray();
    $employeeUserContactInformation = UserContactInformation::factory()->make()->toArray();
    $employeeUserGovernmentIndentificationDetails = GovernmentIdentificationDetail::factory()->make()->toArray();
    $employeeUserEmegerncyContactDetails = EmegencyContactPersonDetail::factory()->make()->toArray();


    $employeeUserAllDetails = [];

    $employeeUserAllFormSubmitData =  collect([
        $employeeUser,
        $employeeUserResidentialDetails,
        $employeeUserContactInformation,
        $employeeUserGovernmentIndentificationDetails,
        $employeeUserEmegerncyContactDetails,
    ])->flatMap(function ($item) use ($employeeUserAllDetails) {
        return array_merge($item, $employeeUserAllDetails);
    })->toArray();

    $response = $this->post('api/user-register', $employeeUserAllFormSubmitData);

    $response->assertStatus(200);
    $response->assertJsonStructure([
        'status',
        'message',
    ]);
    $this->assertDatabaseHas('users', [
        'title' =>  $employeeUser['title'],
        'initials' => $employeeUser['initials'],
        'first_name' => $employeeUser['first_name'],
        'middle_name' => $employeeUser['middle_name'],
        'last_name' => $employeeUser['last_name'],
        'nickname' => $employeeUser['nickname'],
        'date_of_birth' => $employeeUser['date_of_birth'],
        'place_of_birth' => $employeeUser['place_of_birth'],
        'gender' => $employeeUser['gender'],
        'marital_status' => $employeeUser['marital_status'],
        'blood_type' => $employeeUser['blood_type'],
        'citizenship' => $employeeUser['citizenship'],
        'photo' => $employeeUser['photo'],
        'user_name' => $employeeUser['user_name'],
        'email' => $employeeUser['email'],
        'role' => $employeeUser['role'],
    ]);
    $this->assertDatabaseHas('user_residential_details', [
        'address_line_1' => $employeeUserResidentialDetails['address_line_1'],
        'address_line_2' => $employeeUserResidentialDetails['address_line_2'],
        'city' => $employeeUserResidentialDetails['city'],
        'country' => $employeeUserResidentialDetails['country'],
        'postal_code' => $employeeUserResidentialDetails['postal_code'],
    ]);
    $this->assertDatabaseHas('user_contact_informations', [
        'mobile_number' => $employeeUserContactInformation['mobile_number'],
        'telephone_number' => $employeeUserContactInformation['telephone_number'],
        'telegram_id' => $employeeUserContactInformation['telegram_id'],
        'email_address' => $employeeUserContactInformation['email_address'],
        'linkedin_account' => $employeeUserContactInformation['linkedin_account'],
        'personal_website' => $employeeUserContactInformation['personal_website'],
    ]);
    $this->assertDatabaseHas('government_identification_details', [
        'epf' => $employeeUserGovernmentIndentificationDetails['epf'],
        'tax_file' => $employeeUserGovernmentIndentificationDetails['tax_file'],
        'tin' => $employeeUserGovernmentIndentificationDetails['tin'],
        'nic' => $employeeUserGovernmentIndentificationDetails['nic'],
        'driving_license' => $employeeUserGovernmentIndentificationDetails['driving_license'],
        'passport_number' => $employeeUserGovernmentIndentificationDetails['passport_number'],
    ]);
    $this->assertDatabaseHas('emegerncy_person_contact_details', [
        'name' => $employeeUserEmegerncyContactDetails['name'],
        'address' => $employeeUserEmegerncyContactDetails['address'],
        'emegerncy_person_telephone_number' => $employeeUserEmegerncyContactDetails['emegerncy_person_telephone_number'],
        'emegerncy_person_mobile_number' => $employeeUserEmegerncyContactDetails['emegerncy_person_mobile_number'],
        'emegerncy_person_email_address' => $employeeUserEmegerncyContactDetails['emegerncy_person_email_address'],
        'relationship' => $employeeUserEmegerncyContactDetails['relationship'],
    ]);
});

it('test return bad response if user registration is getting failed', function () {

    $demoUser = User::factory()->create();

    Sanctum::actingAs($demoUser, ['server:demo']);

    $employeeUser = User::factory()->make([
        'user_name' => '',
        'role' => 2,
        'password' => '12345678',
    ])->toArray();

    $employeeUserResidentialDetails = UserResidentialDetail::factory()->make()->toArray();
    $employeeUserContactInformation = UserContactInformation::factory()->make()->toArray();

    $employeeUserAllDetails =  collect($employeeUser)
        ->merge($employeeUserResidentialDetails)
        ->merge($employeeUserContactInformation)
        ->toArray();

    $response = $this->post('api/user-register', $employeeUserAllDetails);


    $response->assertStatus(200);
    $response->assertJsonStructure([
        'status',
        'error'
    ]);
    $response->assertExactJson([
        'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
        'error' => [
            'user_name' => ['The user name field is required.']
        ],
    ]);

});
