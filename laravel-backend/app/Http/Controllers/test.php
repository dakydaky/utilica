<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class test extends Controller
{
    function getTest(){
        $arr = array();
        array_push($arr, "Test works.");
        return response()->json($arr);
    }
}
