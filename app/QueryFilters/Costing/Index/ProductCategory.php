<?php


namespace App\QueryFilters\Costing\Index;

use Closure;

class ProductCategory{


    public function handle($request, Closure $next){

        if(!request()->has('costing_search_product_category') || request('costing_search_product_category') == ""){
            return $next($request);

        }

        $builder = $next($request);

        $searchWord = request('costing_search_product_category');

        return $builder->where('cost_product_category', 'like', '%'.$searchWord.'%');

    }


}
