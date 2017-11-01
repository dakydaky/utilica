<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inquiries extends Model
{
    public function user() //tenet
    {
        return $this->belongsTo('App\User');
    }

    public function building()
    {
        return $this->belongsTo('App\Building');
    }

    public function apartment() {
        return $this->belongsTo('App\Apartment');
    }

}
