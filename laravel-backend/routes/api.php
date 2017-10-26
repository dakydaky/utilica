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


Route::post('/numApartments', [ 'uses' => 'BuildingApi@numberOfApartemnts']);

Route::post('/createBuilding', [ 'uses' => 'BuildingApi@cerateBuilding']);


Route::put('/updateBuilding', [ 'uses' => 'BuildingApi@updateBuilding']);


Route::delete('/deleteBuilding', [ 'uses' => 'BuildingApi@deleteBuilding']);


//Apartment

Route::get('/getListOfApartment', [ 'uses' => 'ApartmentApi@listOfApartments']);

Route::post('/createApartment', [ 'uses' => 'ApartmentApi@createApartment']);

Route::put('/updateApartment', [ 'uses' => 'ApartmentApi@updateApartment']);

Route::delete('/deleteApartment', [ 'uses' => 'ApartmentApi@deleteApartment']);


//Maintenance


Route::get('/getListOfMaintenance', [ 'uses' => 'MaintenanceApi@listOfMaintenance']);

Route::post('/createMaintenance', [ 'uses' => 'MaintenanceApi@reportMaintenance']);

Route::put('/updateMaintenance', [ 'uses' => 'MaintenanceApi@updateMaintenance']);

Route::delete('/deleteMaintenance', [ 'uses' => 'MaintenanceApi@deleteMaintenance']);

// Inquiries

Route::get('/getListOfInquiries', [ 'uses' => 'InquiriesApi@listOfInquiries']);

Route::post('/createInquiries', [ 'uses' => 'InquiriesApi@createInquiries']);

Route::put('/updateInquiries', [ 'uses' => 'InquiriesApi@updateInquiries']);

Route::delete('/deleteInquiries', [ 'uses' => 'InquiriesApi@deleteInquiries']);


// Laundry

Route::get('/getScheduleLaundry', [ 'uses' => 'LaundryApi@laundrySchedule']);

Route::post('/makeAppointment', [ 'uses' => 'LaundryApi@makeAppointment']);

Route::put('/updateAppointment', [ 'uses' => 'LaundryApi@updateAppointment']);

Route::delete('/deleteAppointment', [ 'uses' => 'LaundryApi@deleteAppointment']);



