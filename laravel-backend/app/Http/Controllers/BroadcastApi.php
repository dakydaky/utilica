<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class BroadcastApi extends Controller
{
    public function listOfBroadcasts(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt);
        if( $u != null ) {
            $b = App\Building::where('id', $r->post('building_id'))->first();

            $broadcast = $b->broadcast;

            return [ 'broadcast' => $broadcast,
                'user' => $b->user->username];
        }
        else
            return [ 'message' => 'Some error.'];
    }

    public function createBroadcast(Request $r)
    {
        $jwt = $r->post('jwt');
        $u = App\User::where('jwt', $jwt);
        if( $u != null ) {
            $b = App\Building::where('id', $r->post('building_id'))->first();
            $broadcast = new App\Broadcast();
            $broadcast->text = $r->post('text');
            $broadcast->title = $r->post('title');
            $broadcast->building_id = $b->id;
            $broadcast->save();

            return [ 'message' => 'Broadcast is sent.'];
        }
    else
            return [ 'message' => 'Some error.'];
    }


    public function updateBroadcast(Request $r)
    {
        // update
    }

    public function deleteBroadcast(Request $r)
    {
        // delete
    }
}
