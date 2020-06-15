var city = prompt("Enter city name :");
if (city=='Karachi'){
    document.write("Welcome to city of lights")
}

Q2
var gender = prompt("Male/Female ? ");
if (gender=='Male'){
    document.write(" Good Morning Sir");
}
else{
document.write("Good Morning Ma'am")
}

Q3
var signal_color = prompt("Enter signal color : ");
if (signal_color == 'Red'){
    document.write("Must Stop");
} 
else if (signal_color == 'Yellow'){
    document.write("Ready to move");
}
else{
    document.write("Move now");
}

Q4
var fuel = prompt("Enter remaining fuel in liters : ");
if (fuel == 0.25){
    document.write("Please refill the fuel in your car");
}

Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
OUTPUT:  displayed

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
OUTPUT:  Not displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
OUTPUT: Condition 2 and 4 displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
OUTPUT:  displayed

if (true){
    alert("True");
}
if (false){
    alert("False");
}
OUTPUT:  True displayed

if("car" < "cat"){
    alert("car is smaller than cat");
}
OUTPUT: displayed

Q6 
var grade , remarks ;
var sub1 = Number(prompt("Enter obtained marks of subject 1: "));
var sub2 = Number(prompt("Enter obtained marks of subject 2: "));
var sub3 = Number(prompt("Enter obtained marks of subject 3: "));
var total = Number(prompt("Enter total marks: "));
var per = (sub1 + sub2 + sub3) * 100 / total;

if (per >= 80){
    grade = 'A-one';
    remarks = 'Excellent';
}
else if (per >= 70){
    grade = 'A';
    remarks = 'Good';
}
else if (per >= 60){
    grade = 'B';
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = 'Sorry';
}
document.write("<h1> Marks Sheet </h1><br>");
document.write("Total marks :",total);
document.write("<br>Marks Obtained : ", sub1+sub2+sub3);
document.write("<br>Percentage : ",per,"%");
document.write("<br>Grade : ",grade);
document.write("<br>Remarks : ",remarks);

Q7
var secret_num = 7;
var guessed_num = Number(prompt("Guess the number : "));
document.write("<h1> GUESSING GAME </h1>")
if (guessed_num == secret_num){
    document.write("<h3> Bingo! Correct answer</h3>");
} 
else if ((guessed_num+1) == secret_num){
    document.write("<h3> Close enough to the correct answer </h3>");
} 

Q8
var num = Number(prompt("Enter the number to check whether the given number is divisible by 3 or not : "));
if (num % 3 == 0){
    document.write(num ," is divisible by 3");
}
else{
    document.write(num ," is not divisible by 3");
}

Q9
var num = Number(prompt("Enter the number : "));
if (num % 2 == 0){
    document.write(num ," is <b>Even</b> ");
}
else{
    document.write(num ," is <b>Odd</b> ");
}

Q10
var T = Number(prompt("Enter temperature : "));
if (T > 40){
    document.write("It is too hot outside.");
}
else if (T > 30){
    document.write("The Weather today is Normal.");
}
else if (T > 20){
    document.write("Today’s Weather is cool.");
}
else if (T > 10){
    document.write("OMG! Today’s Weather is cool.");
}

Q11
var num1 = Number(prompt("Enter first number : "));
var num2 = Number(prompt("Enter Second number : "));
var op = prompt("Enter operator (+, -, *, /, %) : ");
if (op == '+'){
     document.write("The answer after Addition is : ",num1+num2);
}
else if (op == '-'){
    document.write("The answer after Subtraction is : ",num1-num2);
}
else if (op == '*'){
    document.write("The answer after Multiplication is : ",num1*num2); 
}
else if (op == '/'){
    document.write("The answer after Division is : ",num2/num1);
}
else if (op == '%'){
    document.write("The answer after Modulo is : ",num2%num1);
}
else{
document.write("Invalid operator");
}