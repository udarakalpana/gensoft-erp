<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmegencyContactPersonDetail extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'emegerncy_person_contact_details';

    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'name',
        'address',
        'emegerncy_person_telephone_number',
        'emegerncy_person_mobile_number',
        'emegerncy_person_email_address',
        'relationship',
    ];
}
