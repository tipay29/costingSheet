<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostingSheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('costing_sheets', function (Blueprint $table) {
            $table->id();
            $table->string('cost_customer_name')->nullable();
            $table->string('cost_brand')->nullable();
            $table->string('cost_season')->nullable();
            $table->string('cost_product_category')->nullable();
            $table->string('cost_product_category_one')->nullable();
            $table->string('cost_product_category_two')->nullable();
            $table->string('cost_division')->nullable();
            $table->string('cost_version')->nullable();
            $table->string('cost_special_cons')->nullable();
            $table->string('cost_gender')->nullable();
            $table->string('cost_age_group')->nullable();
            $table->string('cost_costing_size')->nullable();
            $table->string('cost_style')->nullable();
            $table->string('cost_style_name')->nullable();
            $table->string('cost_color')->nullable();
            $table->string('cost_color_name')->nullable();
            $table->integer('cost_no_of_color')->nullable();
            $table->string('cost_tp_code')->nullable();
            $table->date('cost_date')->nullable();
            $table->string('cost_costing_stage')->nullable();
            $table->string('cost_status')->nullable();
            $table->string('cost_currency')->nullable();
            $table->double('cost_target_fob')->nullable();
            $table->string('cost_total_fob_cm')->nullable();
            $table->string('cost_vendor')->nullable();
            $table->string('cost_manufacturer_one')->nullable();
            $table->string('cost_manufacturer_two')->nullable();
            $table->string('cost_coo')->nullable();
            $table->string('cost_shipping_port')->nullable();
            $table->bigInteger('cost_forecast_qty')->nullable();
            $table->bigInteger('cost_moq_style')->nullable();
            $table->bigInteger('cost_mcq_color')->nullable();
            $table->string('cost_incoterms')->nullable();
            $table->string('cost_payment_terms')->nullable();
            $table->bigInteger('cost_production_lead_time')->nullable();
            $table->bigInteger('cost_griege_reduced')->nullable();
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
        Schema::dropIfExists('costing_sheets');
    }
}
