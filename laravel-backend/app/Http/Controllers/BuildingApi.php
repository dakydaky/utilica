<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class BuildingApi extends Controller
{
    public function listOfBuildings(Request $r)
    {
        $jwt = $r->get('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {
            $b = $u->buildings;

            foreach ( $b as $el)
            {
                $el->no = count($el->apartment);
            }
            return json_encode($b);
        }
        else
        {
            return [ 'message' => 'error'];
        }
    }


    public function numberOfApartemnts(Request $r)
    {
        $b = App\Building::find(1);
        return json_encode(count($b->apartment));
    }

    public function createBuilding(Request $r)
    {

        $jwt = $r->get('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {
            $b = new App\Building();
            $b->buildingName = $r->get('buidlingName');
            $b->city = $r->get('city');
            $b->street = $r->get('street');
            $b->streetNo = $r->get('streetNo');
            $b->user_id = $u->id;

            $b->save();

            $a = $r->get('numberOfApartments');

            for( $i = 0; $i < $a; $i++) {
                $apartment = new App\Apartment();
                $apartment->user_id = $u->id;
                $apartment->apartmentName = 'Apartement' + $i;
                $apartment->building_id = $b->id;
                $apartment->save();
            }

            return [ 'message' => 'Creatin building and apartments is finished.'];



        }
        else
        {
            return [ 'message' => 'error'];
        }



    }


    public function updateBuilding(Request $r)
    {
        $jwt = $r->get('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {
            $b = App\Building::where('id', $r->get('id'));


            $b->buildingName = $r->get('buidlingName');
            $b->city = $r->get('city');
            $b->street = $r->get('street');
            $b->streetNo = $r->get('streetNo');

            $b->save();

            return [ 'message' => 'Building updated.'];
        }

        return [ 'message' => 'error'];

    }

    public function deleteBuilding(Request $r)
    {
        $jwt = $r->get('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {
            $b = App\Building::where('id', $r->get('id'));

            $b->delete();

            return [ 'message' => 'Building is successfully deleted.'];
        }

        return [ 'message' => 'error'];
    }

}
