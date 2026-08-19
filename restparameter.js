//var-args
//10 customers 1000 customers
function DaySale(...sales){
    //total sale 
    let total_sale=0;
    for( a of sales){
        total_sale=total_sale+a;
    }
console.log(total_sale)
}
DaySale(10,20,30,343,324,344,4234,10023,23,23)