<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['as' => 'api.'],function() {

    Route::post('costing-sheets/update/{costing_sheet}','CostingSheetApiController@update')->name('costing-sheets.update');
    Route::post('costing-sheets/store','CostingSheetApiController@store')->name('costing-sheets.store');
    Route::get('costing-sheets/{costing_sheet}','CostingSheetApiController@show')->name('costing-sheets.show');
    Route::get('costing-sheets','CostingSheetApiController@index')->name('costing-sheets.index');
});
