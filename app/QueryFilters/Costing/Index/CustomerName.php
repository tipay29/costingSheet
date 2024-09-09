<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class CustomerName{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_solo') || request('costing_search_solo') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_solo');

        return $builder->where('cost_customer_name', 'like', '%'.$searchWord.'%');

    }


}
