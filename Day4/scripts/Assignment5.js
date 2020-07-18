let salary=+prompt("Enter Salary");
let sales=+prompt("Enter Sales");
let bonus;
if(sales>0 && sales<=5000){
    bonus = salary*0.02;
}else if(sales>=5001 && sales<=10000){
    bonus =salary*0.05;
}else if(sales >=10001 && sales <=20000){
    bonus =salary*0.07;
}else if(sales>20000){
    bonus = salary*0.1;
}

console.log(`Bonus is ${bonus} total salary is ${salary+bonus}`);