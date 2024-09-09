<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class Vendor{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_vendor') || request('costing_search_vendor') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_vendor');

        return $builder->where('cost_vendor', 'like', '%'.$searchWord.'%');

    }


}
