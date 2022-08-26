// 1. Write a program to print the following using while loop
// Puja Na. First 10 Even numbersb. First 10 Odd numbersc. First 10 Natural numbersd. First 10 Whole numbers
// EVEN NUMBER CODE
// i=1
// while (i<=10){
//     if(i%2==0){
//         console.log(i)
//     }i=i+1
// }

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let i=1
// do{
//     if(i%2==0){
//         console.log(i)
//     }
//     i=i+1
// }while (i<=10)

// ODD NUMBER CODE
// i=1
// while (i<=10){
//     if(i%2!=0){
//         console.log(i)
//     }i=i+1
// }

// for(let i=1;i<=10;i++){
//     if (i%2!=0){
//         console.log(i)
//     }
// }

// i=1
// do{
//     if(i%2!=0){
//         console.log(i)
//     }i=i+1
// }while(i<=10)

// NATURAL NUMBER 
// i=1
// while (i<=10){
//     console.log(i)
//     i+=1
// }

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// i=1
// do{
//     console.log(i)
//     i=i+1
// }while(i<=10)

// WHOLE NUMBERS CODE
// let i=0
// while (i<=10){
//     console.log(i)
//     i=i+1
// }

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// let i=0
// do{
//     console.log(i)
//     i=i+1
// }while(i<=10)

// 2. Write a program to print first 10 integers and their squares like1 12 43 9.....................and so on
// let i=1
// while(i<=10){
//     console.log(i,i**2)
//     i=i+1
// }

// for(let i=1;i<=10;i++){
//     console.log(i,i**2)
// }

// let i=1
// do{
//     console.log(i,i**2)
//     i=i+1
// }while(i<=10)

// 3. Write while loop statement to print the following series:10, 20, 30 ... ... 300
// let i=10
// while (i<=1000){
//     console.log(i)
//     i+=10
// }

// for(let i=10;i<=100;i+=10){
//     console.log(i)
// }

// let i=10
// do{
//     console.log(i)
//     i+=10
// }while(i<=100)

// 4. Write a while loop statement to print the following series105, 98, 91 .........7
// let i=105
// while (i>=7){
//     console.log(i)
//     i=i-1
// }

// for(let i=105;i>=7;i-=7){
//     console.log(i)
// }

// let i=105
// do{
//     console.log(i)
//     i-=7
// }while(i>=7)

// 5. Write a program to print the first 10 natural numbers in reverse order.
// let i=10
// while(i>=1){
//     console.log(i)
//     i-=1
// }

// for(let i=10;i>=1;i-=1){
//     console.log(i)
// }

// let i=10
// do{
//     console.log(i)
//     i-=1
// }while(i>=1)

// 6. Write a program to print the sum of the first 10 Natural numbers.
// let i=1
// let sum=0
// while(i<=10){
//     sum=sum+i
//     i=i+1
// }console.log(sum)

// let sum=0
// for(let i=1;i<=10;i++){
//     sum=sum+i
// }console.log(sum)

// let i=1
// let sum=0
// do{
//     sum=sum+i
//     i=i+1
// }while(i<=10)
// console.log(sum)

// 7. Write a program to print the sum of the first 10 Even numbers.
// let i=1
// sum=0
// while (i<=20){
//     if (i%2==0){
//         sum=sum+i
//     }i=i+1
// }console.log(sum)

// let sum=0
// for(let i=1;i<=20;i++){
//     if (i%2==0){
//         sum=sum+i
// }
// }console.log(sum)

// let i=1
// sum=0
// do{
//     if(i%2==0){
//         sum=sum+i
//     }i=i+1
// }while (i<=20)
// console.log(sum)

// 8.Write a program to print a table of a number entered from the user
// var a=require("readline-sync")
// b=a.questionInt("enterhe the no:")
// i=1
// while(i<=10){
//     console.log(b,"*",i,"=",b*i)
//     i=i+1
// }

// var a=require("readline-sync")
// b=a.questionInt("enterhe the no:")
// for(let i=1;i<=10;i++){
//     console.log(b,"*",i,"=",b*i)
// }


// var a=require("readline-sync")
// b=a.questionInt("enterhe the no:")
// i=1
// do{
//     console.log(b,"*",i,"=",b*i)
//     i=i+1
// }while(i<=10)

// 9. Write a program to display all even numbers that fall between two numbers (exclusive both numbers)
// entered by the user.
// var a=require("readline-sync")
// i=a.questionInt("enter the start number:")
// c=a.questionInt("enter the end numbre:")
// while(i<=c){
//     if (i%2==0){
//         console.log(i)
//     }i=i+1
// }

// var a=require("readline-sync")
// c=a.questionInt("enter the end numbre:")
// for(i=a.questionInt("enter the start number:");i<=c;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// var a=require("readline-sync")
// i=a.questionInt("enter the start number:")
// c=a.questionInt("enter the end numbre:")
// do{
//     if(i%2==0){
//         console.log(i)
//     }i=i+1
// }while(i<=c)

// 10. Write a program to check whether a number is prime or not.
// var i=2
// m=require("readline-sync")
// num=m.questionInt("enter the no:")
// if(num==1){
//     console.log(`${num}`,"is not prime no")
// }else if(num<0){
//     console.log(`${num}`,"never negetive no is not a prime no")
// }else{
//     while(i<num){
//         if(num%i==0){
//             var res=(`${num} is not a prime no`)
//             break;
//         }else{
//             var res=(`${num} is a prime no`)
//         }i=i+1
//     }console.log(res)
// }

// var i=0
// m=require("readline-sync")
// num=m.questionInt("enter the no:")
// if(num==1){
//     console.log(`${num}`,"is not prime no")
// }else if(num<0){
//     console.log(`${num}`,"never negetive no is not a prime no")
// }else{
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             var res=(`${num} is not a prime no`)
//             break;
//         }else{
//             var res=(`${num} is a prime no`)
//         }
//     }console.log(res)
// }


///////////////////////// PRIME NUMBERS BETWEEN 2 TO 20////////////////////
// for(var i=2;i<=20;i++){
//     for(var j=2;j<i;j++){
//         if (i%j==0){
//             break;
//         }
//     }
//     if(i==j){
//         console.log(i)
//     }
// }

// 11. Write a program to find the sum of the digits of a number accepted from the user. 






