<?php

namespace App\Imports;


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
use App\Models\CostTesting;
use App\Models\CostThread;
use App\Models\CostTrim;
use App\Models\CostZipper;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;

class CostingSheetImport implements ToCollection,WithEvents,WithDrawings
{

    public function __construct()
    {


    }

    public function collection(Collection $collection)
    {
        return 0;
    }

    public function drawings()
    {
        // TODO: Implement drawings() method.
    }

    public function registerEvents(): array
    {
        return[
            BeforeSheet::class => function(BeforeSheet $event){

                $fabric_row_range = $event->sheet->getCell('X3')->getValue();
                $trim_row_range = $event->sheet->getCell('X4')->getValue();
                $zipper_row_range = $event->sheet->getCell('X5')->getValue();
                $embelishment_row_range = $event->sheet->getCell('X6')->getValue();
                $label_row_range = $event->sheet->getCell('X7')->getValue();
                $thread_row_range = $event->sheet->getCell('X8')->getValue();
                $package_row_range = $event->sheet->getCell('X9')->getValue();
                $finish_row_range = $event->sheet->getCell('X10')->getValue();
                $export_row_range = $event->sheet->getCell('X11')->getValue();
                $testing_row_range = $event->sheet->getCell('X12')->getValue();
                $other_row_range = $event->sheet->getCell('X13')->getValue();
                $labor_row_range = $event->sheet->getCell('X14')->getValue();

                $categories_row_range = [$fabric_row_range,$trim_row_range,$zipper_row_range,$embelishment_row_range,
                    $label_row_range,$thread_row_range,$package_row_range,$finish_row_range,
                    $export_row_range,$testing_row_range,$other_row_range,$labor_row_range,];

                $labor_cost_one_range = $event->sheet->getCell('AA3')->getValue();
                $labor_cost_two_range = $event->sheet->getCell('AA4')->getValue();

                $remarks_range = $event->sheet->getCell('AA7')->getValue();

                $moq_qty_range = $event->sheet->getCell('AA10')->getValue();
                $moq_upcharge_range = $event->sheet->getCell('AA11')->getValue();

                $product_category_one = $event->sheet->getCell('D7')->getValue();
                $size_code = $event->sheet->getCell('H7')->getValue();
                $no_of_color = $event->sheet->getCell('P7')->getValue();

                $costing_sheet['cost_customer_name'] = $event->sheet->getCell('D3')->getValue();
                $costing_sheet['cost_brand'] = $event->sheet->getCell('D4')->getValue();
                $costing_sheet['cost_season'] = $event->sheet->getCell('D5')->getValue();
                $costing_sheet['cost_product_category'] = $event->sheet->getCell('D6')->getValue();
                $costing_sheet['cost_product_category_one'] = $product_category_one;
                $costing_sheet['cost_product_category_two'] = $event->sheet->getCell('D8')->getValue();

                $costing_sheet['cost_division'] = $event->sheet->getCell('H3')->getValue();
                $costing_sheet['cost_version'] = $event->sheet->getCell('H4')->getValue();
                $costing_sheet['cost_special_cons'] = $event->sheet->getCell('H5')->getValue();
                $costing_sheet['cost_gender'] = $event->sheet->getCell('H6')->getValue();
                $costing_sheet['cost_size_code'] = $size_code;
                $costing_sheet['cost_costing_size'] = $event->sheet->getCell('H8')->getValue();

                $costing_sheet['cost_style'] = $event->sheet->getCell('P3')->getValue();
                $costing_sheet['cost_style_name'] = $event->sheet->getCell('P4')->getValue();
                $costing_sheet['cost_color'] = $event->sheet->getCell('P5')->getValue();
                $costing_sheet['cost_color_name'] = $event->sheet->getCell('P6')->getValue();
                $costing_sheet['cost_no_of_color'] = $no_of_color;
                $costing_sheet['cost_tp_code'] = $event->sheet->getCell('P8')->getValue();

                $costing_sheet['cost_date'] = $event->sheet->getCell('T3')->getValue();
                $costing_sheet['cost_costing_stage'] = $event->sheet->getCell('T4')->getValue();
                $costing_sheet['cost_status'] = $event->sheet->getCell('T5')->getValue();
                $costing_sheet['cost_currency'] = $event->sheet->getCell('T6')->getValue();
                $costing_sheet['cost_target_fob'] = $event->sheet->getCell('T7')->getValue();
                $costing_sheet['cost_total_fob'] = $event->sheet->getCell('T8')->getValue();
                $costing_sheet['cost_total_fob_cm'] = $event->sheet->getCell('R8')->getValue();

                $costing_sheet['cost_vendor'] = $event->sheet->getCell('D11')->getValue();
                $costing_sheet['cost_manufacturer_one'] = $event->sheet->getCell('D12')->getValue();
                $costing_sheet['cost_manufacturer_two'] = $event->sheet->getCell('D13')->getValue();
                $costing_sheet['cost_coo'] = $event->sheet->getCell('D14')->getValue();
                $costing_sheet['cost_shipping_port'] = $event->sheet->getCell('D15')->getValue();

                $costing_sheet['cost_forecast_qty'] = $event->sheet->getCell('H11')->getValue();
                $costing_sheet['cost_moq_style'] = $event->sheet->getCell('H12')->getValue();
                $costing_sheet['cost_mcq_color'] = $event->sheet->getCell('H13')->getValue();
                $costing_sheet['cost_incoterms'] = $event->sheet->getCell('H14')->getValue();
                $costing_sheet['cost_payment_terms'] = $event->sheet->getCell('H15')->getValue();

                $costing_sheet['cost_production_lead_time'] = $event->sheet->getCell('H11')->getValue();
                $costing_sheet['cost_griege_reduced'] = $event->sheet->getCell('H11')->getValue();

                $fabric_row_range_exp = explode('-',$fabric_row_range);
                $costing_sheet['cost_fabric_row_names'] = $event->sheet->getCell('B' . $fabric_row_range_exp[0])->getValue() .
                                    '-' . $event->sheet->getCell('B' . $fabric_row_range_exp[1])->getValue();
                $trim_row_range_exp = explode('-',$trim_row_range);
                $costing_sheet['cost_trim_row_names'] = $event->sheet->getCell('B' . $trim_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $trim_row_range_exp[1])->getValue();
                $zipper_row_range_exp = explode('-',$zipper_row_range);
                $costing_sheet['cost_zipper_row_names'] = $event->sheet->getCell('B' . $zipper_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $zipper_row_range_exp[1])->getValue();
                $embelishment_row_range_exp = explode('-',$embelishment_row_range);
                $costing_sheet['cost_embelishment_row_names'] = $event->sheet->getCell('B' . $embelishment_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $embelishment_row_range_exp[1])->getValue();
                $label_row_range_exp = explode('-',$label_row_range);
                $costing_sheet['cost_label_row_names'] = $event->sheet->getCell('B' . $label_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $label_row_range_exp[1])->getValue();
                $thread_row_range_exp = explode('-',$thread_row_range);
                $costing_sheet['cost_thread_row_names'] = $event->sheet->getCell('B' . $thread_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $thread_row_range_exp[1])->getValue();
                $package_row_range_exp = explode('-',$package_row_range);
                $costing_sheet['cost_package_row_names'] = $event->sheet->getCell('B' . $package_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $package_row_range_exp[1])->getValue();
                $finish_row_range_exp = explode('-',$finish_row_range);
                $costing_sheet['cost_finish_row_names'] = $event->sheet->getCell('B' . $finish_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $finish_row_range_exp[1])->getValue();
                $export_row_range_exp = explode('-',$export_row_range);
                $costing_sheet['cost_export_row_names'] = $event->sheet->getCell('B' . $export_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $export_row_range_exp[1])->getValue();
                $testing_row_range_exp = explode('-',$testing_row_range);
                $costing_sheet['cost_testing_row_names'] = $event->sheet->getCell('B' . $testing_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $testing_row_range_exp[1])->getValue();
                $other_row_range_exp = explode('-',$other_row_range);
                $costing_sheet['cost_other_row_names'] = $event->sheet->getCell('B' . $other_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $other_row_range_exp[1])->getValue();
                $labor_row_range_exp = explode('-',$labor_row_range);
                $costing_sheet['cost_labor_row_names'] = $event->sheet->getCell('B' . $labor_row_range_exp[0])->getValue() .
                    '-' . $event->sheet->getCell('B' . $labor_row_range_exp[1])->getValue();

                $fabric_row_count = $fabric_row_range_exp[1] - $fabric_row_range_exp[0] +1;
                $trim_row_count = $trim_row_range_exp[1] - $trim_row_range_exp[0] +1;
                $zipper_row_count = $zipper_row_range_exp[1] - $zipper_row_range_exp[0] +1;
                $embelishment_row_count = $embelishment_row_range_exp[1] - $embelishment_row_range_exp[0] +1;
                $label_row_count = $label_row_range_exp[1] - $label_row_range_exp[0] +1;
                $thread_row_count = $thread_row_range_exp[1] - $thread_row_range_exp[0] +1;
                $package_row_count = $package_row_range_exp[1] - $package_row_range_exp[0] +1;
                $finish_row_count = $finish_row_range_exp[1] - $finish_row_range_exp[0] +1;
                $export_row_count = $export_row_range_exp[1] - $export_row_range_exp[0] +1;
                $testing_row_count = $testing_row_range_exp[1] - $testing_row_range_exp[0] +1;
                $other_row_count = $other_row_range_exp[1] - $other_row_range_exp[0] +1;
                $labor_row_count = $labor_row_range_exp[1] - $labor_row_range_exp[0] +1;

                $fabric_row_start = 19;
                $trim_row_start = $fabric_row_start + $fabric_row_count +2;
                $zipper_row_start = $trim_row_start + $trim_row_count +2;
                $embelishment_row_start = $zipper_row_start + $zipper_row_count +2;
                $label_row_start = $embelishment_row_start + $embelishment_row_count +2;
                $thread_row_start = $label_row_start + $label_row_count +2;
                $package_row_start = $thread_row_start + $thread_row_count +2;
                $finish_row_start = $package_row_start + $package_row_count +2;
                $export_row_start = $finish_row_start + $finish_row_count +2;
                $testing_row_start = $export_row_start + $export_row_count +2;
                $other_row_start = $testing_row_start + $testing_row_count +2;
                $labor_row_start = $other_row_start + $other_row_count +2;

                $bottom_one_start = $labor_row_start + $labor_row_count +3;
                $bottom_two_start = $bottom_one_start + 14;

                $costing_sheet['cost_fabric_total_fob'] = round($event->sheet->getCell('T'.($trim_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_trim_total_fob'] = round($event->sheet->getCell('T'.($zipper_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_zipper_total_fob'] = round($event->sheet->getCell('T'.($embelishment_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_embelishment_total_fob'] = round($event->sheet->getCell('T'.($label_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_label_total_fob'] = round($event->sheet->getCell('T'.($thread_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_thread_total_fob'] = round($event->sheet->getCell('T'.($package_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_package_total_fob'] = round($event->sheet->getCell('T'.($finish_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_finish_total_fob'] = round($event->sheet->getCell('T'.($export_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_export_total_fob'] = round($event->sheet->getCell('T'.($testing_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_testing_total_fob'] = round($event->sheet->getCell('T'.($other_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_other_total_fob'] = round($event->sheet->getCell('T'.($labor_row_start-1))->getCalculatedValue(),2);
                $costing_sheet['cost_labor_total_fob'] = round($event->sheet->getCell('T'.($bottom_one_start-2))->getCalculatedValue(),2);

                $costing_sheet['cost_material_fob'] = round($event->sheet->getCell('S'.($bottom_two_start))->getCalculatedValue(),2);
                $costing_sheet['cost_lop_fob'] = round($event->sheet->getCell('S'.($bottom_two_start+1))->getCalculatedValue(),2);

                $sizes = '';

                if($product_category_one === "TOPS"){
                    if($size_code === "J-01"){
                        $sizes = "XXS,XS,S,M,L,XL,XXL,XXXL";
                    }else if($size_code === "J-02"){
                        $sizes = "S/M,M/L,L/XL";
                    }else if($size_code === "J-03"){
                        $sizes = ["1X,2X,3X,4X,5X"];
                    }else if($size_code === "J-04"){
                        $sizes = ["2,3,4,5,6,7,8"];
                    }else if($size_code === "J-07"){
                        $sizes = ["0-3M,3-6M,6-12M,12-18M,18-24M"];
                    }
                }else if($product_category_one === "BOTTOMS"){
                    if($size_code === "P-01"){
                        $sizes = "XXS,XS,S,M,L,XL,XXL,XXXL";
                    }else if($size_code === "P-02"){
                        $sizes = "S/M,M/L,L/XL";
                    }else if($size_code === "P-04"){
                        $sizes = "2,3,4,5,6,7,8";
                    }else if($size_code === "P-07"){
                        $sizes = "0-3M,3-6M,6-12M,12-18M,18-24M";
                    }else if($size_code === "P-11"){
                        $sizes = "28,29,30,31,32,33,34,35,36,37,38,39,40";
                    }else if($size_code === "P-12"){
                        $sizes = "0,2,4,6,8,10,12,14,16";
                    }else if($size_code === "P-12"){
                        $sizes = "16W,18W,20W,22W,24W";
                    }
                }

                $costing_sheet['cost_size_head_names'] = $sizes;
                $size_head_names_count = count(explode(',',$sizes));

                $size_color_columns = ['W','X','Y','Z','AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP'];

                $colors = '';

                for($x = $size_head_names_count;$x < ($size_head_names_count+5);$x++){
                    $color = $event->sheet->getCell($size_color_columns[$x].'19')->getValue();
                    if($color === '' || $color === null ){
                        $color = 'undefined';
                    }
                    $colors = $colors . $color . ',';
                }

                $costing_sheet['cost_color_head_names'] = $colors;



                $costing_sheet['user_id'] = 1;
                $costing_sheet = CostingSheet::create($costing_sheet);

                //insert categories
                $categories = ['fabric','trim','zipper','embelishment','label','thread',
                    'package','finish','export','testing','other','labor'];

                for($x = 0;$x < count($categories);$x++){
                    $this->insertCategories($costing_sheet->id,$categories[$x],$categories_row_range[$x],$event,$size_head_names_count,$no_of_color,$size_color_columns);
                }

                //insert remarks
                $remarks_data['cost_remarks_1'] = $event->sheet->getCell('C'.($bottom_two_start+1))->getValue();
                $remarks_data['cost_remarks_2'] = $event->sheet->getCell('C'.($bottom_two_start+2))->getValue();
                $remarks_data['cost_remarks_3'] = $event->sheet->getCell('C'.($bottom_two_start+3))->getValue();
                $remarks_data['cost_remarks_4'] = $event->sheet->getCell('C'.($bottom_two_start+4))->getValue();
                $remarks_data['cost_remarks_5'] = $event->sheet->getCell('C'.($bottom_two_start+5))->getValue();
                $remarks_data['cost_remarks_6'] = $event->sheet->getCell('C'.($bottom_two_start+6))->getValue();
                $remarks_data['cost_remarks_7'] = $event->sheet->getCell('C'.($bottom_two_start+7))->getValue();
                $remarks_data['cost_remarks_8'] = $event->sheet->getCell('C'.($bottom_two_start+8))->getValue();
                $remarks_data['cost_remarks_9'] = $event->sheet->getCell('C'.($bottom_two_start+9))->getValue();
                $remarks_data['cost_remarks_10'] = $event->sheet->getCell('C'.($bottom_two_start+10))->getValue();
                $remarks_data['costing_sheet_id'] = $costing_sheet->id;
                CostRemarks::create($remarks_data);

                //inser labor costs
                $cost_labor_data['cost_smv_1'] = $event->sheet->getCell('K'.($bottom_two_start+2))->getValue();
                $cost_labor_data['cost_hours_1'] = $event->sheet->getCell('K'.($bottom_two_start+3))->getValue();
                $cost_labor_data['cost_days_1'] = $event->sheet->getCell('K'.($bottom_two_start+4))->getValue();
                $cost_labor_data['cost_operators_1'] = $event->sheet->getCell('K'.($bottom_two_start+5))->getValue();
                $cost_labor_data['cost_monthly_wage_1'] = $event->sheet->getCell('K'.($bottom_two_start+7))->getValue();

                $cost_labor_data['cost_output_per_day_1'] = $event->sheet->getCell('L'.($bottom_two_start+6))->getValue();
                $cost_labor_data['cost_hours_2'] = $event->sheet->getCell('L'.($bottom_two_start+3))->getValue();
                $cost_labor_data['cost_days_2'] = $event->sheet->getCell('L'.($bottom_two_start+4))->getValue();
                $cost_labor_data['cost_operators_2'] = $event->sheet->getCell('L'.($bottom_two_start+5))->getValue();
                $cost_labor_data['cost_monthly_wage_2'] = $event->sheet->getCell('L'.($bottom_two_start+7))->getValue();

                $cost_labor_data['costing_sheet_id'] = $costing_sheet->id;
                CostLaborDetail::create($cost_labor_data);

                //insert moqs
                $moqs_data['cost_qty_pcs_1'] = $event->sheet->getCell('P'.($bottom_two_start+4))->getValue();
                $moqs_data['cost_qty_pcs_2'] = $event->sheet->getCell('Q'.($bottom_two_start+4))->getValue();
                $moqs_data['cost_qty_pcs_3'] = $event->sheet->getCell('R'.($bottom_two_start+4))->getValue();
                $moqs_data['cost_qty_pcs_4'] = $event->sheet->getCell('S'.($bottom_two_start+4))->getValue();
                $moqs_data['cost_qty_pcs_5'] = $event->sheet->getCell('T'.($bottom_two_start+4))->getValue();
                $moqs_data['cost_qty_pcs_6'] = $event->sheet->getCell('U'.($bottom_two_start+4))->getValue();

                $moqs_data['cost_upcharge_1'] = $event->sheet->getCell('P'.($bottom_two_start+5))->getValue()*100;
                $moqs_data['cost_upcharge_2'] = $event->sheet->getCell('Q'.($bottom_two_start+5))->getValue()*100;
                $moqs_data['cost_upcharge_3'] = $event->sheet->getCell('R'.($bottom_two_start+5))->getValue()*100;
                $moqs_data['cost_upcharge_4'] = $event->sheet->getCell('S'.($bottom_two_start+5))->getValue()*100;
                $moqs_data['cost_upcharge_5'] = $event->sheet->getCell('T'.($bottom_two_start+5))->getValue()*100;
                $moqs_data['cost_upcharge_6'] = $event->sheet->getCell('U'.($bottom_two_start+5))->getValue()*100;

                $moqs_data['costing_sheet_id'] = $costing_sheet->id;
                CostMoq::create($moqs_data);

                //insert drawings


            },
            AfterSheet::class => function(AfterSheet $event){
//                dd($event->sheet->getDrawingCollection());
            },
        ];
    }

    public function insertCategories($costing_sheet_id,$category,$category_row_range,$event,$size_count,$no_of_color,$size_color_columns){

        $data = [];
        $category_row_range_exp = explode('-',$category_row_range);

        for($y = (int)$category_row_range_exp[0]; $y <= (int)$category_row_range_exp[1]; $y++){

            $data_raw = [
                'cost_item_no' => $event->sheet->getCell('B'.$y)->getValue(),
                'cost_component' => $event->sheet->getCell('C'.$y)->getValue(),
                'cost_material_id' =>  $event->sheet->getCell('D'.$y)->getValue(),
                'cost_category_data' =>  $event->sheet->getCell('E'.$y)->getValue(),
                'cost_nominated' =>  $event->sheet->getCell('F'.$y)->getValue(),
                'cost_coo' =>  $event->sheet->getCell('G'.$y)->getValue(),

                'cost_customer_mtl' =>  $event->sheet->getCell('H'.$y)->getValue(),
                'cost_supplier_mtl' =>  $event->sheet->getCell('I'.$y)->getValue(),

                'cost_description' =>  $event->sheet->getCell('J'.$y)->getValue(),
                'cost_location' =>  $event->sheet->getCell('K'.$y)->getValue(),

                'cost_mill_supplier' =>  $event->sheet->getCell('L'.$y)->getValue(),

                'cost_uom' =>  $event->sheet->getCell('M'.$y)->getValue(),
                'cost_width' =>  $event->sheet->getCell('N'.$y)->getValue(),
                'cost_usage' =>  $event->sheet->getCell('O'.$y)->getValue(),
                'cost_wastage' =>  $event->sheet->getCell('P'.$y)->getValue()*100,
                'cost_gross_yield' =>  $event->sheet->getCell('Q'.$y)->getCalculatedValue(),
                'cost_unit_cost' =>  $event->sheet->getCell('R'.$y)->getValue(),
                'cost_handling' =>  $event->sheet->getCell('S'.$y)->getValue()*100,
                'cost_total' =>  $event->sheet->getCell('T'.$y)->getCalculatedValue(),
                'cost_comment' =>  $event->sheet->getCell('U'.$y)->getCalculatedValue(),
                'costing_sheet_id' =>  $costing_sheet_id,

            ];


            $size_data = [];
            for($s = 1; $s <= $size_count; $s++){
                $size_data['cost_size_'.$s]= $event->sheet->getCell($size_color_columns[$s-1].$y)->getValue();
            }

            $color_data = [];
            $cc = 1;
            for($c = ($size_count+1);$c <= ($size_count+$no_of_color); $c++){
                $color_data['cost_color_'.$cc] = $event->sheet->getCell($size_color_columns[$c-1].$y)->getValue();
                $cc++;
            }

            $data = array_merge($data_raw,$size_data,$color_data);

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

        }

    }

}
