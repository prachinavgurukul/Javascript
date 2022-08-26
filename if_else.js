// var a=require("readline-sync")
// var b=a.questionInt("enter the no:")
// if (b>5){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }



// Q-1// Write a python program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%.....................

// var basic_salary=require("readline-sync")
// var s=basic_salary.questionInt("enter the no")
// if (s<=10000){
//     hra=s*02
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


// Q-2// Write a python program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.....................

// var a=require("readline-sync")
// var u = a.questionInt('Enter The Amount Of Units Consumed:')
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


// Q-59. Write a Python program which accepts the user's first and last name and print them in reverse order with a space between them .
// Input1: kumar 
// Input 2:nayak
// Output: nayak kumar

// var a=require("readline-sync")
// var b= a.question("enter the first name:")
// var c=require("readline-sync")
// var d=c.question("enter the last name:")
// console.log(d,b)

// Q-60. Write a Python program to accept a filename from the user and print the extension of that. 
// Sample filename : abc.java
// Output : java

// var a=require("readline-sync")
// var b=a.question("enter the filename:")

