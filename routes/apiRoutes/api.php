<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserSignInController;

Route::post('/user-sign-in', [UserSignInController::class, 'checkUserAuthentication']);
