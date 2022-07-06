const nsold =()=> nscont=200;

const monthly=(amount)=>
{
    switch(amount)
    {
        case amount>=0 && amount<=12298:
            tax=amount*0.1;
            break;
        
        case amount>=12299 && amount<=23885:
            tax=amount*0.15;
            break;
        
        case amount>=23886 && amount<=35472:
            tax=amount*0.2;
            break;
        
        case amount>=35473 && amount<=47059:
            tax=amount*0.25;
            break;
            
        case amount>47059:
            tax=amount*0.3;
            break;
        
            default:
                alert("Tax bracket not found!");
    }
    return tax;
}

const annually=(amount)=>
{
    switch(amount)
    {
        case amount>=0 && amount<=147580:
            tax=amount*0.1;
            break;
        
        case amount>=147581 && amount<=286623:
            tax=amount*0.15;
            break;
        
        case amount>=286624 && amount<=425666:
            tax=amount*0.2;
            break;
        
        case amount>=425667 && amount<=564709:
            tax=amount*0.25;
            break;
        
        case amount>564709:
            tax=amount*0.3;
            break;
        
        default:
            alert("Tax bracket not found!");
    }
}


const nhif=(salary)=>
{
    switch(salary) 
    {
        case salary>=0 && salary<=5999:
            nhcont=150;
            break;
        
        case salary>=6000 && salary<=7999:
            nhcont=300;
            break;

        case salary>=8000 && salary<=11999:
            nhcont=400;
            break;
        
        case salary>=12000 && salary<=14999:
            nhcont=500;
            break;

        case salary>=15000 && salary<=19999:
            nhcont=600;
            break;

        case salary>=20000 && salary<=24999:
            nhcont=750;
            break;

        case salary>=25000 && salary<=29999:
            nhcont=850;
            break;
        
        case salary>=30000 && salary<=34999:
            nhcont=900;
            break;

        case salary>=35000 && salary<=39999:
            nhcont=950;
            break;

        case salary<=40000 && salary<=44999:
            nhcont=1000;
            break;

        case salary>=45000 && salary<=49999:
            nhcont=1100;
            break;

        case salary<=50000 && salary<=59999:
            nhcont=1200;
            break;

        case salary<=60000 && salary<=69999:
            nhcont=1300;
            break;

        case salary<=70000 && salary<=79999:
            nhcont=1400;
            break;

        case salary<=80000 && salary<=89999:
            nhcont=1500;
            break;

        case salary<=90000 && salary<=99999:
            nhcont=1600;
            break;

        case salary>=100000:
            nhcont=1700;
            break;

        default:
            alert ("Bracket not found!");

    }
    return nhcont;
}