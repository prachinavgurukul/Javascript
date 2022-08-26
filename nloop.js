// 1. Write a program to print the following using while loop. First 10 Even numbers
// b. First 10 Odd numbers// c. First 10 Natural numbers// d. First 10 Whole numbers
// var i=0
// while (i<=10){
//     if (i%2!==0){
//         console.log(i)
//     }i=i+1
// }

// var i=1
// while(i<=10){
//     console.log(i);
//     i=i+1
// }

// var i=0
// while(i<=10){
//     console.log(i);
//     i=i+1
// }


// 2. Write a program to print first 10 integers and their squares like:::1 1,2 4,3 9
// for (let i=1;i<=20;i++){
//     console.log(i,i*i)
// }

// 3. Write while loop statement to print the following series:10, 20, 30 ... ... 
// for(let i=10;i<=100;i+=10){
//     console.log(i);
// }

// 4. Write a while loop statement to print the following series:105, 98, 91 .........7
// for(let i=105;i>=7;i-=7){
//     console.log(i);
// }

// 5. Write a program to print the first 10 natural numbers in reverse order
// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// 6. Write a program to print the sum of the first 10 Natural numbers.
// let sum=0
// for(let i=0;i<=10;i++){
//     sum+=i
// }console.log(sum);

// 7. Write a program to print the sum of the first 10 Even numbers.
// var sum=0
// for(let i=0;i<=10;i++){
//     if(i%2===0){
//         sum=sum+i
//     }
// }console.log(sum);

// 8. Write a program to print a table of a number entered from the user.
// var a=require("readline-sync")
// b=a.questionInt("enter the number:")
// for(let i=1;i<=10;i++){
//     console.log(b,"*",i,"=",b*i);
// }

// 9. Write a program to display all even numbers that fall between two numbers (exclusive both numbers)
// entered by the user.
// var a=require("readline-sync")
// b=a.questionInt("enter the first number:")
// c=a.questionInt("enter the last number:")
// for(i=b;i<=c;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// 10. Write a program to check whether a number is prime or not.
// var i,a=0;
// m=require("readline-sync")
// num=m.questionInt("enter the no:")
// for(i=2; i<num; i++)
// {
//   if(num%2==0)
//   {
//     a++;
//     break;
//   }
// }
// if(a==0)
//   console.log(num + " is a Prime Number");
// else
//   console.log(num + " is not a Prime Number");


// 11. Write a program to find the sum of the digits of a number accepted from the user
// var a=require("readline-sync")
// var value =a.questionInt("enter the digit");
// sum = 0;
// while (value) {
//     sum += value % 10;
//     value =parseInt(value / 10);
//     console.log(value)
//     b=value.toFixed()
// }
// console.log(sum)
// console.log(b)


// 12. Write a program to find the product of the digits of a number accepted from the user.
// var a=require("readline-sync")
// var value=a.questionInt("enter the digit:")
// product=1
// while (value){
//     product*=value%10
//     value=parseInt(value/10)
//     // console.log(value)
//     b=value.toFixed()
// }
// console.log(product)
// // console.log(b)


// 13.Write a program to reverse the number accepted by the user.
// var a=require("readline-sync")
// i=a.questionInt("enter the digit:")
// rev=0
// while (i>0){
//     rev=(rev*10)+i%10
//     i=parseInt(i/10)
// }i=i+1
// console.log(rev)


// 15.Write a program to print the Fibonacci series till n terms (Accept n from user)
// var x=0
// var y=1
// var z=0
// while (z<=100){
//     console.log(z)
//     x=y
//     y=z
//     z=x+y
// }

// 16.Write a program to print the factorial of a number accepted by the user.
// var a=require("readline-sync")
// var b=a.questionInt("enter the number:")
// fac=1
// while (b>0){
//     fac=fac*b
//     b-=1
// }console.log(fac);


// 17. Write a program to check whether a number is Armstrong or not. (Armstrong number is a number that is
// equal to the sum of cubes of its digits, for example : 153 = 1^3 + 5^3 + 3^3.)
// var a=require("readline-sync") 
// num=a.questionInt("enter the no:")
// sum=0
// temp=num
// while (temp>0){
//     digit = temp % 10
//     sum += digit ** 3
//     temp = parseInt(temp/10)
// }
// if (num==sum){
//     console.log(num,"is an arms!trong number");
// }
// else{
//     console.log(num,"is not an armstrong number!");
// }


// 18.Write a program to convert binary to decimal.
// var a=require("readline-sync")
// num=a.questionInt("enter the binary no")
// bin=0
// p=1
// n=num 
// while (n>0){
//     rem=parseInt(n%2)
//     bin=bin+rem*p
//     p=p*10
//     n=parseInt(n/2)
// }
// console.log("binary num of",num,"is",bin)

// 20.Write a program to check whether a number is palindrome or not.
// var a=require("readline-sync")
// i=a.questionInt("enter the number:")
// rev=0
// x=i
// while(i>0){
//     rev=(rev*10)+parseInt(i%10)
//     i=parseInt(i/10)
// }
// if(x==rev){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome");
// }


// 22. Write a program to accept 10 numbers from the user and display it’s average.
// var i=1
// var sum=0
// while(i<=10){
//     var a=require("readline-sync")
//     var b=a.questionInt("enter the no:")
//     sum+=b
//     avg=parseInt(sum/10)
//     i=i+1
// }
// console.log(avg)

// 24. Write a program to display sum of odd numbers and even numbers separately that fall between two
// numbers accepted from the user.(including both numbers) 100 and 500.
// var a=require("readline-sync")
// b=a.questionInt("enter the first no:")
// c=a.questionInt("enter the second no:")
// even_sum=0
// odd_sum=0
// while (b<=c){
//     if (b%2===0){
//         even_sum+=b
//     }else{
//         odd_sum+=b
//     }b+=1
// }console.log(even_sum);
// console.log(odd_sum);

// 27. Write a program to print the following series till n terms.1 4 9 16 25 _ _ _ _ _ n terms
// var i=1
// while(i<=20){
//     console.log(i*i)
//     i=i+1
// }


// 30.Write a program to find the sum of following series// 1 + 8 + 27 ............n terms
// var i=1
// while (i<=20){
//     console.log(i*i*i);
//     i=i+1
// }

// 30. Write a program to find the sum of following series// 1 + 8 + 27 ............n terms
// var i=1
// while (i<=10){
//     if (i%2==0){
//         console.log(i**3)
//     }else{
//         console.log(i**i)
//     }
//     i=i+1
// }

// 32.Write a program to find the sum of following series:S = -1 + 4 – 9 + 16 – 25 + 36 – ... ... n term
// var i=1
// while (i<=10){
//     if (i%2==0){
//         console.log(i*i);
//     }else{
//         console.log(-(i*i));
//     }i=i+1
// }

// 33. Write a Program to print all the characters in the string ‘COMPUTER’ using a while loop .
// var a="computer"
// var i=0
// while(i<=a.length){
//     console.log(a[i])
//     i=i+1
// }

//34. Write a program to print only odd numbers from the given list using a while loop . L = [23, 45, 32, 25, 46,// 33, 71, 90]
// var L = [23, 45, 32, 25, 46,33, 71, 90]
// var i=0
// while(i<L.length){
//     if (L[i]%2!==0){
//         console.log(L[i]);
//     }i=i+1
// }

// 38.Write a Python program to find those numbers which are divisible by 7 and multiple of 5, between 1500 and
// 2700 (both included).`
// var i=1700
// while (i>=1500 && i<=2700){
//     if (i%7==0 && i%5==0){
//         console.log(i);
//     }i=i+1
// }

// 39.Write a Python program to guess a number between 1 to 9
// var i=1
// while (i<=9){
//     console.log(i);
//     i=i+1
// }

// 40.Write a Python program to sum of two given integers. However, if the sum is between 15 to 20 it will return// 20.
// var a=5
// var b=11
// var sum=0
// sum=a+b
// if (sum>=15 && sum<=20){
//     console.log("20");
// }



