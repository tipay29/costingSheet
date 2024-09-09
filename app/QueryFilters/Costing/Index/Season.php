<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class Season{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_season') || request('costing_search_season') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_season');

        return $builder->where('cost_season', 'like', '%'.$searchWord.'%');

    }


}
