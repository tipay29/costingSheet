<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostSketchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_sketches', function (Blueprint $table) {
            $table->id();
            $table->string('cost_front_sketch')->nullable();
            $table->string('cost_back_sketch')->nullable();
            $table->string('cost_left_sketch')->nullable();
            $table->string('cost_right_sketch')->nullable();
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
        Schema::dropIfExists('cost_sketches');
    }
}
