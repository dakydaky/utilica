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

    public function getBuilding(Request $r) {
        $jwt = $r->get('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if( $u != null) {
            $b = App\Building::where('id', $r->post('building_id'))->first();

            $a = $b->apartment;

            unset($b->apartment);

            foreach ($a as $item) {
                if($item->user_id != null) {
                    unset($item->user);
                    unset($item->user->password);
                    unset($item->user->username);
                    unset($item->user->email);
                    unset($item->user->id);
                }
            }
            return [ 'building' => json_encode($b),
            'apartments' => json_encode($a)];
        }
        else {
            return [ 'message' => 'Error.'];
        }
    }


    public function createBuilding(Request $r)
    {

        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {

            $d =  $r->post('building');

            $b = new App\Building();
            $b->buildingName = $d['buildingName'];
            $b->city = $d['city'];
            $b->street = $d['street'];
            $b->streetNo = $d['streetNo'];
            $b->user_id = $u->id;

            //return json_encode($b);

            $b->save();

            $a = intval($d['numApp']);

            for( $i = 0; $i < $a; $i++) {
                $apartment = new App\Apartment();
                $apartment->user_id = $u->id;
                $apartment->apartmentName = 'Apartement' . $i;
                $apartment->building_id = $b->id;
                $apartment->save();
            }

            return [ 'message' => 'New building and ' . $a
                . ' apartments are successfully added to database.',
                'building' => json_encode($b)];
        }
        else
        {
            return [ 'message' => 'error'];
        }
    }


    public function updateBuilding(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {

            $id = $r->post('building_id');

            $b = App\Building::where('id', $id)->first();


            $newB = $r->post('building');

            $b->buildingName = $newB['buildingName'];
            $b->city = $newB['city'];
            $b->street = $newB['street'];
            $b->streetNo = $newB['streetNo'];

            $b->save();

            return [ 'message' => 'OK'];
        }

        return [ 'message' => 'error'];

    }

    public function deleteBuilding(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if($u != null) {
            $b = App\Building::where('id', $r->post('building_id'))->first();

            if( $b->apartment != null) {
                foreach( $b->apartment as $el)
                    $el->delete();
            }

            // delete whatever more is need...

            $b->delete();

            return [ 'message' => 'Building is successfully deleted.'];
        }

        return [ 'message' => 'error'];
    }

}
