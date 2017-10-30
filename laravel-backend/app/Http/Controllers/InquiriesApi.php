<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;

class InquiriesApi extends Controller
{
    public function listOfInquiries(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();

        if( $u != null) {


            if($u->type == 'tenet') {


                $in = App\Inquiries::where('apartment_id', $r->post('app_id'))->where('user_id', $u->id)->get();

                foreach ($in as $i) {

                    $i->date = date_format($i->created_at,'Y-m-d H:i:s');

                    if( $i->sender == 'landlord') {

                        $i->folderId = 1;

                        $i->sender = $i->building->user->firstName . " "  .$i->building->user->lastName;
                        $i->senderMail = $i->building->user->username;


                        unset($i->building);
                    }
                    else {

                        $i->folderId = 2;
                        // i am not sure
                        $i->sender = $i->user->firstName . " "  .$i->user->lastName;
                        $i->senderMail = $i->user->username;

                        unset($i->user);
                    }

                }
            }
            else {


                $in = App\Inquiries::where('building_id', $r->post('building_id'))->get();

                foreach ($in as $i) {

                    $i->date = date_format($i->created_at,'Y-m-d H:i:s');

                    if( $i->sender == 'tenet') {
                        $i->folderId = 1;

                        $i->sender = $i->user->firstName . " "  .$i->user->lastName;
                        $i->senderMail = $i->user->username;

                        unset($i->user);


                    }

                    else {

                        $i->folderId = 2;

                        $i->sender = $i->building->user->firstName . " "  .$i->building->user->lastName;
                        $i->senderMail = $i->user->username;

                        unset($i->building);

                    }

                    unset($i->user);
                }

            }


            return [ 'i' => $in, 'message' => "OK"];

        }
        else {
            return [ 'message' => 'error'];
        }
    }




    public function createInquiries(Request $r)
    {
        $u = App\User::where('jwt', $r->post('jwt'))->first();
        if( $u != null) {
            $a = App\Apartment::find($r->post('apartment_id'))->first();
            if($u->type == 'tenet' && $a != null) {

                $in = new App\Inquiries();
                $in->apartment_id = $a->id;
                $in->building_id = $a->building_id;
                $in->user_id = $u->id;
                $in->subject = $r->post('subject');
                $in->body = $r->post('body');
                $in->sender = 'tenet';
                $in->starred = false;
                $in->unread = true;
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
