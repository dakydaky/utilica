<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    public function user() //owner -landlord
    {
        return $this->belongsTo('App\User');
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

    public function broadcast()
    {
     return $this->hasMany('App\Broadcast');
    }

    public function apartment()
    {
        return $this->hasMany('App\Apartment');
    }



}
