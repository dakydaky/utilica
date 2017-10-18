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


}
