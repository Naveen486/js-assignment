console.log("to check clear");
console.clear(); //Clears the console
console.time(); //Starts a timer (can track how long an operation takes)
console.log("Hello World"); //Outputs a message to the console in web page
console.assert(12<10); //Writes an error message to the console if the assertion is false
console.error("Error Message"); //Outputs an error message to the console 
console.warn("warning message"); //Outputs a warning message to the console
console.trace();//Outputs a warning message to the console
console.timeEnd(); //Stops a timer that was previously started by console.time()
console.info("hello this is a information");//Outputs an informational message to the console
var a={name:"ABC",age:22,gender:"F"}
var b={name:"DEF",age:22,gender:"F"}
var c={name:"GHI",age:22,gender:"M"}
console.table({a,b,c}) //Displays tabular data as a table
console.count("Count");
console.count("Count"); // Logs the number of times that this particular call to count()  has been called
