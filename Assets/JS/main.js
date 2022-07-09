let month = document.getElementById('month');
let year = document.getElementById('year');
let salary=document.getElementById('salary');
let bonus=document.getElementById('bonus');

//Declaring the output fields
let initial=document.getElementById('initial');
let nssfDeduct=document.getElementById("nssfDeduct");
let afterDeduct=document.getElementById('afterDeduct'); 
let benefits = document.getElementById('benefits');
let taxable=document.getElementById('taxable');
let tax=document.getElementById('tax');
let relief=document.getElementById('relief');
let taxonnet=document.getElementById('taxonnet');
let paye=document.getElementById('paye');
let charged=document.getElementById('charged');
let nhifcontrib=document.getElementById('nhifcontrib');
let netpay=document.getElementById('netpay');


const calculate=()=>
{
    initial.textContent=parseInt(salary.value).toFixed(2);
    benefits.textContent=parseInt(bonus.value).toFixed(2);
    nhif()
    nssf()
    reliefAmount()
    incomeAfterDeductions()
    payeCalc()
    netoffrelief()
    netPay()
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
                nssfDeduct.textContent='2160.00';
            }
            else
            {
                let nssf=parseInt(salary.value *0.12);
                nssfDeduct.textContent=nssf.toFixed(2);
            }
        }
        if(rateOld.checked)
        {
            nssfDeduct.textContent='200';
        }
    }
    else if(nsno.checked)
    {
        nssfDeduct.textContent='0.00';
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
            nhifcontrib.textContent ='0.00';
        }
   
        nhifcontrib.textContent =nhcont;
    }
    else if (nhno.checked)
    {
        nhifcontrib.textContent ='0.00';
    } 
}

//Relief Amount
const reliefAmount=()=>
{
    if (month.checked)
    {
        relief.textContent = 2400;
    }
    else if (year.checked)
    {
        relief.textContent = 28800;
    }
}

//Income After Pension Deductions
const incomeAfterDeductions =()=>
{
    let netamount =parseInt(salary.value-nssfDeduct.textContent);
    afterDeduct.textContent =netamount;
}

//PAYE calculations
const payeCalc=()=>
{
    first=parseFloat(afterDeduct.textContent);
    second=parseFloat(benefits.textContent);
    amount= first+second;
    taxable.textContent=amount;
    charged.textContent=amount;
    if(month.checked)
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
            tax.textContent = 'Tax bracket not found!';
        }
    tax.textContent =taxAmnt.toFixed(2 );
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
            tax.textContent = 'Tax bracket not found!';
        }
    }
        tax.textContent =taxAmnt.toFixed(2);
}

//Tax net off relief
const netoffrelief=()=>
{
    PAYE=parseFloat(tax.textContent);
    taxRelief=parseFloat(relief.textContent);
    netRelief=PAYE-taxRelief;
    taxonnet.textContent=netRelief.toFixed(2);
    paye.textContent=netRelief.toFixed(2);
}

//Net Pay
const netPay=()=>
{
    taxableIncome=taxable.textContent;
    payeValue=paye.textContent;
    value1=taxableIncome-payeValue;
    value2=value1-nhifcontrib.textContent;
    netpay.textContent=value2.toFixed(2);
}