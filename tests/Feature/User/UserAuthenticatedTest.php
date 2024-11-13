<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('test user can login into the system', function () {

    // A - arrange
    $demoUser = User::factory()->create();

    $demoUserSignInCredentials = [
        'user_name' => $demoUser->user_name,
        'user_password' => '12345678'
    ];

    // A
    $response = $this->post('api/user-sign-in', $demoUserSignInCredentials);

    // A
    $response->assertStatus(200);
    $response->assertJsonStructure([]);

});
