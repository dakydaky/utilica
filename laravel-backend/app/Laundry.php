<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laundry extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function building()
    {
        return $this->belongsTo('App\Building');
    }
}
