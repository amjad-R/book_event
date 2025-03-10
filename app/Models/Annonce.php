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
        'event_name',
        'event_description',
        'event_type',
        'event_date_time',
        'event_location',
        'expected_attendees',
        'budget',
        'needs_help',
        'services_required',
        'logo_image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
