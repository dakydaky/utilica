<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Broadcast extends Model
{
    public function building()
    {
        return $this->belongsTo('App\Building');
    }
}
