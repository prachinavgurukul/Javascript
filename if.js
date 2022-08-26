var a=require("readline-sync")
// Q-1----// Write a python program to find maximum between two numbers.
// var a= require("readline-sync")
// b =a.questionInt("enter the first no:")
// var c=require("readline-sync")
// d=c.questionInt("enter the second no:")
// if (b>d){
//     console.log("b is greater")
// }else{
//     console.log("d is greater")
// }

// Q-2-----Write a python program to find maximum between three numbers.
// var a= require("readline-sync")
// b =a.questionInt("enter the first no:")
// c=a.questionInt("enter the second no:")
// d=a.questionInt("enter the second no:")
// if((b>c)&&(b>d)){
//     console.log("b is greater")
// }else if((c>d)&&(c>b)){
//     console.log("c is greater")
// }else if((d>b)&&(d>c)) {
//     console.log("d is greater")
// }else{
//     console.log("none")
// }


// Q-3----// Write a python program to check whether a number is negative, positive or zero.
// var a= require("readline-sync")
// b=a.questionInt("enetr the no")
// if (b>0){
//     console.log(b,"is positive number")
// }else if(b<0){
//     console.log(b,"is negative number")
// }else{
//     console.log(b,"is zero")
// }
// Q-4----// Write a python program to check whether a number is divisible by 5 and 11 or not.
// var a=require("readline-sync")
// b=a.questionInt("enter the no:")
// if (b%5===0 && b%11===0 ){
//     console.log("no is divisible by 5 and 11 both")
// }else{
//     console.log("no is not divisible by both the numbers ")
// }


// Q-5----// Write a python program to check whether a number is even or odd.
// var a=require("readline-sync")
// b=a.questionInt("enter the no:")
// if(b%2===0){
//     console.log(b,"is a even number")
// }else{
//     console.log(b,"is a odd number")
// }


// Q-6----// Write a python program to check whether a year is leap year or not.
// var a=require("readline-sync")
// b=a.questionInt("enter the no:")
// if (b%400===0 && b%100===0){
//     console.log(b,"is a leap year")
// }else if(b%4===0 && b%100!=0){
//     console.log(b,"is a leap year")
// }else{
//     console.log(b,"is not a leap year")
// }

 
// Q-7----Write a python program to check whether a character is an alphabet or not.
// var a=require("readline-sync")
// b=a.question("eneter the the character:")
// if (b>"a" && b<"z" || b>"A" && b<"Z"){
//     console.log(b,"is a character")
// }else{
//     console.log(b,"is not a character")
// }


// Q-8----Write a python program to input any alphabet and check whether it is vowel or consonant.
// b=a.question("enter the character")
// if(b=="a"|| b=="e"||b=="i" ||b=="o"||b=="u" ||b=="A" ||b=="E"||b=="I" ||b=="O"||b=="U"){
//     console.log(b,"is a vowel")
// }else{
//     console.log(b,"is a consonant")
// }

// Q-9----Write a python program to input any character and check whether it is alphabet, digit or special character.
// b=a.question("enter the character:")
// if(b>=0 && b<=9){
//     console.log(b,"is a digit")
// }else if(b>"a" && b<"z" || b>"A" && b<"Z"){
//     console.log(b,"is a alphabet")
// }else{
//     console.log(b,"is a special character")
// }


// Q-10----Write a python program to check whether a character is uppercase or lowercase alphabet.
// b=a.question("enter the character:")
// if (b>"a" && b<"z"){
//     console.log(b,"is in lowercase")
// }else{
//     console.log(b,"is in uppercase")
// }

// Q-11----Write a python program to input week number and print week day.
// b=a.question("enter the week day in nubers:")
// if(b==1){
//     console.log("Monday")
// }else if(b==2){
//     console.log("Tuesday")
// }else if(b==3){
//     console.log("Wednessday")
// }else if(b==4){
//     console.log("Thrusday")
// }else if(b==5){
//     console.log("Friday")
// }else if(b==6){
//     console.log("Saturdar")
// }else if (b==7){
//     console.log("Sunday")
// }else{
//     console.log("invalid")
// }

// Q-14----Write a python program to input angles of a triangle and check whether triangle is valid or not.
// b=a.questionInt("enter the no:") 
// c=a.questionInt("enetr the no:")
// d=a.questionInt("enter the no:")
// d=b+c+d
// if(d==180){
//     console.log("triangle is valid")
// }else{
//     console.log("triangle is invalid")
// }

// Q-15----Write a python program to input all sides of a triangle and check whether the triangle is valid or not.
// b=a.questionInt("enter the no:")
// c=a.questionInt("enter the no:")
// d=a.questionInt("enter the no:")
// if (b+c>=d && c+d>=b && b+d>=c){
//     console.log("triangle is valid")
// }else{
//     console.log("triangle is invalid")
// }

// Q-16----Write a python program to check whether the triangle is equilateral, isosceles or scalene triangle.
// b=a.questionInt("enter the no:")
// c=a.questionInt("enter the no:")
// d=a.questionInt("enter the no:")
// if(b==c==d){
//     console.log("triangle is equilater")
// }else if (b==c || c==d || d==b){
//     console.log("triangle is isosceless")
// }else{
//     console.log("triangle is scalene")
// }

// Q-17----Write a python program to calculate profit or loss.
// sellingPrice=a.questionInt("enter the selling price:")
// costPrice=a.questionInt("enter the cost price:")
// profit=sellingPrice - costPrice
// loss=costPrice-sellingPrice
// if (sellingPrice>costPrice){
//     console.log(profit,"is profit")
// }else if(costPrice>sellingPrice){
//     console.log(loss,"is loss")
// }else{
//     console.log("nothing")
// }

// Q-18----Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// Physics=a.questionFloat("enter the marks of physics:")
// Chemistry=a.questionFloat("enter the marks of chemistry:")
// Biology=a.questionFloat("enter the marks of biology:")
// Mathematics= a.questionFloat("enter the marks of maths:")
// Computer=a.questionFloat("enter the marks of computer:")
// Total_marks=Physics+Chemistry+Biology+Mathematics+Computer
// Percentage=Total_marks/5
// if (Percentage>=90){
//     console.log("Grade A")
// }else if (Percentage>=80 && Percentage<90){
//     console.log("Grade B")
// }else if(Percentage>=70 && Percentage<80){
//     console.log("Grade C")
// }else if (Percentage>=60 && Percentage<70){
//     console.log("Grade D")
// }else if (Percentage>=40 && Percentage<60){
//     console.log("Grade E")
// }else if(Percentage<40){
//     console.log("Grade F")
// }else{
//     console.log("none")
// }


// Q-19----Write a python program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// s=a.questionInt("enter the no")
// if (s<=10000){
//     hra=s*0.2
//     da=s*0.8
// }
// else if (10000<=s<=20000){
//     hra=s*0.25
//     da=s*0.9
// }
// else{
//     hra=s*0.3
//     da=s*0.95
// }gross=s+hra+da
// console.log(gross)

// Q-20----Write a python program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// u = a.questionInt('Enter The Amount Of Units Consumed:')
// if (u <= 50){
//     amt = u*.5
//     console.log('Amount To Be Paid Is:',amt)
// }
// else if (u <= 150 & u > 50){
//     amt = (50*0.5) + ((u-50)*0.75)
//     console.log('Amount To Be Paid Is:',amt)
// }
// else if(u <= 250 & u > 150){
//     amt = (50*0.5) + (100*0.75) + ((u-150)*1.2)
//     console.log('Amount To Be Paid Is:',amt)
// }
// else{
//     amt = (50*0.5) + (100*0.75) + (100*1.2) + ((u-250)*1.5)
//     console.log('Amount To Be Paid Is:',amt)
// }


// Q-21----A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. Ask the user for quantity, Suppose, one unit will cost 100. Judge and print total cost for user.
// quantity=a.questionInt("enter the quantity")
// if(quantity*100 > 1000){
//     cost  = (quantity*100)-(0.1*(quantity*100));
//     console.log("Your cost is ", cost);
// }
// else{
//     console.log("Your cost is ",quantity*100);
// }


// Q-22----A company decided to give a bonus of 5% to an employee if his/her year of service is more than 5 years. Ask users for their salary and year of service and print the net bonus amount.
// salary=a.questionInt("enter the salary of employe:")
// year_of_service=a.questionInt("enter the year of service:")
// bonus_amt=salary*0.5
// if (year_of_service>5){
//     console.log("The bonus amount of the employe is",bonus_amt)
// }else{
//     console.log("in this month you can't earn any type of bonus")
// }


// Q-23----A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.
// marks=a.questionInt("enter the no:")
// if (marks>=80){
//     console.log("A")
// }else if(marks>=60 && marks<80){
//     console.log("B")
// }else if(marks>=50 && marks<60){
//     console.log("C")
// }else if(marks>=45 && marks<50){
//     console.log("D")
// }else if (marks>=25 && marks<45){
//     console.log("E")
// }else if (marks<25){
//     console.log("F")
// }else{
//     console.log("none")
// }


// Q-24----Take the age of 3 people by user and determine oldest and youngest among them.
// b=a.questionInt("enter the age")
// c=a.questionInt("enter the age")
// d=a.questionInt("enter the age")

