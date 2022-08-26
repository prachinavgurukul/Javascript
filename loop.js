// for (let i=1;i<=100;i++){
//     console.log(i)
// }

// Q----1. Write a program to print the following using while loop
// Puja Na. First 10 Even numbers
// b. First 10 Odd numbers
// c. First 10 Natural numbers
// d. First 10 Whole numbers

// ODD:[which is not divisible by 2]
// for (let i=1;i<=10;i++){
//     if (i%2!=0){
//         console.log(i)
//     }
// }


// NATURAL-NUMBERS[start from 1,2,3,4,5,6,7,8,9,10]
// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// WHOLE-Number:[start from 0,1,2,3,4,5,6,7,,8,9,10]
// for (let i=0;i<=10;i++){
//     console.log(i)
// }


// Q---22. Write a program to print first 10 integers and their squares like// 1 1// 2 4// 3 9
// .....................and so on
// for (let i=1;i<=10;i++){
//     console.log(i,i**2)
// }


// Q---3Write while loop statement to print the following series:10, 20, 30 ... ... 300
// for (let i=10;i<=100;i+=10){
//     console.log(i)
// }


// Q---4:4. Write a while loop statement to print the following series
// 105, 98, 91 .........7
// for (let i=105;i>=7;i-=7){
//     console.log(i)
// }

// Q---5Write a program to print the first 10 natural numbers in reverse order.
// for (let i=10;i>=1;i-=1){
//     console.log(i)
// }


// Q---6Write a program to print the sum of the first 10 Natural numbers.
// let sum=0
// for (let i=1;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)


// Q---7Write a program to print the sum of the first 10 Even numbers.
// let sum=0
// for (let i=1;i<=20;i++){
//     if (i%2==0){
//         sum=sum+i
//     }
// }
// console.log(sum)


// Q---8Write a program to print a table of a number entered from the user.
// var n=require("readline-sync")
// var b=n.questionInt("enter the number:")
// for(let i=1;i<=10;i++){
//     console.log(b,'*',i,'=',b*i)
// }


// Q---9Write a program to display all even numbers that fall between two numbers (exclusive both numbers)
// entered by the user.
// var a=require("readline-sync")
// var b=a.questionInt("enter the start number:")
// var c=require("readline-sync")
// var d=c.questionInt("enter the last number:")
// for (let i=b;i<=d;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }


// Q---10 Write a program to check whether a number is prime or not.
// var a = require("readline-sync")
// var number=a.questionInt("enter the number:")
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }


// Q---11. Write a program to find the sum of the digits of a number accepted from the user.
// var a=require("readline-sync")
// var value =a.questionInt("enter the digit");
// sum = 0;
// while (value) {
//     sum += value % 10;
    // value =parseInt(value / 10);
//     console.log(value)
    // b=value.toFixed()
// }
// console.log(sum)
// console.log(b)

// Q---12Write a program to find the product of the digits of a number accepted from the user.
// var value = 251234567;
// mul = 1
// while (value) {
//     mul*= value % 10;
//     value = Math.floor(value / 10);
// }
// console.log(mul)


// Q---13Write a program to reverse the number accepted by the user.
// var a=require("readline-sync")
// var num=a.questionInt("enter the number:")
// for (let i=num;i>=0;i--){
//     console.log(i)
// }


// Q---15Write a program to print the Fibonacci series till n terms (Accept n from user)
// var x=0
// var y=1
// var z=0
// while (z<=100){
//     console.log(z)
//     x=y
//     y=z
//     z=x+y
// }

// Q---16Write a program to print the factorial of a number accepted by the user.
// var a=require("readline-sync")
// var num=a.questionInt("enter the no")
// fac=1
// while (num>0){
//     fac=fac*num
//     num=num-1
// console.log("factorial number is =",fac)
// }

// Q---17 Write a program to check whether a number is Armstrong or not. (Armstrong number is a number that is
// equal to the sum of cubes of its digits, for example : 153 = 1^3 + 5^3 + 3^3.)
// var a=require("readline-sync")
// var num = a.questionInt("Enter a number: ")
// sum=0
// temp=num
// while (temp>0){
//     digit = temp % 10
//     sum += digit ** 3
//     temp =parseInt(temp/10)
// }
//  if (num == sum){
//     console.log(num,"is an Armstrong number")
//  }else{
//     console.log(num,"is not an Armstrong number")
//  }
 


// even no
// var a=require("readline-sync")
// b=a.questionInt("enter the no:")
// for (let i=1;i<=b; i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }