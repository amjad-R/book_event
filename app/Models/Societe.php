<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Societe extends Model
{
    /** @use HasFactory<\Database\Factories\SocieteFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone_number',
        'website',
        'description',
        'services_offered',
        'event_types',
        'min_participants',
        'max_participants',
        'custom_events',
        'payment_methods',
        'free_consultation'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function events(){
        return $this->hasMany(Event::class);
    }
}
