<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'societe_id',
        'title',
        'description',
        'type',
        'date_time',
        'location',
        'image',
        'expected_attendees',
        'budget',
        'services_required',
        'website_link'
    ];

    public function societe()
    {
        return $this->belongsTo(Societe::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

}
