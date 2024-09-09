<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class ColorNames{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_solo') || request('costing_search_solo') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_solo');

        return $builder->where('cost_color_head_names', 'like', '%'.$searchWord.'%');

    }


}
