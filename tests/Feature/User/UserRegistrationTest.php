<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('test user can register', function () {


    $employeeUser = User::factory()->make([
        'role' => 2,
        'password' => '12345678'
    ])->toArray();

    $response = $this->post('api/user-register', $employeeUser);

    $response->assertStatus(200);
    $response->assertJsonStructure([
        'status',
        'message'
    ]);
    $this->assertDatabaseHas('users', [
        'first_name' => $employeeUser['first_name'],
        'last_name' => $employeeUser['last_name'],
        'user_name' => $employeeUser['user_name'],
        'email' => $employeeUser['email'],
        'role' => $employeeUser['role'],
    ]);
});
