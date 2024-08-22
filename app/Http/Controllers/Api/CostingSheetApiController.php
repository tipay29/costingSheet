<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CostFabric;
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

            $this->insertCategories(request()->$row_names,$costing_sheet->id);
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

    private function insertCategories($categories_rows,$costing_sheet_id){
        $rows = explode("-",$categories_rows);
        $rows_start = intval($rows[0]);
        $rows_end = intval($rows[1]);



        $z = 1;
        for($y = $rows_start;$y <= $rows_end;$y++){

            $component = 'costing_fabric_component' . $z;
            $material_id = 'costing_fabric_material_id' . $z;
            $categories = 'costing_fabric_categories' . $z;
            $nominated = 'costing_fabric_nominated' . $z;
            $coo = 'costing_fabric_coo' . $z;
            $supplier_ref = 'costing_fabric_supplier_ref' . $z;
            $description = 'costing_fabric_description' . $z;
            $location = 'costing_fabric_location' . $z;
            $mill_supplier = 'costing_fabric_mill_supplier' . $z;
            $uom = 'costing_fabric_uom' . $z;
            $wedth = 'costing_fabric_wedth' . $z;
            $usage = 'costing_fabric_usage' . $z;
            $wastage = 'costing_fabric_wastage' . $z;
            $gross_yield = 'costing_fabric_gross_yield' . $z;
            $unit_cost = 'costing_fabric_unit_cost' . $z;
            $handling = 'costing_fabric_handling' . $z;
            $total_cost = 'costing_fabric_total_cost' . $z;
            $comment = 'costing_fabric_comment' . $z;
            $size_1 = 'costing_fabric_size_1_' . $z;
            $size_2 = 'costing_fabric_size_2_' . $z;
            $size_3 = 'costing_fabric_size_3_' . $z;
            $size_4 = 'costing_fabric_size_4_' . $z;
            $size_5 = 'costing_fabric_size_5_' . $z;
            $size_6 = 'costing_fabric_size_6_' . $z;
            $size_7 = 'costing_fabric_size_7_' . $z;
            $size_8 = 'costing_fabric_size_8_' . $z;
            $size_9 = 'costing_fabric_size_9_' . $z;
            $size_10 = 'costing_fabric_size_10_' . $z;
            $size_11 = 'costing_fabric_size_11_' . $z;
            $size_12 = 'costing_fabric_size_12_' . $z;
            $size_13 = 'costing_fabric_size_13_' . $z;
            $size_14 = 'costing_fabric_size_14_' . $z;
            $size_15 = 'costing_fabric_size_15_' . $z;
            $color_1 = 'costing_fabric_color_1_' . $z;
            $color_2 = 'costing_fabric_color_2_' . $z;
            $color_3 = 'costing_fabric_color_3_' . $z;
            $color_4 = 'costing_fabric_color_4_' . $z;
            $color_5 = 'costing_fabric_color_5_' . $z;

            $data = [
                'cost_item_no' => $y,
                'cost_component' => request()->$component,
//                'cost_material_id' =>  request()->costing_,
//                'cost_category_data' =>  request()->costing_,
//                'cost_nominated' =>  request()->costing_,
//                'cost_coo' =>  request()->costing_,
//                'cost_supplier_ref' =>  request()->costing_,
//                'cost_description' =>  request()->costing_,
//                'cost_location' =>  request()->costing_,
//                'cost_mill_supplier' =>  request()->costing_,
//                'cost_uom' =>  request()->costing_,
//                'cost_width' =>  request()->costing_,
//                'cost_usage' =>  request()->costing_,
//                'cost_wastage' =>  request()->costing_,
//                'cost_gross_yield' =>  request()->costing_,
//                'cost_unit_cost' =>  request()->costing_,
//                'cost_handling' =>  request()->costing_,
//                'cost_total' =>  request()->costing_,
//                'cost_comment' =>  request()->costing_,
//                'cost_size_1' =>  request()->costing_,
//                'cost_size_2' =>  request()->costing_,
//                'cost_size_3' =>  request()->costing_,
//                'cost_size_4' =>  request()->costing_,
//                'cost_size_5' =>  request()->costing_,
//                'cost_size_6' =>  request()->costing_,
//                'cost_size_7' =>  request()->costing_,
//                'cost_size_8' =>  request()->costing_,
//                'cost_size_9' =>  request()->costing_,
//                'cost_size_10' =>  request()->costing_,
//                'cost_size_11' =>  request()->costing_,
//                'cost_size_12' =>  request()->costing_,
//                'cost_size_13' =>  request()->costing_,
//                'cost_size_14' =>  request()->costing_,
//                'cost_size_15' =>  request()->costing_,
//                'cost_color_1' =>  request()->costing_,
//                'cost_color_2' =>  request()->costing_,
//                'cost_color_3' =>  request()->costing_,
//                'cost_color_4' =>  request()->costing_,
//                'cost_color_5' =>  request()->costing_,
                'costing_sheet_id' =>  $costing_sheet_id,
            ];

            CostFabric::create($data);
            $z++;

        }

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
            'cost_size_head_names' =>  request()->costing_size_head_names,
            'cost_color_head_names' =>  request()->costing_color_head_names,
            'user_id' => request()->user_id,
        ];

        return CostingSheet::create($data);
    }
}
