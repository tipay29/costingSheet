<?php

namespace App\Exports;

use App\Models\CostingSheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithCharts;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Chart\Chart;
use PhpOffice\PhpSpreadsheet\Chart\DataSeries;
use PhpOffice\PhpSpreadsheet\Chart\DataSeriesValues;
use PhpOffice\PhpSpreadsheet\Chart\Legend;
use PhpOffice\PhpSpreadsheet\Chart\PlotArea;
use PhpOffice\PhpSpreadsheet\Chart\Title;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class CostingSheetExport implements FromCollection,WithEvents,WithDrawings,WithCharts
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

    protected $cost_sizes_count;
    protected $cost_sizes_head_name;
    protected $cost_colors_count;
    protected $cost_colors_head_name;
    protected $letters;

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

        $this->cost_sizes_count = count(explode(",",$this->costing_sheet->cost_size_head_names));
        $this->cost_sizes_head_name = explode(",",$this->costing_sheet->cost_size_head_names);
        $this->cost_colors_count = count(array_diff(explode(",",$this->costing_sheet->cost_color_head_names) , ["undefined"] ));
        $this->cost_colors_head_name = array_diff(explode(",",$this->costing_sheet->cost_color_head_names) , ["undefined"] );
        $this->letters = ['W','X','Y','Z','AA','AB','AC'
            ,'AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP'];
    }

    public function collection()
    {
        return CostingSheet::where('id',0)->get();
    }

//    public function title(): string
//    {
//        return 'Costing Sheet';
//    }

    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => function(BeforeSheet $event){
                //HIDE COLUMN A
                $event->sheet->getColumnDimension('A')->setVisible(false);
                //HIDE COLUMN A
                //SET COLUMN WITH INITIAL VIEW
                $this->setColumnsWidth($event);
                //SET COLUMN WITH INITIAL VIEW
                //CH HEADER TITLE
                $this->exportHeaderChinese($event);
                //CH HEADER TITLE
                //MAIN TITLE
                $style_main_title = ['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,],
                    'font' => ['size' => 25, 'bold' => true,],];
                $event->sheet->mergeCells('B1:U1');
                $event->sheet->setCellValue('B1',$this->costing_sheet->cost_vendor)
                    ->getStyle('B1')
                    ->applyFromArray($style_main_title);
                $style_main_title = ['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,],
                    'font' => ['size' => 13, 'bold' => true,],
                    'fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'color' => ['argb' => '95fcb2']],];
                $event->sheet->mergeCells('B2:U2');
                $event->sheet->setCellValue('B2','COSTING SHEET')
                    ->getStyle('B2')
                    ->applyFromArray($style_main_title);
                //MAIN TITLE
                //FIRST HEADER DETAILS
                $this->exportHeaderDetails($event);
                //FIRST HEADER DETAILS
                //BORDER
                $event->sheet->mergeCells('B9:U9')->getStyle('B9:U9')->applyFromArray(['borders' => ['bottom' => ['borderStyle' => Border::BORDER_MEDIUM,],],]);
                $event->sheet->mergeCells('B10:U10');
                //BORDER
                //SECOND HEADER DETAILS
                //SECOND HEADER DETAILS
                //BORDER
                $event->sheet->mergeCells('B16:U16')->getStyle('B16:U16')->applyFromArray(['borders' => ['bottom' => ['borderStyle' => Border::BORDER_MEDIUM,],],]);
                $event->sheet->mergeCells('B17:U17');
                //BORDER
                //FABRIC CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_fabric_row_start,'1.Fabrics');
                $this->exportCategoryData($event,$this->cost_fabric_row_start+1,$this->costing_sheet->cost_fabrics);
                $this->exportCategoryFooter($event,$this->cost_fabric_row_start+$this->cost_fabric_data_row_count+1,$this->cost_fabric_row_start+1,'1.','Fabrics');
                //FABRIC CATEGORY DETAILS
                //TRIM CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_trim_row_start,'2.Trims');
                $this->exportCategoryData($event,$this->cost_trim_row_start+1,$this->costing_sheet->cost_trims);
                $this->exportCategoryFooter($event,$this->cost_trim_row_start+$this->cost_trim_data_row_count+1,$this->cost_trim_row_start+1,'2.','Trims');
                //TRIM CATEGORY DETAILS
                //ZIPPER CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_zipper_row_start,'3.Zippers');
                $this->exportCategoryData($event,$this->cost_zipper_row_start+1,$this->costing_sheet->cost_zippers);
                $this->exportCategoryFooter($event,$this->cost_zipper_row_start+$this->cost_zipper_data_row_count+1,$this->cost_zipper_row_start+1,'3.','Zippers');
                //ZIPPER CATEGORY DETAILS
                //EMBELISHMENT CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_embelishment_row_start,'4.Embelishments');
                $this->exportCategoryData($event,$this->cost_embelishment_row_start+1,$this->costing_sheet->cost_embelishments);
                $this->exportCategoryFooter($event,$this->cost_embelishment_row_start+$this->cost_embelishment_data_row_count+1,$this->cost_embelishment_row_start+1,'4.','Embelishments');
                //EMBELISHMENT CATEGORY DETAILS
                //LABEL CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_label_row_start,'5.Labels');
                $this->exportCategoryData($event,$this->cost_label_row_start+1,$this->costing_sheet->cost_labels);
                $this->exportCategoryFooter($event,$this->cost_label_row_start+$this->cost_label_data_row_count+1,$this->cost_label_row_start+1,'5.','Labels');
                //LABEL CATEGORY DETAILS
                //THREAD CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_thread_row_start,'6.Threads');
                $this->exportCategoryData($event,$this->cost_thread_row_start+1,$this->costing_sheet->cost_threads);
                $this->exportCategoryFooter($event,$this->cost_thread_row_start+$this->cost_thread_data_row_count+1,$this->cost_thread_row_start+1,'6.','Threads');
                //THREAD CATEGORY DETAILS
                //PACKAGE CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_package_row_start,'7.Packagings');
                $this->exportCategoryData($event,$this->cost_package_row_start+1,$this->costing_sheet->cost_packages);
                $this->exportCategoryFooter($event,$this->cost_package_row_start+$this->cost_package_data_row_count+1,$this->cost_package_row_start+1,'7.','Packagings');
                //PACKAGE CATEGORY DETAILS
                //FINISH CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_finish_row_start,'8.Washes/ Finishes');
                $this->exportCategoryData($event,$this->cost_finish_row_start+1,$this->costing_sheet->cost_finishes);
                $this->exportCategoryFooter($event,$this->cost_finish_row_start+$this->cost_finish_data_row_count+1,$this->cost_finish_row_start+1,'8.','Washes/Finishes');
                //FINISH CATEGORY DETAILS
                //EXPORT CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_export_row_start,'9.Export/ Import');
                $this->exportCategoryData($event,$this->cost_export_row_start+1,$this->costing_sheet->cost_exports);
                $this->exportCategoryFooter($event,$this->cost_export_row_start+$this->cost_export_data_row_count+1,$this->cost_export_row_start+1,'9.','Export/Import');
                //EXPORT CATEGORY DETAILS
                //TESTING CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_testing_row_start,'10.Testings');
                $this->exportCategoryData($event,$this->cost_testing_row_start+1,$this->costing_sheet->cost_testings);
                $this->exportCategoryFooter($event,$this->cost_testing_row_start+$this->cost_testing_data_row_count+1,$this->cost_testing_row_start+1,'10.','Testings');
                //TESTING CATEGORY DETAILS
                //OTHER CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_other_row_start,'11.Others');
                $this->exportCategoryData($event,$this->cost_other_row_start+1,$this->costing_sheet->cost_others);
                $this->exportCategoryFooter($event,$this->cost_other_row_start+$this->cost_other_data_row_count+1,$this->cost_other_row_start+1,'11.','Others');
                //OTHER CATEGORY DETAILS
                //LABOR CATEGORY DETAILS
                $this->exportCategoryHeader($event,$this->cost_labor_row_start,'12.Labors');
                $this->exportCategoryData($event,$this->cost_labor_row_start+1,$this->costing_sheet->cost_labors);
                $this->exportCategoryFooter($event,$this->cost_labor_row_start+$this->cost_labor_data_row_count+1,$this->cost_labor_row_start+1,'12.','Labors');
                //LABOR CATEGORY DETAILS
                //TOTAL COST DETAILS
                $this->exportTotalFooter($event,$this->cost_bottom_row_start-1,$this->cost_fabric_row_start+1,$this->cost_labor_row_start+$this->cost_labor_data_row_count+1);
                //TOTAL COST DETAILS
                //SUMMARY DETAILS
                $this->exportCsSummary($event);
                //SUMMARY DETAILS
                //SKETCHES DETAILS
                $this->exportSketches($event);
                //SKETCHES DETAILS
                //CHART DETAILS
                $this->exportChart($event);
                //CHART DETAILS
                //REMARKS DETAILS
                $this->exportRemarks($event);
                //REMARKS DETAILS
                //LABOR COST DETAILS
                $this->exportLaborCostDetails($event);
                //LABOR COST DETAILS
                //MOQ DETAILS
                $this->exportMOQs($event);
                //MOQ COST DETAILS


            },
            AfterSheet::class => function(AfterSheet $event){

                $numberSeparator = "#,##0";
                $numberSeparatorDecimal = "#,##0.00";
                $currencySeparator = $this->costing_sheet['cost_currency']."#,##0";
                $currencySeparatorDecimal = $this->costing_sheet['cost_currency']."#,##0.00";
                $percentage = "0%";
                $percentageDecimal = "0.00%";

                $event->sheet
                    ->getStyle('H11:H13')
                    ->getNumberFormat()
                    ->setFormatCode($numberSeparator);
                $event->sheet
                    ->getStyle('P11:P12')
                    ->getNumberFormat()
                    ->setFormatCode($numberSeparator);

                $event->sheet
                    ->getStyle('O'.$this->cost_fabric_row_start.':O' . $this->cost_bottom_row_start-1)
                    ->getNumberFormat()
                    ->setFormatCode($numberSeparator);
                $event->sheet
                    ->getStyle('P'.$this->cost_fabric_row_start.':P' . $this->cost_bottom_row_start-1)
                    ->getNumberFormat()
                    ->setFormatCode($percentage);
                $event->sheet
                    ->getStyle('Q'.$this->cost_fabric_row_start.':Q' . $this->cost_bottom_row_start-1)
                    ->getNumberFormat()
                    ->setFormatCode($numberSeparatorDecimal);
                $event->sheet
                    ->getStyle('R'.$this->cost_fabric_row_start.':R' . $this->cost_bottom_row_start-1)
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);
                $event->sheet
                    ->getStyle('S'.$this->cost_fabric_row_start.':S' . $this->cost_bottom_row_start-1)
                    ->getNumberFormat()
                    ->setFormatCode($percentage);
                $event->sheet
                    ->getStyle('S'.$this->cost_bottom_row_start.':S' . ($this->cost_bottom_second_row_start+2))
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);
                $event->sheet
                    ->getStyle('T7:T' . ($this->cost_bottom_row_start-1))
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);

                $event->sheet
                    ->getStyle('U'.$this->cost_bottom_row_start.':U'. ($this->cost_bottom_second_row_start+2))
                    ->getNumberFormat()
                    ->setFormatCode($percentageDecimal);

                $event->sheet
                    ->getStyle('K'.($this->cost_bottom_second_row_start+7).':L'. ($this->cost_bottom_second_row_start+10))
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);

                $event->sheet
                    ->getStyle('K'.($this->cost_bottom_second_row_start+1).':L'. ($this->cost_bottom_second_row_start+1))
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);

                $event->sheet
                    ->getStyle('K'.($this->cost_bottom_second_row_start+2).':L'. ($this->cost_bottom_second_row_start+6))
                    ->getNumberFormat()
                    ->setFormatCode($numberSeparator);

                $event->sheet
                    ->getStyle('O'.($this->cost_bottom_second_row_start+5).':U'. ($this->cost_bottom_second_row_start+5))
                    ->getNumberFormat()
                    ->setFormatCode($percentage);

                $event->sheet
                    ->getStyle('O'.($this->cost_bottom_second_row_start+6).':U'. ($this->cost_bottom_second_row_start+6))
                    ->getNumberFormat()
                    ->setFormatCode($currencySeparatorDecimal);

                $label = [new DataSeriesValues('String', 'Worksheet!$B$1', null, 1)]; ;
                $categories = [new DataSeriesValues('String', 'Worksheet!$O'.($this->cost_bottom_row_start+1).':$O'.($this->cost_bottom_row_start+12), null, 4)];
                $values     = [new DataSeriesValues('Number', 'Worksheet!$S'.($this->cost_bottom_row_start+1).':$S'.($this->cost_bottom_row_start+12), null, 4)];

                $series = new DataSeries(DataSeries::TYPE_PIECHART, DataSeries::GROUPING_STANDARD,
                    range(0, \count($values) - 1), $label, $categories, $values);
                $plot = new PlotArea(null, [$series]);

                $legend = new Legend();
                $chart = new Chart('Costing Sheet Chart', new Title('Costing Sheet Chart'), $legend, $plot);

                $chart->setTopLeftPosition('J'.($this->cost_bottom_row_start+1));
                $chart->setBottomRightPosition('M'.($this->cost_bottom_row_start+13));


                $event->sheet->getDelegate()->addChart($chart);

            }
        ];
    }
    protected function setColumnsWidth($event){
        $event->sheet->getColumnDimension('B')->setWidth(7);
        $event->sheet->getColumnDimension('C')->setWidth(11);
        $event->sheet->getColumnDimension('D')->setWidth(10);
        $event->sheet->getColumnDimension('E')->setWidth(12);
        $event->sheet->getColumnDimension('F')->setWidth(10);
        $event->sheet->getColumnDimension('G')->setWidth(10);
        $event->sheet->getColumnDimension('H')->setWidth(13);
        $event->sheet->getColumnDimension('I')->setWidth(13);
        $event->sheet->getColumnDimension('J')->setWidth(19);
        $event->sheet->getColumnDimension('K')->setWidth(13);
        $event->sheet->getColumnDimension('L')->setWidth(13);
        $event->sheet->getColumnDimension('M')->setWidth(7);
        $event->sheet->getColumnDimension('N')->setWidth(10);
        $event->sheet->getColumnDimension('O')->setWidth(8);
        $event->sheet->getColumnDimension('P')->setWidth(10);
        $event->sheet->getColumnDimension('Q')->setWidth(11);
        $event->sheet->getColumnDimension('R')->setWidth(8);
        $event->sheet->getColumnDimension('S')->setWidth(10);
        $event->sheet->getColumnDimension('T')->setWidth(12);
        $event->sheet->getColumnDimension('U')->setWidth(15);
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
        $event->sheet->setCellValue('H18','客户料号')->getStyle('H18')->applyFromArray($style_ch)->applyFromArray(['font' => ['size' => 7]]);
        $event->sheet->setCellValue('I18','供应商货号')->getStyle('I18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('J18','物料描述')->getStyle('J18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('K18','部位名称')->getStyle('K18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('L18','供应商')->getStyle('L18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('M18','单位')->getStyle('M18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('N18','规格')->getStyle('N18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('O18','用量')->getStyle('O18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('P18','损耗')->getStyle('P18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('Q18','总用量')->getStyle('Q18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('R18','单价')->getStyle('R18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('S18','处理')->getStyle('S18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('T18','单价')->getStyle('T18')->applyFromArray($style_ch);
        $event->sheet->setCellValue('U18','评论')->getStyle('U18')->applyFromArray($style_ch);

        $event->sheet->mergeCells($this->letters[0].'18:'.$this->letters[$this->cost_sizes_count-1] . '18');
        $event->sheet->setCellValue($this->letters[0].'18','Size尺寸')->getStyle($this->letters[0].'18:'.$this->letters[$this->cost_sizes_count-1] . '18')->applyFromArray($style_ch);
        $event->sheet->mergeCells($this->letters[$this->cost_sizes_count].'18:'.$this->letters[$this->cost_sizes_count+$this->cost_colors_count-1] . '18');
        $event->sheet->setCellValue($this->letters[$this->cost_sizes_count].'18','Color颜色')->getStyle($this->letters[$this->cost_sizes_count].'18:'.$this->letters[$this->cost_sizes_count+$this->cost_colors_count-1] . '18')->applyFromArray($style_ch);

    }

    protected function exportHeaderDetails($event)
    {
        $event->sheet->mergeCells('B3:C3');$event->sheet->mergeCells('B4:C4');$event->sheet->mergeCells('B5:C5');$event->sheet->mergeCells('B6:C6');$event->sheet->mergeCells('B7:C7');$event->sheet->mergeCells('B8:C8');
        $event->sheet->mergeCells('D3:E3');$event->sheet->mergeCells('D4:E4');$event->sheet->mergeCells('D5:E5');$event->sheet->mergeCells('D6:E6');$event->sheet->mergeCells('D7:E7');$event->sheet->mergeCells('D8:E8');
        $event->sheet->mergeCells('F3:G3');$event->sheet->mergeCells('F4:G4');$event->sheet->mergeCells('F5:G5');$event->sheet->mergeCells('F6:G6');$event->sheet->mergeCells('F7:G7');$event->sheet->mergeCells('F8:G8');
        $event->sheet->mergeCells('H3:I3');$event->sheet->mergeCells('H4:I4');$event->sheet->mergeCells('H5:I5');$event->sheet->mergeCells('H6:I6');$event->sheet->mergeCells('H7:I7');$event->sheet->mergeCells('H8:I8');
        $event->sheet->mergeCells('M3:O3');$event->sheet->mergeCells('M4:O4');$event->sheet->mergeCells('M5:O5');$event->sheet->mergeCells('M6:O6');$event->sheet->mergeCells('M7:O7');$event->sheet->mergeCells('M8:O8');
        $event->sheet->mergeCells('P3:Q3');$event->sheet->mergeCells('P4:Q4');$event->sheet->mergeCells('P5:Q5');$event->sheet->mergeCells('P6:Q6');$event->sheet->mergeCells('P7:Q7');$event->sheet->mergeCells('P8:Q8');
        $event->sheet->mergeCells('R3:S3');$event->sheet->mergeCells('R4:S4');$event->sheet->mergeCells('R5:S5');$event->sheet->mergeCells('R6:S6');$event->sheet->mergeCells('R7:S7');$event->sheet->mergeCells('R8:S8');
        $event->sheet->mergeCells('T3:U3');$event->sheet->mergeCells('T4:U4');$event->sheet->mergeCells('T5:U5');$event->sheet->mergeCells('T6:U6');$event->sheet->mergeCells('T7:U7');$event->sheet->mergeCells('T8:U8');

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
        $event->sheet->setCellValue('F7','SIZE CODES :')->getStyle('F7')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('F8','COSTING SIZE :')->getStyle('F8')->applyFromArray($style_header_name);

        $event->sheet->setCellValue('H3',$this->costing_sheet->cost_division);
        $event->sheet->setCellValue('H4',$this->costing_sheet->cost_version);
        $event->sheet->setCellValue('H5',$this->costing_sheet->cost_special_cons);
        $event->sheet->setCellValue('H6',$this->costing_sheet->cost_gender);
        $event->sheet->setCellValue('H7',$this->costing_sheet->cost_size_code);
        $event->sheet->setCellValue('H8',$this->costing_sheet->cost_costing_size);

        $event->sheet->setCellValue('M3','STYLE # :')->getStyle('M3')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M4','STYLE NAME :')->getStyle('M4')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M5','COLOR # :')->getStyle('M5')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M6','COLOR NAME :')->getStyle('M6')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M7','NO OF COLOR :')->getStyle('M7')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M8','T/P CODE :')->getStyle('M8')->applyFromArray($style_header_name);

        $event->sheet->setCellValue('P3',$this->costing_sheet->cost_style);
        $event->sheet->setCellValue('P4',$this->costing_sheet->cost_style_name);
        $event->sheet->setCellValue('P5',$this->costing_sheet->cost_color);
        $event->sheet->setCellValue('P6',$this->costing_sheet->cost_color);
        $event->sheet->setCellValue('P7',$this->costing_sheet->cost_no_of_color);
        $event->sheet->setCellValue('P8',$this->costing_sheet->cost_tp_code);

        $event->sheet->setCellValue('R3','DATE :')->getStyle('R3')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('R4','COSTING STAGE :')->getStyle('R4')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('R5','STATUS :')->getStyle('R5')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('R6','CURRENCY :')->getStyle('R6')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('R7','TARGET FOB :')->getStyle('R7')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('R8',$this->costing_sheet->cost_total_fob_cm)->getStyle('R8')->applyFromArray($style_header_name);

        $event->sheet->setCellValue('T3',$this->costing_sheet->cost_date);
        $event->sheet->setCellValue('T4',$this->costing_sheet->cost_costing_stage);
        $event->sheet->setCellValue('T5',$this->costing_sheet->cost_status);
        $event->sheet->setCellValue('T6',$this->costing_sheet->cost_currency);
        $event->sheet->setCellValue('T7',$this->costing_sheet->cost_target_fob);
        $event->sheet->setCellValue('T8',$this->costing_sheet->cost_total_fob);

        $event->sheet->mergeCells('B11:C11');$event->sheet->mergeCells('B12:C12');$event->sheet->mergeCells('B13:C13');$event->sheet->mergeCells('B14:C14');$event->sheet->mergeCells('B15:C15');
        $event->sheet->mergeCells('D11:E11');$event->sheet->mergeCells('D12:E12');$event->sheet->mergeCells('D13:E13');$event->sheet->mergeCells('D14:E14');$event->sheet->mergeCells('D15:E15');
        $event->sheet->mergeCells('F11:G11');$event->sheet->mergeCells('F12:G12');$event->sheet->mergeCells('F13:G13');$event->sheet->mergeCells('F14:G14');$event->sheet->mergeCells('F15:G15');
        $event->sheet->mergeCells('H11:I11');$event->sheet->mergeCells('H12:I12');$event->sheet->mergeCells('H13:I13');$event->sheet->mergeCells('H14:I14');$event->sheet->mergeCells('H15:I15');
        $event->sheet->mergeCells('M11:O11');$event->sheet->mergeCells('M12:O12');
        $event->sheet->mergeCells('P11:Q11');$event->sheet->mergeCells('P12:Q12');
        $event->sheet->mergeCells('R11:S11');$event->sheet->mergeCells('R12:S12');
        $event->sheet->mergeCells('T11:U11');$event->sheet->mergeCells('T12:U12');

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

        $event->sheet->setCellValue('M11','PRODUCTION LEADTIME :')->getStyle('M11')->applyFromArray($style_header_name);
        $event->sheet->setCellValue('M12','GREIGE REDUCED :')->getStyle('M12')->applyFromArray($style_header_name);

        $event->sheet->setCellValue('P11',$this->costing_sheet->cost_production_lead_time);
        $event->sheet->setCellValue('P12',$this->costing_sheet->cost_griege_reduced);

        $event->sheet->setCellValue('R11','Days')->getStyle('R11')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);
        $event->sheet->setCellValue('R12','Days')->getStyle('R12')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);
        $event->sheet->setCellValue('T12','(based on Material in-house)')->getStyle('T12')->applyFromArray(['font' => ['size' => 9, 'bold' => true,]]);

    }

    protected function exportCategoryHeader($event,$row_start, $category)
    {
        $style_head = [
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
                'color' => ['argb' => '7ab2ff']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];
        $event->sheet->setCellValue('B' . $row_start,'Item')->getStyle('B' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('C' . $row_start,'Component')->getStyle('C' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('D' . $row_start,'Material ID')->getStyle('D' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('E' . $row_start,'Category')->getStyle('E' . $row_start)->applyFromArray($style_head)->applyFromArray(['alignment' => [
            'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT, 'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER, 'wrapText' => true,]]);
        $event->sheet->setCellValue('F' . $row_start,'Nominated/ Non-nominated')->getStyle('F' . $row_start)->applyFromArray($style_head)->applyFromArray(['font' => ['size' => 5]]);
        $event->sheet->setCellValue('G' . $row_start,'COO')->getStyle('G' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('H' . $row_start,'Customer Material#')->getStyle('H' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('I' . $row_start,'Supplier Material#')->getStyle('I' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('J' . $row_start,'Description')->getStyle('J' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('K' . $row_start,'Location/ Position')->getStyle('K' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('L' . $row_start,'Mill/Supplier')->getStyle('L' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('M' . $row_start,'UOM')->getStyle('M' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('N' . $row_start,'Width')->getStyle('N' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('O' . $row_start,'Usage')->getStyle('O' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('P' . $row_start,'Wastage')->getStyle('P' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('Q' . $row_start,'Gross Yield')->getStyle('Q' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('R' . $row_start,'Unit Cost')->getStyle('R' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('S' . $row_start,'Handling')->getStyle('S' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('T' . $row_start,'Total')->getStyle('T' . $row_start)->applyFromArray($style_head);
        $event->sheet->setCellValue('U' . $row_start,'Comment')->getStyle('U' . $row_start)->applyFromArray($style_head);
        for($w = 0;$w < $this->cost_sizes_count;$w++){
            $event->sheet->setCellValue($this->letters[$w].$row_start,$this->cost_sizes_head_name[$w])->getStyle($this->letters[$w].$row_start)->applyFromArray($style_head);
        }
        $e =0;
        for($r = $this->cost_sizes_count;$r< ($this->cost_sizes_count+$this->cost_colors_count);$r++){
            $event->sheet->setCellValue($this->letters[$r].$row_start,$this->cost_colors_head_name[$e])->getStyle($this->letters[$r].$row_start)->applyFromArray($style_head);
        $e++;
        }
    }

    protected function exportCategoryData($event, $row_start, $cost_datas)
    {
        $style_data = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'wrapText' => true,
            ],
            'font' => [
                'size' => 10,
            ],
        ];

        foreach($cost_datas as $data){
            $event->sheet->setCellValue('B' . $row_start,$data['cost_item_no'])->getStyle('B' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('C' . $row_start,$data['cost_component'])->getStyle('C' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('D' . $row_start,$data['cost_material_id'])->getStyle('D' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('E' . $row_start,$data['cost_category_data'])->getStyle('E' . $row_start)->applyFromArray($style_data)->applyFromArray(['alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,'wrapText' => true,]]);
            $event->sheet->setCellValue('F' . $row_start,$data['cost_nominated'])->getStyle('F' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('G' . $row_start,$data['cost_coo'])->getStyle('G' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('H' . $row_start,$data['cost_customer_mtl'])->getStyle('H' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('I' . $row_start,$data['cost_supplier_mtl'])->getStyle('I' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('J' . $row_start,$data['cost_description'])->getStyle('J' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('K' . $row_start,$data['cost_location'])->getStyle('K' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('L' . $row_start,$data['cost_mill_supplier'])->getStyle('L' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('M' . $row_start,$data['cost_uom'])->getStyle('M' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('N' . $row_start,$data['cost_width'])->getStyle('N' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('O' . $row_start,$data['cost_usage'])->getStyle('O' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('P' . $row_start,($data['cost_wastage']/100))->getStyle('P' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('Q' . $row_start,'=O'.$row_start. '*(P'.$row_start.')+O'.$row_start)->getStyle('Q' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('R' . $row_start,$data['cost_unit_cost'])->getStyle('R' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('S' . $row_start,($data['cost_handling']/100))->getStyle('S' . $row_start)->applyFromArray($style_data);
            $event->sheet->setCellValue('T' . $row_start,'=Q'.$row_start.'*R'.$row_start.'*(1+(S'.$row_start.'))')->getStyle('T' . $row_start)->applyFromArray($style_data)->applyFromArray(['alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,'wrapText' => true,]]);;
            $event->sheet->setCellValue('U' . $row_start,$data['cost_comment'])->getStyle('U' . $row_start)->applyFromArray($style_data);

            $a = 1;
            for($w = 0;$w < $this->cost_sizes_count;$w++){
                $cost_array_key = 'cost_size_' . $a;
                $event->sheet->setCellValue($this->letters[$w].$row_start,$data[$cost_array_key])->getStyle($this->letters[$w].$row_start)->applyFromArray($style_data);
                $a++;
            }
            $e =0;
            $j=0;
            for($r = $this->cost_sizes_count;$r< ($this->cost_sizes_count+$this->cost_colors_count);$r++){
                $cost_array_key = 'cost_color_' . $j;
                $event->sheet->setCellValue($this->letters[$r].$row_start,$data[$cost_array_key])->getStyle($this->letters[$r].$row_start)->applyFromArray($style_data);
                $e++;
                $j++;
            }

            $row_start++;
        }
    }

    protected function exportCategoryFooter($event, $row_start,$data_start, $string1, $string2)
    {
        $data_end = $row_start -1;
        $style_footer = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];
        $event->sheet->setCellValue('E' . $row_start,$string1.$string2)->getStyle('E' . $row_start)->applyFromArray($style_footer);
        $event->sheet->setCellValue('N' . $row_start,$string1.' Total Cost - '. $string2)->getStyle('N' . $row_start)->applyFromArray($style_footer);
        $event->sheet->setCellValue('T' . $row_start,'=SUBTOTAL(9,T'.$data_start.':T'.$data_end.')')->getStyle('T' . $row_start)->applyFromArray(['font' => ['bold'=>true]]);
        $event->sheet->getStyle('B' . $row_start . ':U'. $row_start)->applyFromArray(['borders' => ['outline' => ['borderStyle' => Border::BORDER_THIN,],],
            'fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'color' => ['argb' => '95fcb2']],]);
    }

    protected function exportTotalFooter($event, $row_start, $fob_start, $fob_end)
    {
        $style_total = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
                'color' => ['argb' => '3a05fa'],
            ],
        ];
        $event->sheet->setCellValue('E' . $row_start,'Total Cost')->getStyle('E' . $row_start)->applyFromArray($style_total);
        $event->sheet->setCellValue('N' . $row_start,'Total Cost - FOB')->getStyle('N' . $row_start)->applyFromArray($style_total);
        $event->sheet->setCellValue('T' . $row_start,'=SUBTOTAL(9,T'.$fob_start.':T'.$fob_end.')')->getStyle('T' . $row_start)->applyFromArray($style_total)->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,],]);
        $event->sheet->getStyle('B' . $row_start . ':U'. $row_start)->applyFromArray(['borders' => ['outline' => ['borderStyle' => Border::BORDER_THIN,],],
            'fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'color' => ['argb' => '7ab2ff']],]);

    }

    protected function exportCsSummary($event)
    {
        $style_summary = [
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
                'color' => ['argb' => '95fcb2']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];

        $event->sheet->mergeCells('N'.$this->cost_bottom_row_start.':U'.$this->cost_bottom_row_start);
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+1).':R'.($this->cost_bottom_row_start+1));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+2).':R'.($this->cost_bottom_row_start+2));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+3).':R'.($this->cost_bottom_row_start+3));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+4).':R'.($this->cost_bottom_row_start+4));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+5).':R'.($this->cost_bottom_row_start+5));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+6).':R'.($this->cost_bottom_row_start+6));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+7).':R'.($this->cost_bottom_row_start+7));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+8).':R'.($this->cost_bottom_row_start+8));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+9).':R'.($this->cost_bottom_row_start+9));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+10).':R'.($this->cost_bottom_row_start+10));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+11).':R'.($this->cost_bottom_row_start+11));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+12).':R'.($this->cost_bottom_row_start+12));
        $event->sheet->mergeCells('O'.($this->cost_bottom_row_start+13).':R'.($this->cost_bottom_row_start+13));

        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+1).':T'.($this->cost_bottom_row_start+1));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+2).':T'.($this->cost_bottom_row_start+2));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+3).':T'.($this->cost_bottom_row_start+3));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+4).':T'.($this->cost_bottom_row_start+4));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+5).':T'.($this->cost_bottom_row_start+5));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+6).':T'.($this->cost_bottom_row_start+6));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+7).':T'.($this->cost_bottom_row_start+7));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+8).':T'.($this->cost_bottom_row_start+8));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+9).':T'.($this->cost_bottom_row_start+9));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+10).':T'.($this->cost_bottom_row_start+10));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+11).':T'.($this->cost_bottom_row_start+11));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+12).':T'.($this->cost_bottom_row_start+12));
        $event->sheet->mergeCells('S'.($this->cost_bottom_row_start+13).':T'.($this->cost_bottom_row_start+13));

        $event->sheet->setCellValue('N' . $this->cost_bottom_row_start,'COSTING SHEET BREAKDOWN')
            ->getStyle('N'.$this->cost_bottom_row_start.':U'.$this->cost_bottom_row_start)->applyFromArray($style_summary);
        $event->sheet->getStyle('N' . ($this->cost_bottom_row_start+1) . ':U'. ($this->cost_bottom_second_row_start-2))->applyFromArray($style_summary);
        $event->sheet->getStyle('N' . ($this->cost_bottom_second_row_start-1) . ':U'. ($this->cost_bottom_second_row_start-1))->applyFromArray($style_summary);

        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+1),1);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+1),'FABRIC')->getStyle('O' . ($this->cost_bottom_row_start+1))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+2),2);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+2),'TRIM')->getStyle('O' . ($this->cost_bottom_row_start+2))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+3),3);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+3),'ZIPPER')->getStyle('O' . ($this->cost_bottom_row_start+3))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+4),4);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+4),'EMBELISHMENT')->getStyle('O' . ($this->cost_bottom_row_start+4))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+5),5);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+5),'LABEL')->getStyle('O' . ($this->cost_bottom_row_start+5))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+6),6);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+6),'THREAD')->getStyle('O' . ($this->cost_bottom_row_start+6))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+7),7);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+7),'PACKAGE')->getStyle('O' . ($this->cost_bottom_row_start+7))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+8),8);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+8),'FINISH')->getStyle('O' . ($this->cost_bottom_row_start+8))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+9),9);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+9),'EXPORT')->getStyle('O' . ($this->cost_bottom_row_start+9))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+10),10);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+10),'TESTING')->getStyle('O' . ($this->cost_bottom_row_start+10))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+11),11);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+11),'OTHER')->getStyle('O' . ($this->cost_bottom_row_start+11))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('N' . ($this->cost_bottom_row_start+12),12);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+12),'LABOR')->getStyle('O' . ($this->cost_bottom_row_start+12))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,]]);
        $event->sheet->setCellValue('O' . ($this->cost_bottom_row_start+13),'TOTAL COST - FOB')
            ->getStyle('O' . ($this->cost_bottom_row_start+13))->applyFromArray([
                'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,],
                'font' => ['size' => 10, 'bold' => true, 'color' => ['argb' => '3a05fa'],],]);


        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+1),'=T'.($this->cost_fabric_row_start+$this->cost_fabric_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+1))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+2),'=T'.($this->cost_trim_row_start+$this->cost_trim_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+2))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+3),'=T'.($this->cost_zipper_row_start+$this->cost_zipper_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+3))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+4),'=T'.($this->cost_embelishment_row_start+$this->cost_embelishment_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+4))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+5),'=T'.($this->cost_label_row_start+$this->cost_label_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+5))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+6),'=T'.($this->cost_thread_row_start+$this->cost_thread_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+6))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+7),'=T'.($this->cost_package_row_start+$this->cost_package_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+7))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+8),'=T'.($this->cost_finish_row_start+$this->cost_finish_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+8))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+9),'=T'.($this->cost_export_row_start+$this->cost_export_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+9))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+10),'=T'.($this->cost_testing_row_start+$this->cost_testing_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+10))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+11),'=T'.($this->cost_other_row_start+$this->cost_other_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+11))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+12),'=T'.($this->cost_labor_row_start+$this->cost_labor_data_row_count+1))->getStyle('S' . ($this->cost_bottom_row_start+12))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('S' . ($this->cost_bottom_row_start+13),'=SUM(S'.($this->cost_bottom_row_start+1).':S'.($this->cost_bottom_row_start+12).')')
            ->getStyle('S' . ($this->cost_bottom_row_start+13))->applyFromArray([
                'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,],
                'font' => ['size' => 10, 'bold' => true, 'color' => ['argb' => '3a05fa'],],]);

        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+1),'=S'. ($this->cost_bottom_row_start+1).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+1))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+2),'=S'. ($this->cost_bottom_row_start+2).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+2))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+3),'=S'. ($this->cost_bottom_row_start+3).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+3))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+4),'=S'. ($this->cost_bottom_row_start+4).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+4))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+5),'=S'. ($this->cost_bottom_row_start+5).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+5))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+6),'=S'. ($this->cost_bottom_row_start+6).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+6))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+7),'=S'. ($this->cost_bottom_row_start+7).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+7))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+8),'=S'. ($this->cost_bottom_row_start+8).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+8))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+9),'=S'. ($this->cost_bottom_row_start+9).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+9))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+10),'=S'. ($this->cost_bottom_row_start+10).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+10))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+11),'=S'. ($this->cost_bottom_row_start+11).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+11))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+12),'=S'. ($this->cost_bottom_row_start+12).'/S'.($this->cost_bottom_row_start+13))->getStyle('T' . ($this->cost_bottom_row_start+12))->applyFromArray(['alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,]]);
        $event->sheet->setCellValue('U' . ($this->cost_bottom_row_start+13),'=SUM(U'.($this->cost_bottom_row_start+1).':U'.($this->cost_bottom_row_start+12).')')
            ->getStyle('U' . ($this->cost_bottom_row_start+13))->applyFromArray([

                'font' => ['size' => 10, 'bold' => true, 'color' => ['argb' => '3a05fa'],],]);

    }

    protected function exportSketches( $event)
    {
        $style_sketches = [
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
                'color' => ['argb' => 'f7e77c']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];
        $event->sheet->mergeCells('B'.$this->cost_bottom_row_start.':I'.$this->cost_bottom_row_start);
        $event->sheet->mergeCells('B'.($this->cost_bottom_row_start+1).':C'.($this->cost_bottom_row_start+1));
        $event->sheet->mergeCells('D'.($this->cost_bottom_row_start+1).':E'.($this->cost_bottom_row_start+1));
        $event->sheet->mergeCells('F'.($this->cost_bottom_row_start+1).':G'.($this->cost_bottom_row_start+1));
        $event->sheet->mergeCells('H'.($this->cost_bottom_row_start+1).':I'.($this->cost_bottom_row_start+1));

        $event->sheet->setCellValue('B'.$this->cost_bottom_row_start,'SKETCHES')
            ->getStyle('B'.$this->cost_bottom_row_start.':I'.$this->cost_bottom_row_start)->applyFromArray($style_sketches);
        $event->sheet->setCellValue('B'.($this->cost_bottom_row_start+1),'FRONT')
            ->getStyle('B'.($this->cost_bottom_row_start+1).':C'.($this->cost_bottom_row_start+1))->applyFromArray($style_sketches);
        $event->sheet->setCellValue('D'.($this->cost_bottom_row_start+1),'BACK')
            ->getStyle('D'.($this->cost_bottom_row_start+1).':E'.($this->cost_bottom_row_start+1))->applyFromArray($style_sketches);
        $event->sheet->setCellValue('F'.($this->cost_bottom_row_start+1),'LEFT')
            ->getStyle('F'.($this->cost_bottom_row_start+1).':G'.($this->cost_bottom_row_start+1))->applyFromArray($style_sketches);
        $event->sheet->setCellValue('H'.($this->cost_bottom_row_start+1),'RIGHT')
            ->getStyle('H'.($this->cost_bottom_row_start+1).':I'.($this->cost_bottom_row_start+1))->applyFromArray($style_sketches);
        $event->sheet->getStyle('B'.($this->cost_bottom_row_start+2).':C'.($this->cost_bottom_second_row_start-1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('D'.($this->cost_bottom_row_start+2).':E'.($this->cost_bottom_second_row_start-1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('F'.($this->cost_bottom_row_start+2).':G'.($this->cost_bottom_second_row_start-1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('H'.($this->cost_bottom_row_start+2).':I'.($this->cost_bottom_second_row_start-1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);

        //DISPLAY PHOTO
        $worksheet = $event->sheet->getDelegate();

        $this->setFrontSketch($worksheet);
        $this->setBackSketch($worksheet);
        $this->setLeftSketch($worksheet);
        $this->setRightSketch($worksheet);


    }

    protected function exportChart(BeforeSheet $event)
    {
        $style_chart = [
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
                'color' => ['argb' => 'f7e77c']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];

        $event->sheet->mergeCells('J'.$this->cost_bottom_row_start.':M'.$this->cost_bottom_row_start);
        $event->sheet->setCellValue('J'.$this->cost_bottom_row_start,'CHART')
            ->getStyle('J'.$this->cost_bottom_row_start.':M'.$this->cost_bottom_row_start)->applyFromArray($style_chart);
        $event->sheet->getStyle('J'.($this->cost_bottom_row_start+1).':M'.($this->cost_bottom_second_row_start-1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
    }

    protected function exportRemarks($event)
    {
        $style_remark = [
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
                'color' => ['argb' => 'c9c9c3']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];

        $event->sheet->mergeCells('B'.$this->cost_bottom_second_row_start.':I'.$this->cost_bottom_second_row_start);
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+1).':I'.($this->cost_bottom_second_row_start+1));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+2).':I'.($this->cost_bottom_second_row_start+2));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+3).':I'.($this->cost_bottom_second_row_start+3));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+4).':I'.($this->cost_bottom_second_row_start+4));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+5).':I'.($this->cost_bottom_second_row_start+5));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+6).':I'.($this->cost_bottom_second_row_start+6));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+7).':I'.($this->cost_bottom_second_row_start+7));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+8).':I'.($this->cost_bottom_second_row_start+8));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+9).':I'.($this->cost_bottom_second_row_start+9));
        $event->sheet->mergeCells('C'.($this->cost_bottom_second_row_start+10).':I'.($this->cost_bottom_second_row_start+10));
        $event->sheet->setCellValue('B'.$this->cost_bottom_second_row_start,'REMARKS / SPECIAL REQUIREMENTS')
            ->getStyle('B'.$this->cost_bottom_second_row_start.':I'.$this->cost_bottom_second_row_start)->applyFromArray($style_remark);
        $event->sheet->getStyle('B'.($this->cost_bottom_second_row_start+1).':I'.($this->cost_bottom_second_row_start+10))->applyFromArray([ 'borders' => [
        'outline' => ['borderStyle' => Border::BORDER_THIN,],]]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+1),1)->getStyle('B'.($this->cost_bottom_second_row_start+1))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+2),2)->getStyle('B'.($this->cost_bottom_second_row_start+2))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+3),3)->getStyle('B'.($this->cost_bottom_second_row_start+3))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+4),4)->getStyle('B'.($this->cost_bottom_second_row_start+4))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+5),5)->getStyle('B'.($this->cost_bottom_second_row_start+5))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+6),6)->getStyle('B'.($this->cost_bottom_second_row_start+6))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+7),7)->getStyle('B'.($this->cost_bottom_second_row_start+7))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+8),8)->getStyle('B'.($this->cost_bottom_second_row_start+8))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+9),9)->getStyle('B'.($this->cost_bottom_second_row_start+9))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);
        $event->sheet->setCellValue('B'.($this->cost_bottom_second_row_start+10),10)->getStyle('B'.($this->cost_bottom_second_row_start+10))->applyFromArray([      'alignment' => ['horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,],]);

        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+1),$this->costing_sheet['cost_remarks'][0]['cost_remarks_1']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+2),$this->costing_sheet['cost_remarks'][0]['cost_remarks_2']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+3),$this->costing_sheet['cost_remarks'][0]['cost_remarks_3']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_remarks'][0]['cost_remarks_4']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+5),$this->costing_sheet['cost_remarks'][0]['cost_remarks_5']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+6),$this->costing_sheet['cost_remarks'][0]['cost_remarks_6']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+7),$this->costing_sheet['cost_remarks'][0]['cost_remarks_7']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+8),$this->costing_sheet['cost_remarks'][0]['cost_remarks_8']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+9),$this->costing_sheet['cost_remarks'][0]['cost_remarks_9']);
        $event->sheet->setCellValue('C'.($this->cost_bottom_second_row_start+10),$this->costing_sheet['cost_remarks'][0]['cost_remarks_10']);

    }

    protected function exportLaborCostDetails( $event)
    {
        $style_labor = [
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
                'color' => ['argb' => 'c9c9c3']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];

        $event->sheet->mergeCells('J'.$this->cost_bottom_second_row_start.':M'.$this->cost_bottom_second_row_start);
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+1).':M'.($this->cost_bottom_second_row_start+1));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+2).':M'.($this->cost_bottom_second_row_start+2));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+3).':M'.($this->cost_bottom_second_row_start+3));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+4).':M'.($this->cost_bottom_second_row_start+4));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+5).':M'.($this->cost_bottom_second_row_start+5));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+6).':M'.($this->cost_bottom_second_row_start+6));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+7).':M'.($this->cost_bottom_second_row_start+7));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+8).':M'.($this->cost_bottom_second_row_start+8));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+9).':M'.($this->cost_bottom_second_row_start+9));
        $event->sheet->mergeCells('L'.($this->cost_bottom_second_row_start+10).':M'.($this->cost_bottom_second_row_start+10));

        $event->sheet->setCellValue('J'.$this->cost_bottom_second_row_start,'LABOR COSTS')
            ->getStyle('J'.$this->cost_bottom_second_row_start.':M'.$this->cost_bottom_second_row_start)->applyFromArray($style_labor);
        $event->sheet->getStyle('J'.($this->cost_bottom_second_row_start+1).':M'.($this->cost_bottom_second_row_start+10))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);

        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+1),'LABOR COST PER PC')->getStyle('J'.($this->cost_bottom_second_row_start+1))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+2),'SMV')->getStyle('J'.($this->cost_bottom_second_row_start+2))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+3),'HOURS')->getStyle('J'.($this->cost_bottom_second_row_start+3))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+4),'DAYS')->getStyle('J'.($this->cost_bottom_second_row_start+4))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+5),'OPERATORS')->getStyle('J'.($this->cost_bottom_second_row_start+5))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+6),'OUTPUT PER DAY')->getStyle('J'.($this->cost_bottom_second_row_start+6))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+7),'MONTHLY WAGE')->getStyle('J'.($this->cost_bottom_second_row_start+7))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+8),'HOURLY WAGE')->getStyle('J'.($this->cost_bottom_second_row_start+8))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+9),'HW WITH INDIRECT')->getStyle('J'.($this->cost_bottom_second_row_start+9))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);
        $event->sheet->setCellValue('J'.($this->cost_bottom_second_row_start+10),'WAGES PER MINUTE')->getStyle('J'.($this->cost_bottom_second_row_start+10))->applyFromArray(['font' => ['size' => 8, 'bold' => true,]]);

        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+2),$this->costing_sheet['cost_labor_details'][0]['cost_smv_1']);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+3),$this->costing_sheet['cost_labor_details'][0]['cost_hours_1']);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_labor_details'][0]['cost_days_1']);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+5),$this->costing_sheet['cost_labor_details'][0]['cost_operators_1']);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+7),$this->costing_sheet['cost_labor_details'][0]['cost_monthly_wage_1']);

        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+3),$this->costing_sheet['cost_labor_details'][0]['cost_hours_2']);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_labor_details'][0]['cost_days_2']);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+5),$this->costing_sheet['cost_labor_details'][0]['cost_operators_2']);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+6),$this->costing_sheet['cost_labor_details'][0]['cost_output_per_day_1']);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+7),$this->costing_sheet['cost_labor_details'][0]['cost_monthly_wage_2']);

        $smv2 = '='.'(L'.($this->cost_bottom_second_row_start+3). '*' . 'L'.($this->cost_bottom_second_row_start+5) . ')/L'.($this->cost_bottom_second_row_start+6);
        $output_per_day2 = '='.'(K'.($this->cost_bottom_second_row_start+3). '*' . 'K'.($this->cost_bottom_second_row_start+5). ')/K'.($this->cost_bottom_second_row_start+2);
        $hourly_wage = '='.'K'.($this->cost_bottom_second_row_start+7). '/' . 'K'.($this->cost_bottom_second_row_start+4) . '/' .'K'.($this->cost_bottom_second_row_start+3) ;
        $hourly_wage2 = '='.'L'.($this->cost_bottom_second_row_start+7). '/' . 'L'.($this->cost_bottom_second_row_start+4) . '/' .'L'.($this->cost_bottom_second_row_start+3) ;
        $hw_id = '='.'K'.($this->cost_bottom_second_row_start+8) . '*1.4';
        $hw_id2 = '='.'L'.($this->cost_bottom_second_row_start+8) . '*1.4';
        $wage_per_min = '='.'K'.($this->cost_bottom_second_row_start+8) . '/60';
        $wage_per_min2 = '='.'L'.($this->cost_bottom_second_row_start+8) . '/60';
        $labor_cost_per_pc = '='.'K'.($this->cost_bottom_second_row_start+9) . '*'. 'K'.($this->cost_bottom_second_row_start+2);
        $labor_cost_per_pc2 = '='.'L'.($this->cost_bottom_second_row_start+9) . '*'. 'L'.($this->cost_bottom_second_row_start+2);

        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+6),$output_per_day2);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+2),$smv2);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+8),$hourly_wage);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+8),$hourly_wage2);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+9),$hw_id);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+9),$hw_id2);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+10),$wage_per_min);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+10),$wage_per_min2);
        $event->sheet->setCellValue('K'.($this->cost_bottom_second_row_start+1),$labor_cost_per_pc);
        $event->sheet->setCellValue('L'.($this->cost_bottom_second_row_start+1),$labor_cost_per_pc2);

    }

    protected function exportMOQs( $event)
    {
        $style_moq = [
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
                'color' => ['argb' => 'f7b888']
            ],
            'font' => [
                'size' => 10,
                'bold' => true,
            ],
        ];

        $event->sheet->mergeCells('O'.($this->cost_bottom_second_row_start).':R'.($this->cost_bottom_second_row_start));
        $event->sheet->mergeCells('O'.($this->cost_bottom_second_row_start+1).':R'.($this->cost_bottom_second_row_start+1));
        $event->sheet->mergeCells('O'.($this->cost_bottom_second_row_start+2).':R'.($this->cost_bottom_second_row_start+2));
        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+3).':U'.($this->cost_bottom_second_row_start+3));
        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+8).':U'.($this->cost_bottom_second_row_start+8));

        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+4).':O'.($this->cost_bottom_second_row_start+4));
        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+5).':O'.($this->cost_bottom_second_row_start+5));
        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+6).':O'.($this->cost_bottom_second_row_start+6));
        $event->sheet->mergeCells('N'.($this->cost_bottom_second_row_start+7).':O'.($this->cost_bottom_second_row_start+7));

        $event->sheet->mergeCells('S'.($this->cost_bottom_second_row_start).':T'.($this->cost_bottom_second_row_start));
        $event->sheet->mergeCells('S'.($this->cost_bottom_second_row_start+1).':T'.($this->cost_bottom_second_row_start+1));
        $event->sheet->mergeCells('S'.($this->cost_bottom_second_row_start+2).':T'.($this->cost_bottom_second_row_start+2));

        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start).':U'.($this->cost_bottom_second_row_start))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+1).':U'.($this->cost_bottom_second_row_start+1))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+2).':U'.($this->cost_bottom_second_row_start+2))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);
        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+3).':U'.($this->cost_bottom_second_row_start+10))->applyFromArray(['borders' => [
            'outline' => ['borderStyle' => Border::BORDER_THIN,],],]);

        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+3).':U'.($this->cost_bottom_second_row_start+3))->applyFromArray($style_moq);
        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+8).':U'.($this->cost_bottom_second_row_start+8))->applyFromArray($style_moq);
        $event->sheet->getStyle('N'.($this->cost_bottom_second_row_start+6).':U'.($this->cost_bottom_second_row_start+6))->applyFromArray(['fill' => [
            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
            'color' => ['argb' => '95fcb2']],]);

        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start),'A');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+1),'B');
        $event->sheet->setCellValue('O'.($this->cost_bottom_second_row_start),'MATERIAL COSTS');
        $event->sheet->setCellValue('O'.($this->cost_bottom_second_row_start+1),'LOP');
        $event->sheet->setCellValue('O'.($this->cost_bottom_second_row_start+2),'CM');

        $material_cost = '=SUM(S' . ($this->cost_bottom_row_start+1) . ':S'.($this->cost_bottom_row_start+11). ')' ;
        $material_cost_percent = '='.'S'.($this->cost_bottom_second_row_start).'/S'.($this->cost_bottom_row_start+13);
        $lop_percent = '='.'S'.($this->cost_bottom_second_row_start+1).'/S'.($this->cost_bottom_row_start+13);

        $event->sheet->setCellValue('S'.($this->cost_bottom_second_row_start),$material_cost);
        $event->sheet->setCellValue('S'.($this->cost_bottom_second_row_start+1),'=S'.($this->cost_bottom_row_start+12));
        $event->sheet->setCellValue('U'.($this->cost_bottom_second_row_start),$material_cost_percent);
        $event->sheet->setCellValue('U'.($this->cost_bottom_second_row_start+1),$lop_percent);

        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+3),'MOQ - PRODUCTION');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+8),'MOQ - FABRIC');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+4),'QTY (pcs)');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+5),'Upcharge');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+6),'FOB');
        $event->sheet->setCellValue('N'.($this->cost_bottom_second_row_start+9),'1. Fabric MOQ will be applied based on the order QTY, and fabric/trim MOQ.');

        $event->sheet->setCellValue('P'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_1']);
        $event->sheet->setCellValue('Q'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_2']);
        $event->sheet->setCellValue('R'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_3']);
        $event->sheet->setCellValue('S'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_4']);
        $event->sheet->setCellValue('T'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_5']);
        $event->sheet->setCellValue('U'.($this->cost_bottom_second_row_start+4),$this->costing_sheet['cost_moqs'][0]['cost_qty_pcs_6']);

        $event->sheet->setCellValue('P'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_1']/100));
        $event->sheet->setCellValue('Q'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_2']/100));
        $event->sheet->setCellValue('R'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_3']/100));
        $event->sheet->setCellValue('S'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_4']/100));
        $event->sheet->setCellValue('T'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_5']/100));
        $event->sheet->setCellValue('U'.($this->cost_bottom_second_row_start+5),($this->costing_sheet['cost_moqs'][0]['cost_upcharge_6']/100));

        $fob_1 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'P'.($this->cost_bottom_second_row_start+5) . ')';
        $fob_2 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'Q'.($this->cost_bottom_second_row_start+5). ')';
        $fob_3 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'R'.($this->cost_bottom_second_row_start+5). ')';
        $fob_4 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'S'.($this->cost_bottom_second_row_start+5). ')';
        $fob_5 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'T'.($this->cost_bottom_second_row_start+5). ')';
        $fob_6 = '=S'.($this->cost_bottom_row_start+13). '*(1+'. 'U'.($this->cost_bottom_second_row_start+5). ')';

        $event->sheet->setCellValue('P'.($this->cost_bottom_second_row_start+6),$fob_1);
        $event->sheet->setCellValue('Q'.($this->cost_bottom_second_row_start+6),$fob_2);
        $event->sheet->setCellValue('R'.($this->cost_bottom_second_row_start+6),$fob_3);
        $event->sheet->setCellValue('S'.($this->cost_bottom_second_row_start+6),$fob_4);
        $event->sheet->setCellValue('T'.($this->cost_bottom_second_row_start+6),$fob_5);
        $event->sheet->setCellValue('U'.($this->cost_bottom_second_row_start+6),$fob_6);
    }

    public function drawings()
    {
        $drawings = new Drawing();
        if(count($this->costing_sheet['cost_sketches']) > 0){
                if($this->costing_sheet['cost_sketches'][0]['cost_right_sketch'] !== null) {

                    $drawings->setName('Front Photo');
                    $drawings->setDescription('Front Photo Header');
                    $drawings->setPath(public_path($this->costing_sheet['cost_sketches'][0]['cost_front_sketch']));
                    $drawings->setHeight(120);

                    $drawings->setCoordinates('J3');
                    return [$drawings];
                }
        }

        $drawings->setPath(public_path('\\storage\\images\\white.png'));
        $drawings->setHeight(120);
        $drawings->setCoordinates('J3');

        return [$drawings];

    }

    public function setFrontSketch($worksheet){
        if(count($this->costing_sheet['cost_sketches']) > 0){
            if($this->costing_sheet['cost_sketches'][0]['cost_front_sketch'] !== null){
                $drawings = new Drawing();
                $drawings->setName('Front Sketch');
                $drawings->setDescription('Front Sketch Photo Bottom');
                $drawings->setPath(public_path($this->costing_sheet['cost_sketches'][0]['cost_front_sketch']));
                $drawings->setHeight(125);
                $drawings->setCoordinates('B' . ($this->cost_bottom_row_start+2));
                $drawings->setWorksheet($worksheet);
            }
        }
    }

    public function setBackSketch($worksheet){
        if(count($this->costing_sheet['cost_sketches']) > 0){
            if($this->costing_sheet['cost_sketches'][0]['cost_back_sketch'] !== null) {
                $drawings = new Drawing();
                $drawings->setName('Back Sketch');
                $drawings->setDescription('Back Sketch Photo Bottom');
                $drawings->setPath(public_path($this->costing_sheet['cost_sketches'][0]['cost_back_sketch']));
                $drawings->setHeight(125);
                $drawings->setCoordinates('D' . ($this->cost_bottom_row_start + 2));
                $drawings->setWorksheet($worksheet);
            }
        }
    }

    public function setLeftSketch($worksheet){
        if(count($this->costing_sheet['cost_sketches']) > 0){
            if($this->costing_sheet['cost_sketches'][0]['cost_left_sketch'] !== null) {
                $drawings = new Drawing();
                $drawings->setName('Left Sketch');
                $drawings->setDescription('Left Sketch Photo Bottom');
                $drawings->setPath(public_path($this->costing_sheet['cost_sketches'][0]['cost_left_sketch']));
                $drawings->setHeight(125);
                $drawings->setCoordinates('F' . ($this->cost_bottom_row_start + 2));
                $drawings->setWorksheet($worksheet);
            }
        }
    }

    public function setRightSketch($worksheet){

        if(count($this->costing_sheet['cost_sketches']) > 0){
            if($this->costing_sheet['cost_sketches'][0]['cost_right_sketch'] !== null) {
                $drawings = new Drawing();
                $drawings->setName('Right Sketch');
                $drawings->setDescription('Right Sketch Photo Bottom');
                $drawings->setPath(public_path($this->costing_sheet['cost_sketches'][0]['cost_right_sketch']));
                $drawings->setHeight(125);
                $drawings->setCoordinates('H' . ($this->cost_bottom_row_start + 2));
                $drawings->setWorksheet($worksheet);
            }
        }
    }

    public function charts()
    {
        $label = [new DataSeriesValues('String', 'Worksheet!$B$1', null, 1)];
        $categories = [new DataSeriesValues('String', 'Worksheet!$B$2:$B$5', null, 4)];
        $values = [new DataSeriesValues('Number', 'Worksheet!$A$2:$A$5', null, 4)];
        $series = new DataSeries(DataSeries::TYPE_PIECHART, DataSeries::GROUPING_STANDARD,
            range(0, \count($values) - 1), $label, $categories, $values);
        $plot = new PlotArea(null, [$series]);

        $legend = new Legend();
        $chart = new Chart('chart name', new Title('chart title'), $legend, $plot);


        $chart->setTopLeftPosition('DD1');
        $chart->setBottomRightPosition('DD2');

        return $chart;
    }

}
