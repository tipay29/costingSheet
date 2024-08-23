<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CostMoq extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function costing_sheet(){
        return $this->belongsTo(CostingSheet::class);
    }
}
