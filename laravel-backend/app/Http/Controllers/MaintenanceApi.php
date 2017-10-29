<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class MaintenanceApi extends Controller
{
    public function listOfMaintenance(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null) {
            $b = App\Building::where('id', $r->post('building_id'))->get();
            return ['main' => $b->maintenance ];
        }
        else {
            return [ 'message' => 'error'];
        }
    }

    public function reportMaintenance(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null && $u->type == 'tenet') {
            $m = new App\Maintenance();

            $m->buidling_id = App\Building::where('id', $r->post('building_id'))->first()->id;

            $m->user_id = $u->id;

            $m->text = $r->post('text');

            $m->progress = 'new';

            $m->save();


            return [ 'message' => 'OK' ];
        }
        else {
            return [ 'message' => 'error'];
        }
    }


    public function updateMaintenance(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null && $u->type == 'landlord') {
            $m = App\Maintenance::where('id', $r->post('main_id'))->first();

            $m->text = $r->post('text');
            $m->progress = $r->post('progress');

            $m->save();


            return [ 'message' => 'OK' ];
        }
        else {
            return [ 'message' => 'error'];
        }
    }

    public function deleteMaintenance(Request $r)
    {
        // delete
    }
}
