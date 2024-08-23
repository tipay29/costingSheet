<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostMoqsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_moqs', function (Blueprint $table) {
            $table->id();
            $table->string('cost_qty_pcs_1')->nullable();
            $table->string('cost_qty_pcs_2')->nullable();
            $table->string('cost_qty_pcs_3')->nullable();
            $table->string('cost_qty_pcs_4')->nullable();
            $table->string('cost_qty_pcs_5')->nullable();
            $table->string('cost_qty_pcs_6')->nullable();
            $table->double('cost_upcharge_1')->nullable();
            $table->double('cost_upcharge_2')->nullable();
            $table->double('cost_upcharge_3')->nullable();
            $table->double('cost_upcharge_4')->nullable();
            $table->double('cost_upcharge_5')->nullable();
            $table->double('cost_upcharge_6')->nullable();
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
        Schema::dropIfExists('cost_moqs');
    }
}
