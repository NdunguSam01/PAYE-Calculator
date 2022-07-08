let month = document.getElementById('month');
let year = document.getElementById('year');
let salary=document.getElementById('salary');
let bonus=document.getElementById('bonus');

let nssfDeduction=document.getElementById("nssfDeduct");
const calculate=()=>
{
    document.getElementById('initial').textContent='Kshs ' +parseInt(salary.value).toFixed(2);
    document.getElementById('benefits').textContent='Kshs ' +parseInt(bonus.value).toFixed(2);
    nhif()
    nssf()
    relief()
    incomeAfterDeductions()
    tax()
}

//NSSF calculations
const nssf=()=>
{
    let nsyes=document.getElementById('nssfyes');
    let nsno=document.getElementById('nssfno');
    let rateNew=document.getElementById('nsnew');
    let rateOld=document.getElementById('nsold');

    if (nsyes.checked)
    {
        if(rateNew.checked)
        {
            if(salary.value>18000)
            {
                document.getElementById('nssfDeduct').textContent='Kshs 2160';
            }
            else
            {
                let nssf=parseInt(salary.value *0.12);
                document.getElementById('nssfDeduct').textContent='Kshs ' + nssf.toFixed(2);
            }
        }
        if(rateOld.checked)
        {
            document.getElementById('nssfDeduct').textContent='Kshs 200';
        }
    }
    else if(nsno.checked)
    {
        document.getElementById('nssfDeduct').textContent='Kshs 0.00';
    }
}

//NHIF calculations
const nhif=()=>
{
    let nhyes=document.getElementById('nhyes');
    let nhno=document.getElementById('nhno');

    if(nhyes.checked)
    {
        if (salary.value>= 1000 && salary.value<= 5999) 
        {
            nhcont= 150;
        } 
        else if (salary.value>= 6000 && salary.value<= 7999) 
        {
            nhcont= 300;
        } 
        else if (salary.value>= 8000 && salary.value<= 11999) 
        {
            nhcont= 400;
        } 
        else if (salary.value>= 12000 && salary.value<= 14999) 
        {
            nhcont= 500;
        } 
        else if (salary.value>= 15000 && salary.value<= 19999) 
        {
            nhcont= 600;
        } 
        else if (salary.value>= 20000 && salary.value<= 24999) 
        {
            nhcont= 750;
        } 
        else if (salary.value>= 25000 && salary.value<= 29999) 
        {
            nhcont= 850;
        } 
        else if (salary.value>= 30000 && salary.value<= 34999) 
        {
            nhcont= 900;
        } 
        else if (salary.value>= 35000 && salary.value<= 39999) 
        {
            nhcont= 950;
        } 
        else if (salary.value>= 40000 && salary.value<= 44999) 
        {
            nhcont= 1000;
        } 
        else if (salary.value>= 45000 && salary.value<= 49999) 
        {
            nhcont= 1100;
        }
        else if (salary.value>= 50000 && salary.value<= 59999)
        {
            nhcont= 1200;
        } 
        else if (salary.value>= 60000 && salary.value<= 69999) 
        {
            nhcont= 1300;
        } 
        else if (salary.value>= 70000 && salary.value<= 79999) 
        {
            nhcont= 1400;
        } 
        else if (salary.value>= 80000 && salary.value<= 89999) 
        {
            nhcont= 1500;
        } 
        else if (salary.value>= 90000 && salary.value<= 99999) {
            nhcont= 1600;
        } 
        else if (salary.value>= 100000) 
        {
            nhcont= 1700;
        }
        else 
        {
            document.getElementById("nhifcontrib").textContent = 'Kshs 0.00';
        }
   
        document.getElementById("nhifcontrib").textContent = 'Kshs ' +nhcont;
    }
    else if (nhno.checked)
    {
        document.getElementById("nhifcontrib").textContent = 'Kshs 0.00';
    } 
}

//Relief Amount
const relief=()=>
{
    if (month.checked)
    {
        document.getElementById("relief").textContent = 'Kshs 2400';
    }
    else if (year.checked)
    {
        document.getElementById("relief").textContent = 'Kshs 28800';
    }
}

//Income After Pension Deductions
const incomeAfterDeductions =()=>
{
    let netamount =parseInt(salary.value-nssfDeduction.textContent);
    document.getElementById("afterDeduct").textContent = 'Kshs ' +netamount.toFixed(2);
    document.getElementById("taxable").textContent = 'Kshs ' +netamount.toFixed(2);
    document.getElementById("charged").textContent = 'Kshs ' +netamount.toFixed(2);
}

//PAYE calculations
const tax=()=>
{
    amount=document.getElementById("taxable").value;
    if(monthly.checked)
    {
        if(amount>=0 && amount<=12298)
        {
            taxAmnt=amount*0.1;
        }
        else if(amount>=12299 && amount<=23885)
        {
            taxAmnt=amount*0.15;
        }
        else if(amount>=23886 && amount<=35472)
        {
            taxAmnt=amount*0.2;
        }
        else if(amount>=35473 && amount<=47059)
        {
            taxAmnt=amount*0.25;
        } 
        else if  (amount>47059)
        {
            taxAmnt=amount*0.3;
        }
        else
        {
            document.getElementById("tax").textContent = 'Tax bracket not found!';
        }
    document.getElementById("tax").textContent = 'Kshs ' +taxAmnt;
    }
    else if(year.checked)
    {
        if  (amount>=0 && amount<=147580)
        {
            taxAmnt=amount*0.1;
        }
        else if (amount>=147581 && amount<=286623)
        {
            taxAmnt=amount*0.15;
        }
        else if(amount>=286624 && amount<=425666)
        {
            taxAmnt=amount*0.2;
        }
        else if(amount>=425667 && amount<=564709)
        {
            taxAmnt=amount*0.25;
        }
        else if(amount>564709)
        {
            taxAmnt=amount*0.3;
        }
        else
        {
            document.getElementById("tax").textContent = 'Tax bracket not found!';
        }
    }
        document.getElementById("tax").textContent = 'Kshs ' +taxAmnt;
}

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




