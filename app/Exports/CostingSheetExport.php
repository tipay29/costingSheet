<?php

namespace App\Exports;

use App\Models\CostingSheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;

class CostingSheetExport implements FromCollection,WithEvents
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

    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => function(BeforeSheet $event){


            },
            AfterSheet::class => function(AfterSheet $event){
                $event->sheet->getColumnDimension('A')->setVisible(false);
                $event->sheet->getColumnDimension('B')->setWidth(10);

                $event->sheet->setCellValue('B19','ITEM');
                $event->sheet->setCellValue('C19','COMPONENT');
                $event->sheet->setCellValue('D19','MATERIAL_ID');
                $event->sheet->setCellValue('E19','1.FABRICS');
                $event->sheet->setCellValue('F19','NOMINATED');
                $event->sheet->setCellValue('G19','COO');
                $event->sheet->setCellValue('H19','SUPPLIER_REF');
                $event->sheet->setCellValue('I19','DESCRIPTION');
                $event->sheet->setCellValue('J19','LOCATION');
                $event->sheet->setCellValue('K19','MILL/SUPPLIER');
                $event->sheet->setCellValue('L19','UOM');
                $event->sheet->setCellValue('M19','WIDTH');
                $event->sheet->setCellValue('N19','USAGE');
                $event->sheet->setCellValue('O19','WASTAGE');
                $event->sheet->setCellValue('P19','GROSS YIELD');
                $event->sheet->setCellValue('Q19','UNIT COST');
                $event->sheet->setCellValue('R19','HANDLING');
                $event->sheet->setCellValue('S19','TOTAL');
                $event->sheet->setCellValue('T19','COMMENT');

            },
        ];
    }
}
