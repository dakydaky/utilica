<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class InquiriesApi extends Controller
{
    public function listOfInquiries(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'));
        if( $u != null) {

            if($u->type == 'tenet') {
                $in = App\Inquiries::where('user_id', $u->id)->get();
            }
            else {
                $in = App\Inquiries::where('building_id', $r->post('building_id'))->get();
            }
            return [ 'i' => $in, 'message' => "OK"];

        }
        else {
            return [ 'message' => 'error'];
        }
    }

    public function createInquiries(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'));
        if( $u != null) {
            if($u->type == 'tenet') {
                $in = new App\Inquiries();
                $in->building_id = $r->post('building_id');
                $in->user_id = $u->id;
                $in->text = $r->post('text');
                $in->save();

                return ['message' => 'OK'];
            } else {
                    return [ 'message' => 'error'];
            }
        }
        else {
            return [ 'message' => 'error'];
        }
    }


    public function updateInquiries(Request $r)
    {
        // update
    }

    public function deleteInquiries(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'));
        if( $u != null && $u->type == 'tenet') {
                $in = App\Inquiries::where('id', $r->post('i_id'));
                $in->delete();

                return ['message' => 'OK'];

        }
        else {
            return [ 'message' => 'error'];
        }
    }
}
