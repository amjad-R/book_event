<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');


Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::get('/admin', function () {
        return response(['message' => 'Welcome, Admin!']);
    });
});

Route::middleware(['auth:sanctum', 'role:societe'])->group(function () {
    Route::get('/societe', function () {
        return response(['message' => 'Welcome, Societe!']);
    });
});

Route::middleware(['auth:sanctum', 'role:user'])->group(function () {
    Route::get('/user', function () {
        return response(['message' => 'Welcome, User!']);
    });
});




Route::apiResource('annonces', HomeController::class);


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

