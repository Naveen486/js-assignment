// function ask(question,yes,no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask("Do you agree",
// function (){
//     alert("Agreed");
// },
// function (){
//     alert("You Cancelled the Excution");
// }
// );

let ask = (question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Do You Agree",() => alert("Agreed."), () => alert("You Cancelled the excution"));
