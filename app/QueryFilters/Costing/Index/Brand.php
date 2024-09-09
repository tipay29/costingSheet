<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class Brand{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_brand') || request('costing_search_brand') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_brand');


        return $builder->where('cost_brand', 'like', '%'.$searchWord.'%');

    }


}
