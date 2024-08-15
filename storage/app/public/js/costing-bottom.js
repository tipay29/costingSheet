let costing_smv_first = $('#costing_smv_first');
let costing_smv_second = $('#costing_smv_second');
let costing_hours_first = $('#costing_hours_first');
let costing_hours_second = $('#costing_hours_second');
let costing_days_first = $('#costing_days_first');
let costing_days_second = $('#costing_days_second');
let costing_operators_first = $('#costing_operators_first');
let costing_operators_second = $('#costing_operators_second');
let costing_monthly_wages_first = $('#costing_monthly_wages_first');
let costing_monthly_wages_second = $('#costing_monthly_wages_second');

let costing_output_per_day_first = $('#costing_output_per_day_first');
let costing_output_per_day_second = $('#costing_output_per_day_second');
let costing_hourly_wages_first = $('#costing_hourly_wages_first');
let costing_hourly_wages_second = $('#costing_hourly_wages_second');
let costing_hourly_wages_id_first = $('#costing_hourly_wages_id_first');
let costing_hourly_wages_id_second = $('#costing_hourly_wages_id_second');
let costing_wages_per_min_first = $('#costing_wages_per_min_first');
let costing_wages_per_min_second = $('#costing_wages_per_min_second');
let costing_cost_per_pc_first = $('#costing_cost_per_pc_first');
let costing_cost_per_pc_second = $('#costing_cost_per_pc_second');

costing_smv_first.change(function(e){
    let number = costing_smv_first;
    number = validateNumber(number);

    getOutputPerDay(costing_smv_first.val(),costing_hours_first.val(),costing_operators_first.val(),costing_output_per_day_first);
    getCostPerPC(costing_smv_first.val(),costing_cost_per_pc_first,costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val());
});
costing_output_per_day_second.change(function(e){
    let number = costing_output_per_day_second;
    number = validateNumber(number);
    getSMV(costing_output_per_day_second.val(),costing_hours_second.val(),costing_operators_second.val(),costing_smv_second);
    getCostPerPC(costing_smv_second.html(),costing_cost_per_pc_second,costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val());
});
costing_hours_first.change(function(e){
    let number = costing_hours_first;
    number = validateNumber(number);

    getOutputPerDay(costing_smv_first.val(),costing_hours_first.val(),costing_operators_first.val(),costing_output_per_day_first);
    getHourlyWage(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_first,costing_wages_per_min_first);
    getHourlyWageWithIndirect(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_id_first);
    getCostPerPC(costing_smv_first.val(),costing_cost_per_pc_first,costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val());
});
costing_hours_second.change(function(e){
    let number = costing_hours_second;
    number = validateNumber(number);

    getSMV(costing_output_per_day_second.val(),costing_hours_second.val(),costing_operators_second.val(),costing_smv_second);
    getHourlyWage(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_second,costing_wages_per_min_second);
    getHourlyWageWithIndirect(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_id_second);
    getCostPerPC(costing_smv_second.html(),costing_cost_per_pc_second,costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val());
});
costing_days_first.change(function(e){
    let number = costing_days_first;
    number = validateNumber(number);

    getHourlyWage(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_first,costing_wages_per_min_first);
    getHourlyWageWithIndirect(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_id_first);
    getCostPerPC(costing_smv_first.val(),costing_cost_per_pc_first,costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val());
});
costing_days_second.change(function(e){
    let number = costing_days_second;
    number = validateNumber(number);

    getHourlyWage(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_second,costing_wages_per_min_second);
    getHourlyWageWithIndirect(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_id_second);

});
costing_operators_first.change(function(e){
    let number = costing_operators_first;
    number = validateNumber(number);

    getOutputPerDay(costing_smv_first.val(),costing_hours_first.val(),costing_operators_first.val(),costing_output_per_day_first);

});
costing_operators_second.change(function(e){
    let number = costing_operators_second;
    number = validateNumber(number);
    getSMV(costing_output_per_day_second.val(),costing_hours_second.val(),costing_operators_second.val(),costing_smv_second);
    getCostPerPC(costing_smv_second.html(),costing_cost_per_pc_second,costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val());
});
costing_monthly_wages_first.change(function(e){
    let number = costing_monthly_wages_first;
    number = validateNumber(number);

    getHourlyWage(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_first,costing_wages_per_min_first);
    getHourlyWageWithIndirect(costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val(),costing_hourly_wages_id_first);
    getCostPerPC(costing_smv_first.val(),costing_cost_per_pc_first,costing_monthly_wages_first.val(),costing_days_first.val(),costing_hours_first.val());
});
costing_monthly_wages_second.change(function(e){
    let number = costing_monthly_wages_second;
    number = validateNumber(number);

    getHourlyWage(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_second,costing_wages_per_min_second);
    getHourlyWageWithIndirect(costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val(),costing_hourly_wages_id_second);
    getCostPerPC(costing_smv_second.html(),costing_cost_per_pc_second,costing_monthly_wages_second.val(),costing_days_second.val(),costing_hours_second.val());
});

function validateNumber(number){

    if(number.val() > 0 ){
        return number;
    }else{
        alert('Invalid Number, input start number 1');
        number.val('');
    }

}

function getSMV(output_per_day,hours,operators,output){
    if(output_per_day > 0 && hours > 0 && operators > 0){
        let get_smv = (operators*hours)/output_per_day;

        output.html((Math.round(get_smv * 100) / 100).toLocaleString("en", { minimumFractionDigits: 2 }));
    }
}

function getOutputPerDay(smv,hours,operators,output){
    if(smv > 0 && hours > 0 && operators > 0){
        let get_output_per_day = (operators*hours)/smv;
        // alert(get_output_per_day);
        output.html(Math.round(get_output_per_day));
    }
}

function getHourlyWage(monthly,days,hours,output,output_two){
    if(monthly > 0 && days > 0 && hours > 0){
        let get_hourly_wage = monthly/days/hours;
        let get_wage_per_min = (monthly/days/hours)/60;

        output.html((Math.round(get_hourly_wage * 100) / 100).toLocaleString("en", { minimumFractionDigits: 2 }));

        output_two.html((Math.round(get_wage_per_min * 100) / 100).toLocaleString("en", { minimumFractionDigits: 2 }));

    }
}

function getHourlyWageWithIndirect(monthly,days,hours,output){
    if(monthly > 0 && days > 0 && hours > 0){
        let hourly_wage_id = (monthly/days/hours)*1.4;

        output.html((Math.round(hourly_wage_id * 100) / 100).toLocaleString("en", { minimumFractionDigits: 2 }));

    }
}


function getCostPerPC(smv,output,monthly,days,hours){

    if(smv > 0 && monthly > 0 && days > 0 && hours > 0){
        let hourly_wage_id = (monthly/days/hours)*1.4;
        let cost_per_pc = smv*hourly_wage_id;

        output.html((Math.round(cost_per_pc * 100) / 100).toLocaleString("en", { minimumFractionDigits: 2 }));

    }

}
