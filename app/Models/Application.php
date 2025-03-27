<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{

    use HasFactory;

    protected $fillable = [
        'annonce_id',
        'societe_id',
        'email',
        'location',
        'price',
        'message',
    ];

    public function annonce()
    {
        return $this->belongsTo(Annonce::class);
    }

    public function societe()
    {
        return $this->belongsTo(User::class, 'societe_id');
    }
}
