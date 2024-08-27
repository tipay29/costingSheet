<?php

namespace App\Exports;

use App\Models\CostingSheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Style\Border;

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
                $event->sheet->getColumnDimension('B')->setWidth(7);
                $event->sheet->getColumnDimension('C')->setWidth(11);
                $event->sheet->getColumnDimension('D')->setWidth(11);
                $event->sheet->getColumnDimension('E')->setWidth(12);
                $event->sheet->getColumnDimension('F')->setWidth(10);
                $event->sheet->getColumnDimension('G')->setWidth(10);
                $event->sheet->getColumnDimension('H')->setWidth(15);
                $event->sheet->getColumnDimension('I')->setWidth(22);
                $event->sheet->getColumnDimension('J')->setWidth(12);
                $event->sheet->getColumnDimension('K')->setWidth(12);
                $event->sheet->getColumnDimension('L')->setWidth(7);
                $event->sheet->getColumnDimension('M')->setWidth(10);
                $event->sheet->getColumnDimension('N')->setWidth(10);
                $event->sheet->getColumnDimension('O')->setWidth(10);
                $event->sheet->getColumnDimension('P')->setWidth(12);
                $event->sheet->getColumnDimension('Q')->setWidth(12);
                $event->sheet->getColumnDimension('R')->setWidth(12);
                $event->sheet->getColumnDimension('S')->setWidth(12);
                $event->sheet->getColumnDimension('T')->setWidth(15);

                $borderall = [
                    'borders' => [
                        //outline all
                        'outline' => [
                            'borderStyle' => Border::BORDER_THIN,

                        ],
                    ],
                ];
                $event->sheet->setCellValue('B19','序号');
                $event->sheet->getStyle('B19:T19')->applyFromArray($borderall)
                    ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('f2f205');
                $event->sheet->setCellValue('C19','分类编号');
                $event->sheet->setCellValue('D19','物料简码');
                $event->sheet->setCellValue('E19','成本类别');
                $event->sheet->setCellValue('F19','指定/非指定');
                $event->sheet->setCellValue('G19','产地');
                $event->sheet->setCellValue('H19','客户料号/供应商货号');
                $event->sheet->setCellValue('I19','物料描述');
                $event->sheet->setCellValue('J19','部位名称');
                $event->sheet->setCellValue('K19','供应商');
                $event->sheet->setCellValue('L19','单位');
                $event->sheet->setCellValue('M19','规格');
                $event->sheet->setCellValue('N19','用量');
                $event->sheet->setCellValue('O19','损耗');
                $event->sheet->setCellValue('P19','总用量');
                $event->sheet->setCellValue('Q19','单价');
                $event->sheet->setCellValue('R19','处理');
                $event->sheet->setCellValue('S19','单价');
                $event->sheet->setCellValue('T19','评论');

            },
        ];
    }
}
