<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/try', function () {
    return view('costing-sheet.try');
});


Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('costing-sheets/search-multi','CostingSheetController@searchMulti')->name('costing-sheets.search-multi');
Route::get('costing-sheets/search-single','CostingSheetController@searchSingle')->name('costing-sheets.search-single');
Route::post('costing-sheets/copy','CostingSheetController@copy')->name('costing-sheets.copy');
Route::get('costing-sheets/{costing_sheet}/export','CostingSheetController@export')->name('costing-sheets.export');
Route::resource('costing-sheets','CostingSheetController');
