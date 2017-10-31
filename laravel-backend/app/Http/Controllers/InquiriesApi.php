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

                        $i->sender = $i->building->user->email;
                        $i->senderMail = $i->building->user->username;


                        unset($i->building);
                    }
                    else {

                        $i->folderId = 2;

//                        $i->sender = $i->user->email;
//                        $i->senderMail = $i->user->username;
//
//                        unset($i->user);

                        $i->sender = $i->building->user->email;
                        $i->senderMail = $i->building->user->username;


                        unset($i->building);
                    }

                }
            }
            else {


                $in = App\Inquiries::where('building_id', $r->post('building_id'))->get();

                foreach ($in as $i) {

                    $i->date = date_format($i->created_at,'Y-m-d H:i:s');

                    if( $i->sender == 'tenet') {
                        $i->folderId = 1;

                        $i->sender = $i->user->email;
                        $i->senderMail = $i->user->username;

                        unset($i->user);


                    }

                    else {

                        $i->folderId = 2;
//
//                        $i->sender = $i->building->user->email;
//                        $i->senderMail = $i->user->username;
//
//                        unset($i->building);

                        $i->sender = $i->user->email;
                        $i->senderMail = $i->user->username;

                        unset($i->user);

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
        if( $u != null ) {
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


    public function replyOnInquiries(Request $r) {


        $u = App\User::where('jwt', $r->post('jwt'))->first();

        if( $u != null) {

            // $b = App\Building::find($r->post('b_id'))->first();
            $m = App\Inquiries::find($r->post('message_id'))->first();


            if($m != null) {

                $in = new App\Inquiries();
                $in->apartment_id = $m->apartment_id;
                $in->building_id = $m->building_id;
                $in->user_id = $m->user->id;
                $in->subject = $r->post('subject');
                $in->body = $r->post('body');
                $in->sender = $u->type;
                $in->starred = false;
                $in->unread = true;
                $in->save();

                return ['message' => 'OK'];
            }
            else {
                return ['message' => 'error'];
            }

        } else {

            return ['message' => 'error'];
        }
    }

    public function readen(Request $r) {
        $u = App\User::where('jwt', $r->post('jwt'))->first();

        if( $u != null) {
            $m = App\Inquiries::where('id', $r->post('m_id'))->first();
            if($m != null) {
                $m->unread = 0;
                $m->save();
                return [ 'message' => 'OK'];
            } else {

                return [ 'message' => 'error'];
            }
        } else {

            return [ 'message' => 'error'];
        }

    }

    public function changeStarStatus(Request $r) {
        $u = App\User::where('jwt', $r->post('jwt'))->first();

        if( $u != null) {
            $m = App\Inquiries::where('id',$r->post('m_id'))->first();
            if($m != null) {

                if($m->starred)
                    $m->starred = 0;
                else
                    $m->starred = 1;

                $m->save();

                return [ 'message' => 'OK'];
            } else {
                return [ 'message' => 'error'];
            }
        } else {
            return ['message' => 'error'];
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
