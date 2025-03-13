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
        'event_date_time',
        'location',
        'images',
        'expected_participants',
        'budget',
        'services_required',
        'website_link',
        'event_types',
        'min_participants',
        'max_participants',
        'custom_events',
        'payment_methods',
        'free_consultation',
        'social_media_links'
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
