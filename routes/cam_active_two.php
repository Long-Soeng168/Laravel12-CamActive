<?php

use App\Http\Controllers\FrontPageController\CamActiveController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CamActiveController::class, 'index'])->name('home');

Route::get('/products', action: [CamActiveController::class, 'products']);
Route::get('/products/{product}', [CamActiveController::class, 'products_show']);

Route::get('/impact', [CamActiveController::class, 'impact']);
Route::get('/impact/{impact}', [CamActiveController::class, 'impact_show']);

Route::get('//who-we-work-with/{page}', [CamActiveController::class, 'why_partner_with_us_show']);

Route::get('/careers', [CamActiveController::class, 'careers']);
Route::get('/about', [CamActiveController::class, 'about']);
Route::get('/contact', [CamActiveController::class, 'contact']);

Route::get('/search_resources', [CamActiveController::class, 'search_resources']);
Route::get('/resources', [CamActiveController::class, 'resources']);
Route::get('/resources/{post}', [CamActiveController::class, 'resources_show']);

Route::post('/submit_message', [CamActiveController::class, 'submit_message']);
Route::post('/submit_career', [CamActiveController::class, 'submit_career']);
 

Route::get('/privacy', function () {
    return Inertia::render('cam-active-two/pages/Show');
});
Route::get('/terms', function () {
    return Inertia::render('cam-active-two/pages/Show');
});
