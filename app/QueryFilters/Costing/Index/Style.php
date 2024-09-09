<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class Style{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_style') || request('costing_search_style') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_style');

        return $builder->where('cost_style', 'like', '%'.$searchWord.'%');

    }


}
