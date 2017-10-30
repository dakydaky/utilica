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
            $b = App\Building::where('id', $r->post('id'))->first();

            $a = $b->apartment;

            return json_encode($a);
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }


    public function getApartment(Request $r)
    {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null && $u->type ='tenet')
        {
            $a = $u->apartment;

            return [ 'apartment' => $a];
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }

    public function takeApartment(Request $r) {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null && $u->type ='tenet') {
            $a = App\Apartment::where('passKey',$r->post('passKey'))->first();
            if( $a != null && $a->user_id == null) {
                $a->user_id = $u->id;
                $a->save();
                return [ 'message' => 'OK'];
            }

            return [ 'message' => 'Error'];

        } else {

            return [ 'message' => 'Error'];
        }

    }

    public function createApartment(Request $r)
    {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null && $u->type == 'landlord')
        {

            $a = new App\Apartment();

            $a->building_id = $r->post('id');
            $a->user_id = null;
            $a->apartmentName = $r->post('apartmentName');
            $a->passKey = $r->post('passKey');

            $a->save();

            return [ 'message' => 'OK'];
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }


    public function updateApartment(Request $r)
    {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null && $u->type == 'landlord')
        {

            $a = App\Apartment::where('id', $r->post('id'))->first();

            $a->building_id = $r->post('id');
            $a->apartmentName = $r->post('apartmentName');
            $a->passKey = $r->post('passKey');

            $a->save();

            return [ 'message' => 'OK'];
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }

    public function deleteApartment(Request $r)
    {
        $jwt = $r->post('jwt');

        $u = App\User::where('jwt', $jwt)->first();
        if($u != null && $u->type == 'landlord')
        {

            $a = App\Apartment::where('id', $r->post('id'))->first();

            $a->delete();

            return [ 'message' => 'OK'];
        }
        else
        {
            return [ 'message' => 'error' ];
        }
    }

}
