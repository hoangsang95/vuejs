<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Customer;
class CustomerController extends Controller
{   
 
    public function show (){
        $customer = Customer::all();
        return $customer;
    }

    public function delete($id){
    	$customer = Customer::find($id)->delete();

    }
    
    public function add(Request $request){
        
        $this->validate($request, [
            'name' => 'required',
            'age'  => 'required|numeric',
         ]);
        $customer = new Customer;
        $input = $request->except('_token');
        foreach($input as $k => $v){
            $customer->$k = $v.'';
        }
        $customer->save();
       
        return response()->json($customer);
    }
}
