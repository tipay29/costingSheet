<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class Color{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_color') || request('costing_search_color') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_color');

        return $builder->where('cost_color', 'like', '%'.$searchWord.'%');

    }


}
