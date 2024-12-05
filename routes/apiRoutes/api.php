<?php

use App\Http\Middleware\DemoUserCheckMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\UserSignInController;

Route::post('/user-sign-in', [UserSignInController::class, 'checkUserAuthentication']);

Route::middleware(['auth:sanctum', DemoUserCheckMiddleware::class])->group(function () {

    Route::post('/user-register', [UserController::class, 'userRegister']);

});
