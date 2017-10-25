<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function buildings()
    {
        return $this->hasMany('App\Building');
    }

    public function apartment()
    {
        return $this->hasOne('App\Apartment');
    }

    public function maintenance()
    {
        return $this->hasMany('App\Maintenance');
    }

    public function inquiries()
    {
        return $this->hasMany('App\Inquiries');
    }

    public function laundry()
    {
        return $this->hasMany('App\Laundry');
    }


    function randomString($length = 6) {
        $str = "";
        $characters = array_merge(range('A','Z'), range('a','z'), range('0','9'));
        $max = count($characters) - 1;
        for ($i = 0; $i < $length; $i++) {
            $rand = mt_rand(0, $max);
            $str .= $characters[$rand];
        }
        return $str;
    }

}
