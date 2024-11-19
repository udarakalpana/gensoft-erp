<?php

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;

uses(RefreshDatabase::class);

function assertTest(
    $response,
    int $status,
    array $jsonStructure,
    array $expected
): void
{
    $response->assertStatus($status);
    $response->assertJsonStructure($jsonStructure);
    $response->assertExactJson($expected);
}

it('test user can login into the system', function () {
    $demoUser = User::factory()->create();

    $demoUserSignInCredentials = [
        'user_name' => $demoUser->user_name,
        'user_password' => '12345678',
    ];

    $response = $this->post('api/user-sign-in', $demoUserSignInCredentials);

    assertTest(
        $response,
        200,
        [
        'first_name',
        'last_name',
        'user_name',
        'role',
        ],
        [
            'first_name' => $demoUser->first_name,
            'last_name' => $demoUser->last_name,
            'user_name' => $demoUser->user_name,
            'role' => $demoUser->role,
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
            'message'
        ],
        [
            'status' => Response::HTTP_NOT_FOUND,
            'message' => Response::$statusTexts[Response::HTTP_NOT_FOUND]
        ]
    );

});
