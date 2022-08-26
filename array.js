// let myFavouriteThings=["Ramani","Black",1,"Jan 2 1996"]
// // console.log(myFavouriteThings.length)
// console.log(myFavouriteThings[0])


// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
// console.log(array[index]);
// }

// METHODS OF ARRAYS
// Add an item to the end of an Array
// var fruits = ['Apple', 'Banana']

// fruits.push('Orange')
// console.log (fruits)

// var fruits = ['Apple', 'Banana', 'Orange']
// fruits.pop()
// console.log(fruits)

// Remove an item from the beginning of an Array
// Code Example
// var fruits = ['Apple', 'Banana', 'orange']
// fruits.shift()
// console.log(fruits)

// Add an item to the beginning of an Array
// Code Example
// var fruits = ['Apple', 'Banana']
// fruits.unshift('Grapes')
// console.log(fruits);

// Find an index of an items the Array
// Code Example
// let fruits = ['Apple', 'Banana', 'Orange']
// let position = fruits.indexOf('Banana')
// console.log(position);

// Remove an item by its index position
// Code Example
// var fruits = ['Apple', 'Banana', 'Orange']
// let removedItem = fruits.splice(1,1)
// console.log(removedItem)

// var arr = ['shweta', 'nayak', 'komal', 'zeba']
// // console.log(arr[0])              // output 'shweta' the first element
// // console.log(arr[1])              // logs 'nayak' the second element
// console.log(arr[arr.length - 1]) // logs 'Zeba' the last element.
// console.log(arr[0]);


// var myFavouriteGames = ["chess", "Ludo", "Badminton", "Volleyball"];
// console.log(myFavouriteGames);


// var myFavouriteFruits = ["Mango", "Orange", "Banana", "Grapes"];
// console.log(myFavouriteFruits[2]);

// var myFavouriteFruits = ["Mango", "Orange", "Banana"];
// console.log(myFavouriteFruits.pop());

// var myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.shift()
// console.log(myFavouriteGames);

// let myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("Basketball");
// console.log(myFavouriteGames);

// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removedItems = myFavouriteGames.splice(3,1);
// console.log(myFavouriteGames);


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var i=1
// var count=0
// while (i<=numbers.length){
//     count=count+1
//     i=i+1
// }
// console.log(count)


// MAX NUMBER
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var a=0
// var i=0
// while(i<=numbers.length){
//     if (numbers[i]>a){
//         a=numbers[i]
//     }i=i+1
// }console.log(a)

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=0;
// for(var i=0; i<numbers.length;i++){
// if (numbers[i]>max_num){
// 	max_num=numbers[i]
// }
// }console.log(max_num)


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var a=0
// var i=0
// while(i<=numbers.length){
//     if (numbers[i]>a){
//         a=numbers[i]
//     }i=i+1
// var b=0
// while(i<=numbers.length){
//     if (numbers[i]>b && numbers[i]>a!=b){
//         b=numbers[i]
//     }i=i+1
// }console.log(b)
// }


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(var i=numbers.length-1; i>=0;i--){
//    reversedArray.push(numbers[i])

// }
// console.log(reversedArray);



// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
// 	   new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length; j++){
//     if (new_array[j]===Name[j]){
//         count++;
// }
// }
// if(count===Name.length){
//     console.log("This is palindrome");
// }else{
//     console.log("This is not a palindrome");
// }


// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);








