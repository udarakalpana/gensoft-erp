<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('test user can login into the system', function () {
    $demoUser = User::factory()->create();

    $demoUserSignInCredentials = [
        'user_name' => $demoUser->user_name,
        'user_password' => '12345678',
    ];

    $response = $this->post('api/user-sign-in', $demoUserSignInCredentials);

    $response->assertStatus(200);
    $response->assertJsonStructure([
        'first_name',
        'last_name',
        'user_name',
        'role',
    ]);
    $response->assertExactJson([
        'first_name' => $demoUser->first_name,
        'last_name' => $demoUser->last_name,
        'user_name' => $demoUser->user_name,
        'role' => $demoUser->role,
    ]);
});
