<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'title',
        'description',
        'email',
        'phone_number',
        'services_offered',
        'date_time',
        'location',
        'image',
        'expected_attendees',
        'budget',
        'services_required',
        'website_link',
        'event_types',
        'min_participants',
        'max_participants',
        'custom_events',
        'payment_methods',
        'free_consultation'
    ];



    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
