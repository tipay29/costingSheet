<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostExportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_exports', function (Blueprint $table) {
            $table->id();
            $table->integer('cost_item_no')->nullable();
            $table->string('cost_component')->nullable();
            $table->string('cost_material_id')->nullable();
            $table->string('cost_category_data')->nullable();
            $table->string('cost_nominated')->nullable();
            $table->string('cost_coo')->nullable();
            $table->string('cost_supplier_ref')->nullable();
            $table->text('cost_description')->nullable();
            $table->string('cost_location')->nullable();
            $table->string('cost_mill_supplier')->nullable();
            $table->string('cost_uom')->nullable();
            $table->string('cost_width')->nullable();
            $table->double('cost_usage')->nullable();
            $table->double('cost_wastage')->nullable();
            $table->double('cost_gross_yield')->nullable();
            $table->double('cost_unit_cost')->nullable();
            $table->double('cost_handling')->nullable();
            $table->double('cost_total')->nullable();
            $table->double('cost_comment')->nullable();

            $table->string('cost_size_1')->nullable();
            $table->string('cost_size_2')->nullable();
            $table->string('cost_size_3')->nullable();
            $table->string('cost_size_4')->nullable();
            $table->string('cost_size_5')->nullable();
            $table->string('cost_size_6')->nullable();
            $table->string('cost_size_7')->nullable();
            $table->string('cost_size_8')->nullable();
            $table->string('cost_size_9')->nullable();
            $table->string('cost_size_10')->nullable();
            $table->string('cost_size_11')->nullable();
            $table->string('cost_size_12')->nullable();
            $table->string('cost_size_13')->nullable();
            $table->string('cost_size_14')->nullable();
            $table->string('cost_size_15')->nullable();

            $table->string('cost_color_1')->nullable();
            $table->string('cost_color_2')->nullable();
            $table->string('cost_color_3')->nullable();
            $table->string('cost_color_4')->nullable();
            $table->string('cost_color_5')->nullable();

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
        Schema::dropIfExists('cost_exports');
    }
}
