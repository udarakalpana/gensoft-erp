<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

uses(RefreshDatabase::class);

it('test user can register', function () {
    $demoUser = User::factory()->create();

    Sanctum::actingAs($demoUser, ['server:demo']);

    $employeeUser = User::factory()->make([
        'role' => 2,
        'password' => '12345678',
    ])->toArray();

    $response = $this->post('api/user-register', $employeeUser);

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
});
