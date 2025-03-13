<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annonce extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'full_name',
        'email',
        'phone_number',
        'event_description',
        'event_type',
        'event_date_time',
        'event_location',
        'expected_participants',
        'budget',
        'services_required',
        'website',
        'social_media_links'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
