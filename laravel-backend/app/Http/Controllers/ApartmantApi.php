<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class ApartmantApi extends Controller
{
    public function listOfApartments(Request $r)
    {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null)
        {
            $b = App\Building::where('id', $r->post('id'));

            $a = $b->apartment;

            return json_encode($a);
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }

    public function createApartment(Request $r)
    {
        // insert into
    }


    public function updateApartment(Request $r)
    {
        // update
    }

    public function deleteApartment(Request $r)
    {
        // delete
    }

}
