// variables
var b='hey!cherry';
console.log(b);
var nothing=45;
console.log(nothing);

// manipulate DOM with javascript

/* ///It's just a fancy way of  saying change HTML with javascript */

//var age=prompt("What's your age");

//document.getElementById('tej').innerHTML=age;

//NUmbers in javascript

var num1=10;
//Increment num1 by 1
num1++;
console.log(num1);
//Decrement num1 by 1
num1--;
console.log(num1);

// Divide,multiply*,reminder %
console.log(num1%6);

//Increment or Ddecrement by any number you want
num1 += 20;
console.log(num1);

/* Functions
1. Create a function
2.Call the function
*/
//create
function fun1(){
    console.log('This is a function')
}
//call
fun1()

/* Let's create function that take in a name and says hello forward by your name
for example
Name='charan'
Return:"Hello charan"
*/
function greeting(yourname){
    var result="Hello"+' '+yourname; //string concatination
    console.log(result);
    }

//var name=prompt('What is your name');
//greeting(name);

//How arguments work in function?
// How do we add 2 numbers togrther in a function?

function sumNumbers(num1,num2){
    var result=num1+num2;
    console.log(result);
    }
sumNumbers(10,10);

/*while loop
 var num=0;
 while (num<=10){
    num+=1;
    console.log(num);
    }
   */
   //For loop
   /*for(let num=0;num<=10;num++){
        console.log(num);
       } */

//DAta types

let yourage=18; //Number
let yourname='cherry'; //string
let name={first:'jane',last:'Doe'}; // object
let truth=false; //Boolean
let groceries=['apple','bamnana','lemon']; //array
let random; //undefined
let nothig =null; //value null

//string in javascript(common methods)
let fruit='banana';
let moreFruits='banana\napple';  //new line
console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); //split by characters

//Array

let fruits=['apple','banana','gava','orange'];
fruits=new Array('apple','banana','gava','orange');   //other way of creating
console.log(fruits[3]); //acess value at index 3

// also change them
fruits[0]='lemon';
console.log(fruits);

for(let i=0;i< fruits.length;i++){
   console.log(fruits[i])
   }

//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);  //removes last item
console.log(fruits.push('blackberry'),fruits);  //appends
console.log(fruits[4]);
fruits[fruits.length]='strawberry';
console.log(fruits);
fruits.shift();  //removes first element from an array
console.log(fruits);
fruits.unshift('kiwi');  //adds first element to an array
console.log(fruits);

let vegetables=['carrot','tomato','potato','ladyfingers'];
let allgroceries=fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort()); // sorted by assending order

let someNumbers=[10,20,4,2,7,9,30,50,100,72,32,3];
console.log(someNumbers.sort(function(a,b) {return a-b})); //ascending order
console.log(someNumbers.sort(function(a,b) {return b-a}));

let emptyArray=new Array();
for(i=0;i<=10;i++){
    emptyArray.push(i);
    }

console.log(emptyArray);

//objects in javascript
//dictionarieds in python

let student={
    first:'Akula',
    last:'charan',
    age:22,
    height:154,
    studentInfo:function(){
        return this.first+'\n'+this.last+'\n'+this.age;
    }
};
//console.log(student.first);
//console.log(student.last);
//student.first='not cherry'   //change value
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//conditionals,Control flows(if else)
//18-35 is my target demoraphic
// && AND
//  || OR
var age=49;
if((age>=18) && (age<=35)){
    status='targrt demo';
    console.log(status);
}else{
    status='Not my audience';
    console.log(status);
}

//switch statements
//difference between weekday vs. weekend
// day 0 -->sunday -->weekend
// day 1 -->monday -->weekday
// day 2 -->tuesday -->weekday
// day 3 -->wednesday -->weekday
// day 4 -->thursday -->weekday
// day 5 -->friday -->weekday
// day 6 -->saturday -->weekend
var i= prompt('Enter a num between 0-6');
switch(i){
    case 0:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    default:
        text='weekday';
}
console.log(text);