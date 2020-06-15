Q1
var inp = prompt("Enter a character : ");
if (inp >= 'A' && inp <= 'Z'){
    document.write("The inputted character is Upper case");
}
else if (inp >= 'a' && inp <= 'z'){
    document.write("The inputted character is Lower case");
}
else if (inp >= '0' && inp <= '9'){
    document.write("The inputted character is a Number");
}

Q2
var num1 = Number(prompt("Enter number 1 : "));
var num2 = Number(prompt("Enter number 2 : "));
if (num1 > num2){
    document.write(num1);
}
else if (num1 < num2){
    document.write(num2);
}
else if (num1 == num2){
    document.write(num1);
}

Q3
var num = Number(prompt("Enter any number : "));
if (num > 0){
    document.write("The number ",num," is Positive");
}
else if (num < 0){
    document.write("The number ",num," is Negative");
}
else{
    document.write("The number is 0");
}

Q4
var inp = prompt("Input a single character :");
if (inp =='a' || inp =='e' || inp =='i' || inp =='o' || inp =='u' || inp =='A' || inp =='E'
|| inp =='I' || inp =='O' || inp =='U'){
    document.write('True')
} 
else{
    document.write("False");
}

Q5
var store_pass = prompt("Store your password : ");
var inp_pass = prompt("Re enter your password : ");
if (inp_pass == ""){
    alert("Enter your password :");
    var inp_pass = prompt("Re-enter your password !");
}
if (inp_pass == store_pass){
    document.write("Correct! The password you entered matches the original password")
} 
else{
    document.write("Incorrect Password");   
}

Q6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

Q7
var time = Number(prompt("Enter time in 24 hours format : "));
if (time >= 0000 && time < 1200){
    document.write("<h2> Good Morning! </h2>")
}
else if (time >= 1200 && time < 1700){
    document.write("<h2> Good Afternoon! </h2>")
}
else if (time >= 1700 && time < 2100){
    document.write("<h2> Good Evening! </h2>")
}
else if (time >= 2100 && time <= 2359){
    document.write("<h2> Good Night! </h2>")
}