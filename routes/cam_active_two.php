<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('cam-active-two/Index');
})->name('home');

Route::get('/products', function () {
    return Inertia::render('cam-active-two/products/Index');
});
Route::get('/products/{id}', function () {
    return Inertia::render('cam-active-two/products/Show');
});

Route::get('/impact', function () {
    return Inertia::render('cam-active-two/impacts/Index');
});
Route::get('/impact/{id}', function () {
    return Inertia::render('cam-active-two/impacts/Show');
});

Route::get('/search_resources', function () {
    return Inertia::render('cam-active-two/resources/Search-Resources');
});
Route::get('/resources', function () {
    return Inertia::render('cam-active-two/resources/Index');
});
Route::get('/resources/{id}', function () {
    return Inertia::render('cam-active-two/resources/Show');
});



Route::get('/careers', function () {
    return Inertia::render('cam-active-two/Careers');
});
Route::get('/about', function () {
    return Inertia::render('cam-active-two/About');
});

Route::get('/contact', function () {
    return Inertia::render('cam-active-two/Contact');
});

Route::get('/privacy', function () {
    return Inertia::render('cam-active-two/pages/Show');
});
Route::get('/terms', function () {
    return Inertia::render('cam-active-two/pages/Show');
});

Route::get('/who-we-work-with/{id}', function () {
    return Inertia::render('cam-active-two/pages/Show');
});
