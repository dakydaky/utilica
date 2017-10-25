<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class BuildingApi extends Controller
{
    public function listOfBuildings(Request $r)
    {
        $id = $r->get('id');
        $u = App\User::where('id', $id);
        return json_encode($u->buildings);
    }

    public function createBuilding(Request $r)
    {
        $b = new App\Building();
        $b->buildingName = $r->get('buidlingName');
        $b->city = $r->get('city');
        $b->street = $r->get('street');
        $b->streetNo = $r->get('streetNo');
        $b->user_id = App\User::where('id', $r->get('id'));

        $b->save();

    }


    public function updateBuilding(Request $r)
    {
        $b = App\Building::where('id', $r->get('id'));

        $b->buildingName = $r->get('buidlingName');
        $b->city = $r->get('city');
        $b->street = $r->get('street');
        $b->streetNo = $r->get('streetNo');

        $b->save();

    }

    public function deleteBuilding(Request $r)
    {
        $b = App\Building::where('id', $r->get('id'));

        $b->delete();
    }

}
