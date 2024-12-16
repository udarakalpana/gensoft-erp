<?php

use App\Action\User\UserDetailsStore;
use App\Models\EmegencyContactPersonDetail;
use App\Models\GovernmentIdentificationDetail;
use App\Models\User;
use App\Models\UserContactInformation;
use App\Models\UserResidentialDetail;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('test store user basic details and related some data with user', function () {

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

    (new UserDetailsStore())->UserBasicDetailsStore($employeeUserAllFormSubmitData);

    $user = User::where('user_name', $employeeUserAllFormSubmitData['user_name'])->first();
    expect($user)->not()->toBeNull()
    ->and($user->first_name)->toBe($employeeUserAllFormSubmitData['first_name'])
    ->and($user->last_name)->toBe($employeeUserAllFormSubmitData['last_name'])
        ->and($user->user_name)->toBe($employeeUserAllFormSubmitData['user_name']);

    $userResidentialDetails = UserResidentialDetail::where('user_id', $user->id)->first();
    expect($userResidentialDetails)->not()->toBeNull()
        ->and($userResidentialDetails->address_line_1)->toBe($employeeUserAllFormSubmitData['address_line_1'])
        ->and($userResidentialDetails->address_line_2)->toBe($employeeUserAllFormSubmitData['address_line_2']);
});
