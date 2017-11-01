<?php

namespace App\Http\Controllers;
use App;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;

class LaudryApi extends Controller
{
    public function laundrySchedule(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if( $u != null) {

            $d = new DateTime();
            date_date_set( $d ,$r->post('year'),  $r->post('month') , $r->post('day'));

            $l = App\Laundry::where('date', $d->format('Y-m-d'))->
            where('building_id', $r->post('building_id'))->get();



            return [ 'laundry' => $l];
        }
        else
        {
            return [ 'message' => 'Bad'];
        }
    }

    public function makeAppointment(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();
        if( $u != null && $u->type == 'tenet')
        {
            $d = new DateTime();
            date_date_set( $d ,$r->post('year'),  $r->post('month') , $r->post('day'));

            $lo = App\Laundry::where('date', $d->format('Y-m-d'))->where('timeInterval', $r->post('time'))->first();

            if( $lo == null) {
                $l = new App\Laundry();

                $l->user_id = $u->id;
                $l->timeInterval = $r->post('time');
                $l->date = $d;
                $b = App\Building::where('id', $r->post('building_id'))->first();
                $l->building_id = $b->id;


                $l->save();

                return [ 'message'=> 'OK'];
            }
            else
            {
                return [ 'message' => 'Already made appointment.'];
            }


        }
        else
        {
            return [ 'message' => 'error'];
        }
    }


    public function updateAppointment(Request $r)
    {
        // update
    }

    public function deleteAppointment(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt)->first();

        if( $u != null && $u->type == 'tenet') {

          $l = App\Laundry::where('id', $r->post('id'))->first();

          $l->delete();

          return [ 'message' => 'OK'];
        }
        else {
            return [ 'message' => "error"];
        }
    }
}
