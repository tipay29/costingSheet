<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CostingSheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CostingSheetApiController extends Controller
{

    public function __construct()
    {

    }

    public function index()
    {
        return ['name'=>'warren','age'=>16];
    }


    public function store()
    {
//        dd(request()->costing_total_fob_header . request()->costing_material_cost_fob);

        $costing_sheet = $this->insertCostingSheet();

//        $categories = ['fabric','trim','zipper','embelishment','label','thread',
//            'package','finish','export','testing','other','labor'];

        $categories = ['fabric'];

        for($x = 0;$x < count($categories);$x++){
            $row_names = 'costing_' . $categories[0] . '_row_names';

            $this->insertCategories(request()->$row_names);
        }



        return response()->json($costing_sheet,200);
    }


    public function show(CostingSheet $costingSheet)
    {
        //
    }


    public function update(Request $request, CostingSheet $costingSheet)
    {
        //
    }


    public function destroy(CostingSheet $costingSheet)
    {
        //
    }

    private function insertCategories($categories_rows){
        $rows = explode("-",$categories_rows);
        $rows_start = intval($rows[0]);
        $rows_end = intval($rows[1]);

//        for($y = $rows_start;$y <= $rows_end;$y++){
//            $y++; $y--;
//        }

    }


    private function insertCostingSheet()
    {
        $data = [
            'cost_customer_name' => request()->costing_customer_name,
            'cost_brand' => request()->costing_brand,
            'cost_season' =>  request()->costing_season,
            'cost_product_category' =>  request()->costing_product_category,
            'cost_product_category_one' =>  request()->costing_product_category_one,
            'cost_product_category_two' =>  request()->costing_product_category_two,
            'cost_division' =>  request()->costing_division,
            'cost_special_cons' =>  request()->costing_special_construction,
            'cost_gender' =>  request()->costing_gender,
            'cost_age_group' =>  request()->costing_gender_age_group,
            'cost_costing_size' =>  request()->costing_size,
            'cost_style' =>  request()->costing_style,
            'cost_style_name' =>  request()->costing_style_name,
            'cost_color' =>  request()->costing_color,
            'cost_color_name' =>  request()->costing_color_name,
            'cost_no_of_color' =>  request()->costing_no_of_color,
            'cost_tp_code' =>  request()->costing_tp_code,
            'cost_date' =>  request()->costing_date,
            'cost_costing_stage' =>  request()->costing_stage,
            'cost_status' =>  request()->costing_status,
            'cost_currency' =>  request()->costing_currency,
            'cost_target_fob' =>  request()->costing_target_fob,
            'cost_total_fob_cm' =>  request()->costing_total_fob_cm,
            'cost_total_fob' =>  request()->costing_total_fob_header,
            'cost_material_fob' =>  request()->costing_material_cost_fob,
            'cost_lop_fob' =>  request()->costing_lop_fob,
            'cost_vendor' =>  request()->costing_vendor,
            'cost_manufacturer_one' =>  request()->costing_manufacturer_one,
            'cost_manufacturer_two' => request()->costing_manufacturer_two ,
            'cost_coo' =>  request()->costing_coo,
            'cost_shipping_port' =>  request()->costing_costing_port,
            'cost_forecast_qty' =>  request()->costing_forecast_qty,
            'cost_moq_style' =>  request()->costing_moq_style,
            'cost_mcq_color' =>  request()->costing_mcq_color,
            'cost_incoterms' =>  request()->costing_inco_terms,
            'cost_payment_terms' =>  request()->costing_payment_terms,
            'cost_production_lead_time' =>  request()->costing_production_lead_time,
            'cost_fabric_row_names' =>  request()->costing_fabric_row_names,
            'cost_trim_row_names' =>  request()->costing_trim_row_names,
            'cost_zipper_row_names' =>  request()->costing_zipper_row_names,
            'cost_embelishment_row_names' =>  request()->costing_embelishment_row_names,
            'cost_label_row_names' =>  request()->costing_label_row_names,
            'cost_thread_row_names' =>  request()->costing_thread_row_names,
            'cost_package_row_names' =>  request()->costing_package_row_names,
            'cost_finish_row_names' =>  request()->costing_finish_row_names,
            'cost_export_row_names' =>  request()->costing_export_row_names,
            'cost_testing_row_names' =>  request()->costing_testing_row_names,
            'cost_other_row_names' =>  request()->costing_other_row_names,
            'cost_labor_row_names' =>  request()->costing_labor_row_names,
            'user_id' => request()->user_id,
        ];

        return CostingSheet::create($data);
    }
}
