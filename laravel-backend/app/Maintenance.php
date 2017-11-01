<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    public function apartment() {
        return $this->belongsTo('App\Apartment');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
