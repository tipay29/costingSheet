<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\CostEmbelishment;
use App\Models\CostExport;
use App\Models\CostFabric;
use App\Models\CostFinish;
use App\Models\CostingSheet;
use App\Models\CostLabel;
use App\Models\CostLabor;
use App\Models\CostLaborDetail;
use App\Models\CostMoq;
use App\Models\CostOther;
use App\Models\CostPackage;
use App\Models\CostRemarks;
use App\Models\CostSketch;
use App\Models\CostTesting;
use App\Models\CostThread;
use App\Models\CostTrim;
use App\Models\CostZipper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


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

        //insert costing sheets details
        $costing_sheet = $this->insertCostingSheet();

        //insert categories
        $categories = ['fabric','trim','zipper','embelishment','label','thread',
            'package','finish','export','testing','other','labor'];
        for($x = 0;$x < count($categories);$x++){
            $row_names = 'costing_' . $categories[$x] . '_row_names';
            $this->insertCategories(request()->$row_names,$costing_sheet->id,$categories[$x]);
        }

        //insert costing sheets extra details
        $this->insertSketches($costing_sheet->id);
        $this->insertRemarks($costing_sheet->id);
        $this->insertLaborCosts($costing_sheet->id);
        $this->insertMoqs($costing_sheet->id);


        return response()->json($costing_sheet,200);
    }

    public function update(CostingSheet $costingSheet)
    {
        //delete the existing data
        $costingSheet->cost_fabrics()->delete();
        $costingSheet->cost_trims()->delete();
        $costingSheet->cost_zippers()->delete();
        $costingSheet->cost_embelishments()->delete();
        $costingSheet->cost_labels()->delete();
        $costingSheet->cost_threads()->delete();
        $costingSheet->cost_packages()->delete();
        $costingSheet->cost_finishes()->delete();
        $costingSheet->cost_exports()->delete();
        $costingSheet->cost_testings()->delete();
        $costingSheet->cost_others()->delete();
        $costingSheet->cost_labors()->delete();
        $costingSheet->cost_remarks()->delete();
        $costingSheet->cost_labor_details()->delete();
        $costingSheet->cost_moqs()->delete();

        //update basic details
        $this->updateCostingSheet($costingSheet);
        //insert categories again
        $categories = ['fabric','trim','zipper','embelishment','label','thread',
            'package','finish','export','testing','other','labor'];
        for($x = 0;$x < count($categories);$x++){
            $row_names = 'costing_' . $categories[$x] . '_row_names';
            $this->insertCategories(request()->$row_names,$costingSheet->id,$categories[$x]);
        }

        //insert costing sheets extra details
        $this->insertRemarks($costingSheet->id);
        $this->insertLaborCosts($costingSheet->id);
        $this->insertMoqs($costingSheet->id);

//        dd(count($costingSheet->cost_sketches));

        if(count($costingSheet->cost_sketches) === 0 ){

            $this->insertSketches($costingSheet->id);
        }else{
            $this->updateSketches($costingSheet);
        }



        return response()->json($costingSheet,200);
    }

    public function show(CostingSheet $costingSheet)
    {


        $costingSheet->load([
            'cost_fabrics','cost_trims','cost_zippers','cost_embelishments',
            'cost_labels','cost_threads','cost_packages','cost_finishes',
            'cost_exports','cost_testings','cost_others','cost_labors','cost_sketches',
            'cost_remarks','cost_labor_details','cost_moqs',
        ]);

        return response()->json($costingSheet,200);
    }





    public function destroy(CostingSheet $costingSheet)
    {
        //
    }

    private function insertCategories($categories_rows,$costing_sheet_id,$category){
        $rows = explode("-",$categories_rows);
        $rows_start = intval($rows[0]);
        $rows_end = intval($rows[1]);

        $z = 1;
        for($y = $rows_start;$y <= $rows_end;$y++){

            $component = 'costing_'. $category .'_component' . $z;
            $material_id = 'costing_'. $category .'_material_id' . $z;
            $categories = 'costing_'. $category .'_categories' . $z;
            $nominated = 'costing_'. $category .'_nominated' . $z;
            $coo = 'costing_'. $category .'_coo' . $z;
            $supplier_ref = 'costing_'. $category .'_supplier_ref' . $z;
            $description = 'costing_'. $category .'_description' . $z;
            $location = 'costing_'. $category .'_location' . $z;
            $mill_supplier = 'costing_'. $category .'_mill_supplier' . $z;
            $uom = 'costing_'. $category .'_uom' . $z;
            $wedth = 'costing_'. $category .'_wedth' . $z;
            $usage = 'costing_'. $category .'_usage' . $z;
            $wastage = 'costing_'. $category .'_wastage' . $z;
            $gross_yield = 'costing_'. $category .'_gross_yield' . $z;
            $unit_cost = 'costing_'. $category .'_unit_cost' . $z;
            $handling = 'costing_'. $category .'_handling' . $z;
            $total_cost = 'costing_'. $category .'_total_cost' . $z;
            $comment = 'costing_'. $category .'_comment' . $z;
            $size_1 = 'costing_'. $category .'_size_1_' . $z;
            $size_2 = 'costing_'. $category .'_size_2_' . $z;
            $size_3 = 'costing_'. $category .'_size_3_' . $z;
            $size_4 = 'costing_'. $category .'_size_4_' . $z;
            $size_5 = 'costing_'. $category .'_size_5_' . $z;
            $size_6 = 'costing_'. $category .'_size_6_' . $z;
            $size_7 = 'costing_'. $category .'_size_7_' . $z;
            $size_8 = 'costing_'. $category .'_size_8_' . $z;
            $size_9 = 'costing_'. $category .'_size_9_' . $z;
            $size_10 = 'costing_'. $category .'_size_10_' . $z;
            $size_11 = 'costing_'. $category .'_size_11_' . $z;
            $size_12 = 'costing_'. $category .'_size_12_' . $z;
            $size_13 = 'costing_'. $category .'_size_13_' . $z;
            $size_14 = 'costing_'. $category .'_size_14_' . $z;
            $size_15 = 'costing_'. $category .'_size_15_' . $z;
            $color_1 = 'costing_'. $category .'_color_1_' . $z;
            $color_2 = 'costing_'. $category .'_color_2_' . $z;
            $color_3 = 'costing_'. $category .'_color_3_' . $z;
            $color_4 = 'costing_'. $category .'_color_4_' . $z;
            $color_5 = 'costing_'. $category .'_color_5_' . $z;

            $data = [
                'cost_item_no' => $y,
                'cost_component' => request()->$component,
                'cost_material_id' =>  request()->$material_id,
                'cost_category_data' =>  request()->$categories,
                'cost_nominated' =>  request()->$nominated,
                'cost_coo' =>  request()->$coo,
                'cost_supplier_ref' =>  request()->$supplier_ref,
                'cost_description' =>  request()->$description,
                'cost_location' =>  request()->$location,
                'cost_mill_supplier' =>  request()->$mill_supplier,
                'cost_uom' =>  request()->$uom,
                'cost_width' =>  request()->$wedth,
                'cost_usage' =>  request()->$usage,
                'cost_wastage' =>  request()->$wastage,
                'cost_gross_yield' =>  request()->$gross_yield,
                'cost_unit_cost' =>  request()->$unit_cost,
                'cost_handling' =>  request()->$handling,
                'cost_total' =>  request()->$total_cost,
                'cost_comment' =>  request()->$comment,
                'cost_size_1' =>  request()->$size_1,
                'cost_size_2' =>  request()->$size_2,
                'cost_size_3' =>  request()->$size_3,
                'cost_size_4' =>  request()->$size_4,
                'cost_size_5' =>  request()->$size_5,
                'cost_size_6' =>  request()->$size_6,
                'cost_size_7' =>  request()->$size_7,
                'cost_size_8' =>  request()->$size_8,
                'cost_size_9' =>  request()->$size_9,
                'cost_size_10' =>  request()->$size_10,
                'cost_size_11' =>  request()->$size_11,
                'cost_size_12' =>  request()->$size_12,
                'cost_size_13' =>  request()->$size_13,
                'cost_size_14' =>  request()->$size_14,
                'cost_size_15' =>  request()->$size_15,
                'cost_color_1' =>  request()->$color_1,
                'cost_color_2' =>  request()->$color_2,
                'cost_color_3' =>  request()->$color_3,
                'cost_color_4' =>  request()->$color_4,
                'cost_color_5' =>  request()->$color_5,
                'costing_sheet_id' =>  $costing_sheet_id,
            ];

            if($category === 'fabric'){
                CostFabric::create($data);
            }else if($category === 'trim'){
                CostTrim::create($data);
            }else if($category === 'zipper'){
                CostZipper::create($data);
            }else if($category === 'embelishment'){
                CostEmbelishment::create($data);
            }else if($category === 'label'){
                CostLabel::create($data);
            }else if($category === 'thread'){
                CostThread::create($data);
            }else if($category === 'package'){
                CostPackage::create($data);
            }else if($category === 'finish'){
                CostFinish::create($data);
            }else if($category === 'export'){
                CostExport::create($data);
            }else if($category === 'testing'){
                CostTesting::create($data);
            }else if($category === 'other'){
                CostOther::create($data);
            }else if($category === 'labor'){
                CostLabor::create($data);
            }

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
            'cost_version' =>  request()->costing_version,
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
            'cost_shipping_port' =>  request()->costing_port,
            'cost_forecast_qty' =>  request()->costing_forecast_qty,
            'cost_moq_style' =>  request()->costing_moq_style,
            'cost_mcq_color' =>  request()->costing_mcq_color,
            'cost_incoterms' =>  request()->costing_inco_terms,
            'cost_payment_terms' =>  request()->costing_payment_terms,
            'cost_production_lead_time' =>  request()->costing_production_lead_time,
            'cost_griege_reduced' =>  request()->costing_greige_reduced,

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
            'cost_fabric_total_fob' =>  request()->costing_fabric_total_fob,
            'cost_trim_total_fob' =>  request()->costing_trim_total_fob,
            'cost_zipper_total_fob' =>  request()->costing_zipper_total_fob,
            'cost_embelishment_total_fob' =>  request()->costing_embelishment_total_fob,
            'cost_label_total_fob' =>  request()->costing_label_total_fob,
            'cost_thread_total_fob' =>  request()->costing_thread_total_fob,
            'cost_package_total_fob' =>  request()->costing_package_total_fob,
            'cost_finish_total_fob' =>  request()->costing_finish_total_fob,
            'cost_export_total_fob' =>  request()->costing_export_total_fob,
            'cost_testing_total_fob' =>  request()->costing_testing_total_fob,
            'cost_other_total_fob' =>  request()->costing_other_total_fob,
            'cost_labor_total_fob' =>  request()->costing_labor_total_fob,
            'cost_size_head_names' =>  request()->costing_size_head_names,
            'cost_color_head_names' =>  request()->costing_color_head_names,
            'user_id' => request()->user_id,
        ];

        return CostingSheet::create($data);
    }


    public function insertSketches($costing_sheet_id){

        $files = request()->file('costing_photo');

        if(request()->hasFile('costing_photo'))
        {
            $photo = ['front','back','left','right'];

            foreach ($files as $key => $file) {
                $pathname = 'storage/images/costing-sheet/';
                $filename = 'cs'. $costing_sheet_id . $photo[$key] . '.png';
                $wholename = $pathname.$filename;
                $image = $file;
                $image = Image::make($image->getRealPath());
                $image->resize(150,150);
                $image->save(public_path($wholename));

                if($key === 0){
                    $imageWholeName['cost_front_sketch'] = $wholename;
                }else if($key === 1){
                    $imageWholeName['cost_back_sketch'] = $wholename;
                }else if($key === 2){
                    $imageWholeName['cost_left_sketch'] = $wholename;
                }else if($key === 3){
                    $imageWholeName['cost_right_sketch'] = $wholename;
                }

            }
            $imageWholeName['costing_sheet_id'] = $costing_sheet_id;

            CostSketch::create($imageWholeName);
        }




    }

    public function insertRemarks($costing_sheet_id){
        $data = [
            'cost_remarks_1' => request()->costing_remark_1,
            'cost_remarks_2' => request()->costing_remark_2,
            'cost_remarks_3' => request()->costing_remark_3,
            'cost_remarks_4' => request()->costing_remark_4,
            'cost_remarks_5' => request()->costing_remark_5,
            'cost_remarks_6' => request()->costing_remark_6,
            'cost_remarks_7' => request()->costing_remark_7,
            'cost_remarks_8' => request()->costing_remark_8,
            'cost_remarks_9' => request()->costing_remark_9,
            'cost_remarks_10' => request()->costing_remark_10,
            'costing_sheet_id' => $costing_sheet_id,
        ];

        CostRemarks::create($data);

    }

    public function insertLaborCosts($costing_sheet_id){

        $data = [
            'cost_smv_1' => request()->costing_smv_first,
            'cost_output_per_day_1' => request()->costing_output_per_day_second,
            'cost_hours_1' => request()->costing_hours_first,
            'cost_hours_2' => request()->costing_hours_second,
            'cost_days_1' => request()->costing_days_first,
            'cost_days_2' => request()->costing_days_second,
            'cost_operators_1' => request()->costing_operators_first,
            'cost_operators_2' => request()->costing_operators_second,
            'cost_monthly_wage_1' => request()->costing_monthly_wages_first,
            'cost_monthly_wage_2' => request()->costing_monthly_wages_second,
            'costing_sheet_id' => $costing_sheet_id,
        ];

        CostLaborDetail::create($data);

    }

    public function insertMoqs($costing_sheet_id){

        $data = [
            'cost_qty_pcs_1' => request()->costing_moq_qty_1,
            'cost_qty_pcs_2' => request()->costing_moq_qty_2,
            'cost_qty_pcs_3' => request()->costing_moq_qty_3,
            'cost_qty_pcs_4' => request()->costing_moq_qty_4,
            'cost_qty_pcs_5' => request()->costing_moq_qty_5,
            'cost_qty_pcs_6' => request()->costing_moq_qty_6,
            'cost_upcharge_1' => request()->costing_moq_upcharge_1,
            'cost_upcharge_2' => request()->costing_moq_upcharge_2,
            'cost_upcharge_3' => request()->costing_moq_upcharge_3,
            'cost_upcharge_4' => request()->costing_moq_upcharge_4,
            'cost_upcharge_5' => request()->costing_moq_upcharge_5,
            'cost_upcharge_6' => request()->costing_moq_upcharge_6,
            'costing_sheet_id' => $costing_sheet_id,
        ];

        CostMoq::create($data);

    }

    public function updateCostingSheet($costingSheet){
        $data = [
            'cost_customer_name' => request()->costing_customer_name,
            'cost_brand' => request()->costing_brand,
            'cost_season' =>  request()->costing_season,
            'cost_product_category' =>  request()->costing_product_category,
            'cost_product_category_one' =>  request()->costing_product_category_one,
            'cost_product_category_two' =>  request()->costing_product_category_two,
            'cost_division' =>  request()->costing_division,
            'cost_version' =>  request()->costing_version,
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
            'cost_shipping_port' =>  request()->costing_port,
            'cost_forecast_qty' =>  request()->costing_forecast_qty,
            'cost_moq_style' =>  request()->costing_moq_style,
            'cost_mcq_color' =>  request()->costing_mcq_color,
            'cost_incoterms' =>  request()->costing_inco_terms,
            'cost_payment_terms' =>  request()->costing_payment_terms,
            'cost_production_lead_time' =>  request()->costing_production_lead_time,
            'cost_griege_reduced' =>  request()->costing_greige_reduced,
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
            'cost_fabric_total_fob' =>  request()->costing_fabric_total_fob,
            'cost_trim_total_fob' =>  request()->costing_trim_total_fob,
            'cost_zipper_total_fob' =>  request()->costing_zipper_total_fob,
            'cost_embelishment_total_fob' =>  request()->costing_embelishment_total_fob,
            'cost_label_total_fob' =>  request()->costing_label_total_fob,
            'cost_thread_total_fob' =>  request()->costing_thread_total_fob,
            'cost_package_total_fob' =>  request()->costing_package_total_fob,
            'cost_finish_total_fob' =>  request()->costing_finish_total_fob,
            'cost_export_total_fob' =>  request()->costing_export_total_fob,
            'cost_testing_total_fob' =>  request()->costing_testing_total_fob,
            'cost_other_total_fob' =>  request()->costing_other_total_fob,
            'cost_labor_total_fob' =>  request()->costing_labor_total_fob,
            'cost_size_head_names' =>  request()->costing_size_head_names,
            'cost_color_head_names' =>  request()->costing_color_head_names,
            'user_id' => request()->user_id,
        ];

         $costingSheet->update($data);
    }

    public function updateSketches($costingSheet){

        $costing_sheet_id = $costingSheet->id;
        $files = request()->file('costing_photo');

        if(request()->hasFile('costing_photo'))
        {
            $photo = ['front','back','left','right'];

            foreach ($files as $key => $file) {

                $pathname = 'storage/images/costing-sheet/';
                $filename = 'cs'. $costing_sheet_id . $photo[$key] . '.png';
                $wholename = $pathname.$filename;
                $image = $file;
                $image = Image::make($image->getRealPath());
                $image->resize(150,150);

                if($key === 0){
                    Storage::delete(asset($costingSheet->cost_sketches[0]->cost_front_sketch)); // delete file from default disk
                    $costingSheet->cost_sketches()->update(['cost_front_sketch' => $wholename]);
                    $image->save(public_path($wholename));
                }else if($key === 1){
                    Storage::delete(asset($costingSheet->cost_sketches[0]->cost_back_sketch)); // delete file from default disk
                    $costingSheet->cost_sketches()->update(['cost_back_sketch' => $wholename]);
                    $image->save(public_path($wholename));
                }else if($key === 2){
                    Storage::delete(asset($costingSheet->cost_sketches[0]->cost_left_sketch)); // delete file from default disk
                    $costingSheet->cost_sketches()->update(['cost_left_sketch' => $wholename]);
                    $image->save(public_path($wholename));
                }else if($key === 3){
                    Storage::delete(asset($costingSheet->cost_sketches[0]->cost_right_sketch)); // delete file from default disk
                    $image->save(public_path($wholename));
                    $costingSheet->cost_sketches()->update(['cost_right_sketch' => $wholename]);
                }


            }

        }




    }
}
