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

            if( $u->type == 'tenet') {
            $a = App\Apartment::find($r->post('ap_id'));
            $m = $a->maintenance;
            } else {
                $b = App\Building::find($r->post('b_id'));
                $m = $b->maintenance;
            }

            foreach ($m as $el) {
                $el->username = $el->user->username;
                $el->apartmantName = $el->apartment-> apartmentName;
                unset($el->user);
            }

            return ['main' => $m ];
        }
        else {
            return [ 'message' => 'error'];
        }
    }

    public function reportMaintenance(Request $r)
    {

        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null && $u->type  == 'tenet') {
            $a = App\Apartment::where('id', $r->post('app_id'))->first();
            if( $a != null){

                $m = new App\Maintenance();

                $m->building_id = $a->building_id;

                $m->apartment_id = $a->id;

                $m->user_id = $u->id;

                $m->text = $r->post('text');

                $m->title = $r->post('title');

                $m->progress = 'new';


                $m->save();


                return [ 'message' => 'OK' ];
            }
            else {
                return [ 'message' => 'error'];
            }

        }
        else {
            return [ 'message' => 'error'];
        }
    }


    public function updateMaintenanceProgress(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null && $u->type == 'landlord') {
            $m = App\Maintenance::where('id', $r->post('m_id'))->first();

            // $m->text = $r->post('text');
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
