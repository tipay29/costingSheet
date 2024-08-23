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
            $table->double('cost_total_fob')->nullable();
            $table->double('cost_material_fob')->nullable();
            $table->double('cost_lop_fob')->nullable();
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
            $table->string('cost_production_lead_time')->nullable();
            $table->string('cost_griege_reduced')->nullable();
            $table->string('cost_fabric_row_names')->nullable();
            $table->string('cost_trim_row_names')->nullable();
            $table->string('cost_zipper_row_names')->nullable();
            $table->string('cost_embelishment_row_names')->nullable();
            $table->string('cost_label_row_names')->nullable();
            $table->string('cost_thread_row_names')->nullable();
            $table->string('cost_package_row_names')->nullable();
            $table->string('cost_finish_row_names')->nullable();
            $table->string('cost_export_row_names')->nullable();
            $table->string('cost_testing_row_names')->nullable();
            $table->string('cost_other_row_names')->nullable();
            $table->string('cost_labor_row_names')->nullable();
            $table->double('cost_fabric_total_fob')->nullable();
            $table->double('cost_trim_total_fob')->nullable();
            $table->double('cost_zipper_total_fob')->nullable();
            $table->double('cost_embelishment_total_fob')->nullable();
            $table->double('cost_label_total_fob')->nullable();
            $table->double('cost_thread_total_fob')->nullable();
            $table->double('cost_package_total_fob')->nullable();
            $table->double('cost_finish_total_fob')->nullable();
            $table->double('cost_export_total_fob')->nullable();
            $table->double('cost_testing_total_fob')->nullable();
            $table->double('cost_other_total_fob')->nullable();
            $table->double('cost_labor_total_fob')->nullable();
            $table->string('cost_size_head_names')->nullable();
            $table->string('cost_color_head_names')->nullable();
            $table->unsignedInteger('user_id');
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
