<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostLaborDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_labor_details', function (Blueprint $table) {
            $table->id();
            $table->double('cost_smv_1')->nullable();
            $table->double('cost_output_per_day_1')->nullable();
            $table->double('cost_hours_1')->nullable();
            $table->double('cost_hours_2')->nullable();
            $table->double('cost_days_1')->nullable();
            $table->double('cost_days_2')->nullable();
            $table->double('cost_operators_1')->nullable();
            $table->double('cost_operators_2')->nullable();
            $table->double('cost_monthly_wage_1')->nullable();
            $table->double('cost_monthly_wage_2')->nullable();
            $table->unsignedInteger('costing_sheet_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cost_labor_details');
    }
}
