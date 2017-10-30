<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    public function user() //tenet
    {
        return $this->belongsTo('App\User');
    }

    public function building()
    {
        return $this->belongsTo('App\Apartment');
    }

    public function maintenance() {
        return $this->hasMany('App\Maintenance');
    }

    public function inquiries() {
        return $this->hasMany('App\Inquiries');
    }



}
