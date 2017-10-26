<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App;
use function MongoDB\BSON\toJSON;

class UserApi extends Controller
{
    public function registerUser(Request $r)
    {

        try{
            $user = new App\User();
            $user->firstname = $r->get('firstName');
            $user->lastname = $r->get('lastName');
            $user->password = Hash::make($r->post('password'));
            $user->username = $r->get('username');
            $user->type = $r->get('type');
            $user->email = $r->get('email');
            $user->personalNumber = $r->get('personalNumber');

            $user->save();

            return [ 'message' => 'OK'];
        }
        catch (Expetion $exception)
        {
            return [ 'message' => 'BAD'];
        }





    }

    public function loginUser(Request $r)
    {
        $e = $r->post('email');
        $u = App\User::where('email', $e)->first();
        if($u != null)
        {
            $pass = $u->password;

            if(Hash::check($r->post('password'), $pass)) {
            $u->jwt = bcrypt($u->randomString(6));
            $u->save();
            unset($u->id);
            unset($u->password);
            return json_encode($u);
            }

        } else
        {
            $u = App\User::where('username', $e)->first();

            if( $u != null) {

                $pass = $u->password;

                if (Hash::check($r->post('password'), $pass)) {
                    $u->jwt = bcrypt($u->randomString(6));
                    $u->save();
                    unset($u->id);
                    unset($u->password);
                    return json_encode($u);
                }
            }
        }

        return [ 'message' => 'error'];


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
