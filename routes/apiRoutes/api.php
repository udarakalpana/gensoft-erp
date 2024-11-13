<?php

use App\Http\Controllers\UserSignInController;
use Illuminate\Support\Facades\Route;

Route::post('/user-sign-in', [UserSignInController::class, 'checkUserAuthentication']);
