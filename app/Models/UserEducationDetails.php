<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEducationDetails extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'user_education_details';

    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'category1',
        'school1',
        'category2',
        'school2',
    ];
}
