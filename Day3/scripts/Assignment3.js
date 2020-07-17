let marks=+prompt("Enter Marks");
// using if else-if else
console.log("Using if else-if else")
if(marks>=80){
    console.log(`Marks are ${marks} and Grade is A`);
}else if(marks>=60 && marks<80){
    console.log(`Marks are ${marks} and Grade is B`);
}else if(marks>=40 && marks<60){
    console.log(`Marks are ${marks} and Grade is C`);
}else{
    console.log(`Marks are ${marks} and You Failed`);
}

// using ternary operator
console.log("Using Ternary Operator")
let str=(marks>=80) ? `Marks are ${marks} and Grade is A` :
        (marks>=60 && marks<80) ? `Marks are ${marks} and Grade is B` :
        (marks>=40 && marks<60) ? `Marks are ${marks} and Grade is C` :
        `Marks are ${marks} and You Failed`;
console.log(str);