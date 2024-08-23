<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_remarks', function (Blueprint $table) {
            $table->id();
            $table->text('cost_remarks_1')->nullable();
            $table->text('cost_remarks_2')->nullable();
            $table->text('cost_remarks_3')->nullable();
            $table->text('cost_remarks_4')->nullable();
            $table->text('cost_remarks_5')->nullable();
            $table->text('cost_remarks_6')->nullable();
            $table->text('cost_remarks_7')->nullable();
            $table->text('cost_remarks_8')->nullable();
            $table->text('cost_remarks_9')->nullable();
            $table->text('cost_remarks_10')->nullable();
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
        Schema::dropIfExists('cost_remarks');
    }
}
