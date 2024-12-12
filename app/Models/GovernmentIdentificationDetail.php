<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GovernmentIdentificationDetail extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'government_identification_details';

    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'epf',
        'tax_file',
        'tin',
        'nic',
        'driving_license',
        'passport_number',
    ];
}
