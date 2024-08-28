<?php

namespace App\Exports;

use App\Models\CostingSheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class CostingSheetExport implements FromCollection,WithEvents,WithTitle,WithDrawings
{

    protected $costing_sheet;
    protected $cost_fabrics;
    protected $cost_trims;
    protected $cost_zippers;
    protected $cost_embelishments;
    protected $cost_labels;
    protected $cost_threads;
    protected $cost_packages;
    protected $cost_finishes;
    protected $cost_exports;
    protected $cost_testings;
    protected $cost_others;
    protected $cost_labors;
    protected $cost_sketches;
    protected $cost_remarks;
    protected $cost_labor_details;
    protected $cost_moqs;

    protected $cost_categories_row_start;
    protected $cost_bottom_row_start;
    protected $cost_bottom_second_row_start;

    protected $cost_fabric_row_start;
    protected $cost_fabric_data_row_count;
    protected $cost_trim_row_start;
    protected $cost_trim_data_row_count;
    protected $cost_zipper_row_start;
    protected $cost_zipper_data_row_count;
    protected $cost_embelishment_row_start;
    protected $cost_embelishment_data_row_count;
    protected $cost_label_row_start;
    protected $cost_label_data_row_count;
    protected $cost_thread_row_start;
    protected $cost_thread_data_row_count;
    protected $cost_package_row_start;
    protected $cost_package_data_row_count;
    protected $cost_finish_row_start;
    protected $cost_finish_data_row_count;
    protected $cost_export_row_start;
    protected $cost_export_data_row_count;
    protected $cost_testing_row_start;
    protected $cost_testing_data_row_count;
    protected $cost_other_row_start;
    protected $cost_other_data_row_count;
    protected $cost_labor_row_start;
    protected $cost_labor_data_row_count;

    public function __construct($costingSheet)
    {
        $this->costing_sheet = $costingSheet;
        $this->cost_fabrics = $costingSheet->cost_fabrics;
        $this->cost_trims = $costingSheet->cost_trims;
        $this->cost_zippers = $costingSheet->cost_zippers;
        $this->cost_embelishments = $costingSheet->cost_embelishments;
        $this->cost_labels = $costingSheet->cost_labels;
        $this->cost_threads = $costingSheet->cost_threads;
        $this->cost_packages = $costingSheet->cost_packages;
        $this->cost_finishes = $costingSheet->cost_finishes;
        $this->cost_exports = $costingSheet->cost_exports;
        $this->cost_testings = $costingSheet->cost_testings;
        $this->cost_others = $costingSheet->cost_others;
        $this->cost_labors = $costingSheet->cost_labors;
        $this->cost_sketches = $costingSheet->cost_sketches;
        $this->cost_remarks = $costingSheet->cost_remarks;
        $this->cost_labor_details = $costingSheet->cost_labor_details;
        $this->cost_moqs = $costingSheet->cost_moqs;
    }

    public function collection()
    {
        return CostingSheet::where('id',0)->get();
    }

    public function title(): string
    {
        return 'Costing Sheet';
    }

    public function drawings()
    {
        $drawings = new Drawing();
    }

    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => function(BeforeSheet $event){

                $this->cost_categories_row_start = 19;

                $this->cost_fabric_row_start = $this->cost_categories_row_start;
                $this->cost_fabric_data_row_count = count($this->costing_sheet->cost_fabrics);
                $this->cost_trim_row_start = $this->cost_fabric_row_start+$this->cost_fabric_data_row_count+2;
                $this->cost_trim_data_row_count = count($this->costing_sheet->cost_trims);
                $this->cost_zipper_row_start = $this->cost_trim_row_start+$this->cost_trim_data_row_count+2;
                $this->cost_zipper_data_row_count = count($this->costing_sheet->cost_zippers);
                $this->cost_embelishment_row_start = $this->cost_zipper_row_start+$this->cost_zipper_data_row_count+2;
                $this->cost_embelishment_data_row_count = count($this->costing_sheet->cost_embelishments);
                $this->cost_label_row_start = $this->cost_embelishment_row_start+$this->cost_embelishment_data_row_count+2;
                $this->cost_label_data_row_count = count($this->costing_sheet->cost_labels);
                $this->cost_thread_row_start = $this->cost_label_row_start+$this->cost_label_data_row_count+2;
                $this->cost_thread_data_row_count = count($this->costing_sheet->cost_threads);
                $this->cost_package_row_start = $this->cost_thread_row_start+$this->cost_thread_data_row_count+2;
                $this->cost_package_data_row_count = count($this->costing_sheet->cost_packages);
                $this->cost_finish_row_start = $this->cost_package_row_start+$this->cost_package_data_row_count+2;
                $this->cost_finish_data_row_count = count($this->costing_sheet->cost_finishes);
                $this->cost_export_row_start = $this->cost_finish_row_start+$this->cost_finish_data_row_count+2;
                $this->cost_export_data_row_count = count($this->costing_sheet->cost_exports);
                $this->cost_testing_row_start = $this->cost_export_row_start+$this->cost_export_data_row_count+2;
                $this->cost_testing_data_row_count = count($this->costing_sheet->cost_testings);
                $this->cost_other_row_start = $this->cost_testing_row_start+$this->cost_testing_data_row_count+2;
                $this->cost_other_data_row_count = count($this->costing_sheet->cost_others);
                $this->cost_labor_row_start = $this->cost_other_row_start+$this->cost_other_data_row_count+2;
                $this->cost_labor_data_row_count = count($this->costing_sheet->cost_labors);

                $this->cost_bottom_row_start = $this->cost_labor_row_start+$this->cost_labor_data_row_count+3;
                $this->cost_bottom_second_row_start = $this->cost_bottom_row_start+14;
            },
            AfterSheet::class => function(AfterSheet $event){

                $event->sheet->getColumnDimension('A')->setVisible(false);

                //SET COLUMN WITH INITIAL VIEW
                $this->setColumnsWidth($event);
                //SET COLUMN WITH INITIAL VIEW
                //CH HEADER TITLE
                $this->exportHeaderChinese($event);
                //CH HEADER TITLE
                //MAIN TITLE
                $style_main_title = ['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,],
                    'font' => ['size' => 25, 'bold' => true,],];
                $event->sheet->mergeCells('B1:T1');
                $event->sheet->setCellValue('B1',$this->costing_sheet->cost_vendor)
                    ->getStyle('B1')
                    ->applyFromArray($style_main_title);
                $style_main_title = ['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,],
                    'font' => ['size' => 13, 'bold' => true,],
                    'fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'color' => ['argb' => '95fcb2']],];
                $event->sheet->mergeCells('B2:T2');
                $event->sheet->setCellValue('B2','COSTING SHEET')
                    ->getStyle('B2')
                    ->applyFromArray($style_main_title);
                //MAIN TITLE
                //FIRST HEADER DETAILS
                $event->sheet->mergeCells('B3:C3');$event->sheet->mergeCells('B4:C4');$event->sheet->mergeCells('B5:C5');$event->sheet->mergeCells('B6:C6');$event->sheet->mergeCells('B7:C7');$event->sheet->mergeCells('B8:C8');
                $event->sheet->mergeCells('D3:E3');$event->sheet->mergeCells('D4:E4');$event->sheet->mergeCells('D5:E5');$event->sheet->mergeCells('D6:E6');$event->sheet->mergeCells('D7:E7');$event->sheet->mergeCells('D8:E8');
                $event->sheet->mergeCells('F3:G3');$event->sheet->mergeCells('F4:G4');$event->sheet->mergeCells('F5:G5');$event->sheet->mergeCells('F6:G6');$event->sheet->mergeCells('F7:G7');$event->sheet->mergeCells('F8:G8');
                $event->sheet->mergeCells('H3:I3');$event->sheet->mergeCells('H4:I4');$event->sheet->mergeCells('H5:I5');$event->sheet->mergeCells('H6:I6');$event->sheet->mergeCells('H7:I7');$event->sheet->mergeCells('H8:I8');
                $event->sheet->mergeCells('L3:N3');$event->sheet->mergeCells('L4:N4');$event->sheet->mergeCells('L5:N5');$event->sheet->mergeCells('L6:N6');$event->sheet->mergeCells('L7:N7');$event->sheet->mergeCells('L8:N8');
                $event->sheet->mergeCells('O3:P3');$event->sheet->mergeCells('O4:P4');$event->sheet->mergeCells('O5:P5');$event->sheet->mergeCells('O6:P6');$event->sheet->mergeCells('O7:P7');$event->sheet->mergeCells('O8:P8');
                $event->sheet->mergeCells('Q3:R3');$event->sheet->mergeCells('Q4:R4');$event->sheet->mergeCells('Q5:R5');$event->sheet->mergeCells('Q6:R6');$event->sheet->mergeCells('Q7:R7');$event->sheet->mergeCells('Q8:R8');
                $event->sheet->mergeCells('S3:T3');$event->sheet->mergeCells('S4:T4');$event->sheet->mergeCells('S5:T5');$event->sheet->mergeCells('S6:T6');$event->sheet->mergeCells('S7:T7');$event->sheet->mergeCells('S8:T8');

                $style_header_name = ['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,],
                    'font' => ['size' => 9, 'bold' => true,],];

                $event->sheet->setCellValue('B3','CUSTOMER NAME :')->getStyle('B3')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B4','BRAND :')->getStyle('B4')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B5','SEASON :')->getStyle('B5')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B6','PRODUCT CATEGORY :')->getStyle('B6')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B7','PRODUCT CATEGORY 1 :')->getStyle('B7')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B8','PRODUCT CATEGORY 2 :')->getStyle('B8')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('D3',$this->costing_sheet->cost_customer_name);
                $event->sheet->setCellValue('D4',$this->costing_sheet->cost_brand);
                $event->sheet->setCellValue('D5',$this->costing_sheet->cost_season);
                $event->sheet->setCellValue('D6',$this->costing_sheet->cost_product_category);
                $event->sheet->setCellValue('D7',$this->costing_sheet->cost_product_category_one);
                $event->sheet->setCellValue('D8',$this->costing_sheet->cost_product_category_two);

                $event->sheet->setCellValue('F3','DIVISION :')->getStyle('F3')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F4','VERSION :')->getStyle('F4')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F5','SPECIAL CONSTRUCTION :')->getStyle('F5')->applyFromArray($style_header_name)->applyFromArray(['font'=>['size'=>6]]);
                $event->sheet->setCellValue('F6','GENDER :')->getStyle('F6')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F7','GENDER AGE GROUP :')->getStyle('F7')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F8','COSTING SIZE :')->getStyle('F8')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('H3',$this->costing_sheet->cost_division);
                $event->sheet->setCellValue('H4',$this->costing_sheet->cost_version);
                $event->sheet->setCellValue('H5',$this->costing_sheet->cost_special_cons);
                $event->sheet->setCellValue('H6',$this->costing_sheet->cost_gender);
                $event->sheet->setCellValue('H7',$this->costing_sheet->cost_age_group);
                $event->sheet->setCellValue('H8',$this->costing_sheet->cost_costing_size);

                $event->sheet->setCellValue('L3','STYLE # :')->getStyle('L3')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L4','STYLE NAME :')->getStyle('L4')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L5','COLOR # :')->getStyle('L5')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L6','COLOR NAME :')->getStyle('L6')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L7','NO OF COLOR :')->getStyle('L7')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L8','T/P CODE :')->getStyle('L8')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('O3',$this->costing_sheet->cost_style);
                $event->sheet->setCellValue('O4',$this->costing_sheet->cost_style_name);
                $event->sheet->setCellValue('O5',$this->costing_sheet->cost_color);
                $event->sheet->setCellValue('O6',$this->costing_sheet->cost_color);
                $event->sheet->setCellValue('O7',$this->costing_sheet->cost_no_of_color);
                $event->sheet->setCellValue('O8',$this->costing_sheet->cost_tp_code);

                $event->sheet->setCellValue('Q3','DATE :')->getStyle('Q3')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('Q4','COSTING STAGE :')->getStyle('Q4')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('Q5','STATUS :')->getStyle('Q5')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('Q6','CURRENCY :')->getStyle('Q6')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('Q7','TARGET FOB :')->getStyle('Q7')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('Q8',$this->costing_sheet->cost_total_fob_cm)->getStyle('Q8')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('S3',$this->costing_sheet->cost_date);
                $event->sheet->setCellValue('S4',$this->costing_sheet->cost_costing_stage);
                $event->sheet->setCellValue('S5',$this->costing_sheet->cost_status);
                $event->sheet->setCellValue('S6',$this->costing_sheet->cost_currency);
                $event->sheet->setCellValue('S7',$this->costing_sheet->cost_target_fob);
                $event->sheet->setCellValue('S8',$this->costing_sheet->cost_total_fob);
                //FIRST HEADER DETAILS
                //BORDER
                $event->sheet->mergeCells('B9:T9')->getStyle('B9:T9')->applyFromArray(['borders' => ['bottom' => ['borderStyle' => Border::BORDER_MEDIUM,],],]);
                $event->sheet->mergeCells('B10:T10');
                //BORDER
                //SECOND HEADER DETAILS
                $event->sheet->mergeCells('B11:C11');$event->sheet->mergeCells('B12:C12');$event->sheet->mergeCells('B13:C13');$event->sheet->mergeCells('B14:C14');$event->sheet->mergeCells('B15:C15');
                $event->sheet->mergeCells('D11:E11');$event->sheet->mergeCells('D12:E12');$event->sheet->mergeCells('D13:E13');$event->sheet->mergeCells('D14:E14');$event->sheet->mergeCells('D15:E15');
                $event->sheet->mergeCells('F11:G11');$event->sheet->mergeCells('F12:G12');$event->sheet->mergeCells('F13:G13');$event->sheet->mergeCells('F14:G14');$event->sheet->mergeCells('F15:G15');
                $event->sheet->mergeCells('H11:I11');$event->sheet->mergeCells('H12:I12');$event->sheet->mergeCells('H13:I13');$event->sheet->mergeCells('H14:I14');$event->sheet->mergeCells('H15:I15');
                $event->sheet->mergeCells('L11:N11');$event->sheet->mergeCells('L12:N12');
                $event->sheet->mergeCells('O11:P11');$event->sheet->mergeCells('O12:P12');
                $event->sheet->mergeCells('Q11:R11');$event->sheet->mergeCells('Q12:R12');
                $event->sheet->mergeCells('S11:T11');$event->sheet->mergeCells('S12:T12');

                $event->sheet->setCellValue('B11','VENDOR :')->getStyle('B11')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B12','MANUFACTURER 1 :')->getStyle('B12')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B13','MANUFACTURER 2 :')->getStyle('B13')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B14','COO :')->getStyle('B14')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('B15','SHIPPING PORT :')->getStyle('B15')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('D11',$this->costing_sheet->cost_vendor);
                $event->sheet->setCellValue('D12',$this->costing_sheet->cost_manufacturer_one);
                $event->sheet->setCellValue('D13',$this->costing_sheet->cost_manufacturer_two);
                $event->sheet->setCellValue('D14',$this->costing_sheet->cost_coo);
                $event->sheet->setCellValue('D15',$this->costing_sheet->cost_shipping_port);


                $event->sheet->setCellValue('F11','FORECAST QTY :')->getStyle('F11')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F12','MOQ (Style) :')->getStyle('F12')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F13','MCQ (Color) :')->getStyle('F13')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F14','INCOTERMS :')->getStyle('F14')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('F15','PAYMENT TERMS :')->getStyle('F15')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('H11',$this->costing_sheet->cost_forecast_qty);
                $event->sheet->setCellValue('H12',$this->costing_sheet->cost_moq_style);
                $event->sheet->setCellValue('H13',$this->costing_sheet->cost_mcq_color);
                $event->sheet->setCellValue('H14',$this->costing_sheet->cost_incoterms);
                $event->sheet->setCellValue('H15',$this->costing_sheet->cost_payment_terms);

                $event->sheet->setCellValue('L11','PRODUCTION LEADTIME :')->getStyle('L11')->applyFromArray($style_header_name);
                $event->sheet->setCellValue('L12','GREIGE REDUCED :')->getStyle('L12')->applyFromArray($style_header_name);

                $event->sheet->setCellValue('O11',$this->costing_sheet->cost_production_lead_time);
                $event->sheet->setCellValue('O12',$this->costing_sheet->cost_griege_reduced);

                $event->sheet->setCellValue('Q11','Days')->getStyle('Q11')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);
                $event->sheet->setCellValue('Q12','Days')->getStyle('Q12')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);
                $event->sheet->setCellValue('S12','(based on Material in-house)')->getStyle('S12')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);
                //SECOND HEADER DETAILS
                //BORDER
                $event->sheet->mergeCells('B16:T16')->getStyle('B16:T16')->applyFromArray(['borders' => ['bottom' => ['borderStyle' => Border::BORDER_MEDIUM,],],]);
                $event->sheet->mergeCells('B17:T17');
                //BORDER
            },
        ];
    }
    protected function setColumnsWidth($event){
        $event->sheet->getColumnDimension('B')->setWidth(7);
        $event->sheet->getColumnDimension('C')->setWidth(11);
        $event->sheet->getColumnDimension('D')->setWidth(11);
        $event->sheet->getColumnDimension('E')->setWidth(12);
        $event->sheet->getColumnDimension('F')->setWidth(10);
        $event->sheet->getColumnDimension('G')->setWidth(10);
        $event->sheet->getColumnDimension('H')->setWidth(15);
        $event->sheet->getColumnDimension('I')->setWidth(19);
        $event->sheet->getColumnDimension('J')->setWidth(16);
        $event->sheet->getColumnDimension('K')->setWidth(16);
        $event->sheet->getColumnDimension('L')->setWidth(7);
        $event->sheet->getColumnDimension('M')->setWidth(10);
        $event->sheet->getColumnDimension('N')->setWidth(10);
        $event->sheet->getColumnDimension('O')->setWidth(10);
        $event->sheet->getColumnDimension('P')->setWidth(11);
        $event->sheet->getColumnDimension('Q')->setWidth(10);
        $event->sheet->getColumnDimension('R')->setWidth(10);
        $event->sheet->getColumnDimension('S')->setWidth(12);
        $event->sheet->getColumnDimension('T')->setWidth(15);
    }

    protected function exportHeaderChinese($event){
        $style_ch = [
            'borders' => [
                //outline all
                'outline' => [
                    'borderStyle' => Border::BORDER_THIN,
                ],
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'wrapText' => true,
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                'color' => ['argb' => 'f2f205']
            ],
            'font' => [
                'size' => 8,
                'bold' => true,
            ],
        ];
        $event->sheet->setCellValue('B18','序号')->getStyle('B18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('C18','分类编号')->getStyle('C18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('D18','物料简码')->getStyle('D18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('E18','成本类别')->getStyle('E18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('F18','指定/非指定')->getStyle('F18')->applyFromArray($style_ch)->applyFromArray(['font' => ['size' => 6]]);
        $event->sheet->setCellValue('G18','产地')->getStyle('G18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('H18','客户料号/供应商货号')->getStyle('H18')->applyFromArray($style_ch)->applyFromArray(['font' => ['size' => 7]]);
        $event->sheet->setCellValue('I18','物料描述')->getStyle('I18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('J18','部位名称')->getStyle('J18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('K18','供应商')->getStyle('K18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('L18','单位')->getStyle('L18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('M18','规格')->getStyle('M18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('N18','用量')->getStyle('N18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('O18','损耗')->getStyle('O18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('P18','总用量')->getStyle('P18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('Q18','单价')->getStyle('Q18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('R18','处理')->getStyle('R18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('S18','单价')->getStyle('S18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('T18','评论')->getStyle('T18')->applyFromArray($style_ch);
    }
}
