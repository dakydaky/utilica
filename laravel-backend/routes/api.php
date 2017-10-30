<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//user

Route::get('/test', [ 'uses' => 'test@getTest']);

Route::post('/register', [ 'uses' => 'UserApi@registerUser']);

Route::post('/login', [ 'uses' => 'UserApi@loginUser']);

//Route::post('/getUser', [ 'uses' => 'UserApi@getUser']);

Route::put('updateUser', [ 'uses' => 'UserApi@updateUser']);

Route::delete('updateUser', [ 'uses' => 'UserApi@updateUser']);

//building


Route::post('/getListOfBuilding', [ 'uses' => 'BuildingApi@listOfBuildings']);

Route::post('/getBuildingInfo', [ 'uses' => 'BuildingApi@getBuilding']);

Route::post('/createBuilding', [ 'uses' => 'BuildingApi@createBuilding']);


Route::post('/updateBuilding', [ 'uses' => 'BuildingApi@updateBuilding']);


Route::post('/deleteBuilding', [ 'uses' => 'BuildingApi@deleteBuilding']);


//Apartment

Route::post('/getListOfApartment', [ 'uses' => 'ApartmantApi@listOfApartments']);

Route::post('/getApartment', [ 'uses' => 'ApartmantApi@getApartment']);

Route::post('/createApartment', [ 'uses' => 'ApartmantApi@createApartment']);

Route::post('/takeApartment', [ 'uses' => 'ApartmantApi@takeApartment']);

Route::put('/updateApartment', [ 'uses' => 'ApartmantApi@updateApartment']);

Route::delete('/deleteApartment', [ 'uses' => 'ApartmantApi@deleteApartment']);


//Maintenance


Route::post('/getListOfMaintenance', [ 'uses' => 'MaintenanceApi@listOfMaintenance']);

Route::post('/postMain', [ 'uses' => 'MaintenanceApi@reportMaintenance']);

Route::post('/updateMaintenance', [ 'uses' => 'MaintenanceApi@updateMaintenanceProgress']);

Route::delete('/deleteMaintenance', [ 'uses' => 'MaintenanceApi@deleteMaintenance']);

// Inquiries

Route::post('/getListOfInquiries', [ 'uses' => 'InquiriesApi@listOfInquiries']);

Route::post('/createInquiries', [ 'uses' => 'InquiriesApi@createInquiries']);

Route::put('/updateInquiries', [ 'uses' => 'InquiriesApi@updateInquiries']);

Route::delete('/deleteInquiries', [ 'uses' => 'InquiriesApi@deleteInquiries']);


// Laundry

Route::post('/getScheduleLaundry', [ 'uses' => 'LaudryApi@laundrySchedule']);

Route::post('/makeAppointment', [ 'uses' => 'LaudryApi@makeAppointment']);

Route::put('/updateAppointment', [ 'uses' => 'LaudryApi@updateAppointment']);

Route::delete('/deleteAppointment', [ 'uses' => 'LaudryApi@deleteAppointment']);



// Broadcast

Route::post('/getBroadCast', [ 'uses' => 'BroadcastApi@listOfBroadcasts']);

Route::post('/postBroadCast', [ 'uses' => 'BroadcastApi@createBroadcast']);





