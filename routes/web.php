<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | This file is where you may define all of the routes that are handled
  | by your application. Just tell Laravel the URIs it should respond
  | to using a Closure or controller method. Build something great!
  |
 */
Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/users', 'VueController@getUser');





//Auth::routes();
//Route::get('/home', 'HomeController@index');
//Route::get('auth/facebook', 'Auth\RegisterController@redirectToProvider');
//Route::get('auth/facebook/callback', 'Auth\RegisterController@handleProviderCallback');
//
//Route::get('abc', function () {
//    Nexmo::message()->send([
//        'to' => '84963096441',
//        'from' => 'dsds',
//        'text' => 'Kha chó'
//    ]);
//});
//
//
//Route::group(['middleware' => ['web']], function() {
//    Route::get('test', 'MyController@mytest');
//    Route::post('addItem', 'MyController@addItem');
//    Route::post('postEdit', 'MyController@posteditItem');
////Route::get('editItem' , 'MyController@geteditItem');
//    Route::get('deleteItem/{id}', 'MyController@deleteItem');
//    Route::get('angular', function(){
//        return view('angular');
//    });
//});
//
//
//Route::get('/', function () {
//    return view('index2');
//});
//
//Route::get('/api/v1/employees/', 'Employees@show');
//Route::post('/api/v1/employees', 'Employees@store');
//Route::post('/api/v1/employees/{id}', 'Employees@update');
//Route::delete('/api/v1/employees/{id}', 'Employees@destroy');

Route::get('/api/show', 'CustomerController@show');

Route::get('customer', function(){
    return view('customer');
});
Route::delete('api/delete/{id}','CustomerController@delete');
Route::post('api/add','CustomerController@add');

