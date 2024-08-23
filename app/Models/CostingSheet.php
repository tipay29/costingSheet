<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CostingSheet extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function cost_fabrics(){
        return $this->hasMany(CostFabric::class);
    }
    public function cost_trims(){
        return $this->hasMany(CostTrim::class);
    }
    public function cost_zippers(){
        return $this->hasMany(CostZipper::class);
    }
    public function cost_embelishments(){
        return $this->hasMany(CostEmbelishment::class);
    }
    public function cost_labels(){
        return $this->hasMany(CostLabel::class);
    }
    public function cost_threads(){
        return $this->hasMany(CostThread::class);
    }
    public function cost_packages(){
        return $this->hasMany(CostPackage::class);
    }
    public function cost_finishes(){
        return $this->hasMany(CostFinish::class);
    }
    public function cost_exports(){
        return $this->hasMany(CostExport::class);
    }
    public function cost_testings(){
        return $this->hasMany(CostTesting::class);
    }
    public function cost_others(){
        return $this->hasMany(CostOther::class);
    }
    public function cost_labors(){
        return $this->hasMany(CostLabor::class);
    }
    public function cost_sketches(){
        return $this->hasMany(CostSketch::class);
    }
    public function cost_remarks(){
        return $this->hasMany(CostRemarks::class);
    }
    public function cost_labor_details(){
        return $this->hasMany(CostLaborDetail::class);
    }
    public function cost_moqs(){
        return $this->hasMany(CostMoq::class);
    }
}
