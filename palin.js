var a=require("readline-sync")
b=a.questionInt("enter the no:")
i=0
rev=0
while (b>0){
    rev=(rev*10)+i%10
    i=Number(i/10)
    i++
}
if(a==rev){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
