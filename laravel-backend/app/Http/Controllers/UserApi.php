<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App;

class UserApi extends Controller
{
    public function registerUser(Request $r)
    {

        try{
            $user = new App\User();
            $user->firstname = $r->get('firstName');
            $user->lastname = $r->get('lastName');
            $user->password = bcrypt($r->get('password'));
            $user->username = $r->get('username');
            $user->type = $r->get('type');
            $user->email = $r->get('email');
            $user->personalNumber = $r->get('personalNumber');

            $user->save();
            // $r->getContent()
//            $a = [];
//            array_add($a,'message', 'OK');

            return [ 'message' => 'OK'];
        }
        catch (Expetion $exception)
        {
            return [ 'message' => 'BAD'];
        }





    }

    public function loginUser(Request $r)
    {
        $email = $r->post('email');
        $password = bcrypt($r->post('password'));
        // bcript for password

        $u = App\User::where('email', $email)->first();

        if(isset($u->password)) {
            $u->jwt = bcrypt($u->randomString(6));
            $u->save();
            unset($u->id);
            unset($u->password);
            return json_encode($u);
        }

        return json_encode("error");


    }


    public function getUser(Request $r)
    {
        $id = $r->get('id');
        $u = App\User::find($id);
        return json_encode($u);

    }



    public function updateUser(Request $r)
    {
        $user = App\User::where('id', $r->get('id'));
        $user->email = $r->get('email');
        $user->password = $r->get('password');
        $user->firstname = $r->get('firstname');
        $user->lastname = $r->get('lastname');
        $user->personalNumber = $r->get('personalNumber');

        $user->save();
    }

    public function deleteUser(Request $r)
    {
        $user = App\User::where('id', $r->get('id'));
        $user->delete();
    }
}
