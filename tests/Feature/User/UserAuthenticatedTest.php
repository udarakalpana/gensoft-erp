<?php

use App\Models\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function assertTest(
    $response,
    int $status,
    array $jsonStructure,
    array $expected
): void {
    $response->assertStatus($status);
    $response->assertJsonStructure($jsonStructure);
    $response->assertExactJson($expected);
}

it('test user can login into the system', function () {
    $demoUser = User::factory()->create();

    $token = $demoUser->createToken($demoUser->user_name, ['server:demo'])->plainTextToken;

    $demoUserSignInCredentials = [
        'user_name' => $demoUser->user_name,
        'user_password' => '12345678',
    ];

    $response = $this->post('api/user-sign-in', $demoUserSignInCredentials);

    assertTest(
        $response,
        200,
        [
        'status',
        'user_details' => [
            'first_name',
            'last_name',
            'user_name',
            'role',
        ],
        ],
        [
            'status' => Response::HTTP_OK,
            'user_details' => [
            'first_name' => $demoUser->first_name,
            'last_name' => $demoUser->last_name,
             'user_name' => $demoUser->user_name,
             'role' => $demoUser->role,
            ],
        ]
    );
});

it('test return bad response if user not existing', function () {
    User::factory()->create();

    $demoUserSignInCredentials = [
        'user_name' => 'test',
        'user_password' => '12345678',
    ];

    $response = $this->post('api/user-sign-in', $demoUserSignInCredentials);

    assertTest(
        $response,
        200,
        [
            'status',
            'message',
        ],
        [
            'status' => Response::HTTP_NOT_FOUND,
            'message' => 'User not found',
        ]
    );
});
