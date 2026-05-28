//   word and keywords



// let name="abhi"
// console.log(name)

// variable and constant

// let age=34;
// const pi= 3.14;

// var,const,let

// var name="ram";
// const pi=3.14;
// let age=30;

// var is functional scope which cause bugs
// let and const is block scope work only in {}

//  hoisting

// console.log(a);
// var a=10;

// console.log(a);
// const a=10;  // ReferenceError


// console.log(a);
// let a=10;  //ReferenceError (TDZ)

// console.log("abhi0")

// types in js
// 1.primitive
// Number

// let age=39;
// console.log(typeof age);

// String
// let str="abhi";
// let str='abhi';
// let str=`abhi`;
// console.log(typeof str);

// Boolean
// let x=true;
// console.log(typeof x);

// undefined
// let x;
// console.log(typeof x);

// null
// let x=null;
// console.log(typeof x);

// BigInt
// let x=59754461128464575n;
// console.log(typeof x);

// Symbol

// let x=Symbol("x");
// console.log(typeof x);

// Non-Primitive

// [],{},()

// Object
// let student= {
//     name:'abhi',
//     agr:24
// };
// console.log(student);
// console.log(typeof student);

// Array
// let arr=[1,23,3,4,5];
// console.log(arr);
// console.log(typeof arr);

// functions

// function greet(){
//     console.log("hi");
    
// }
// greet();

// console.log(typeof greet)

// conditionals
// 1. if()

// let age=36;
// if(age>=18){
//     console.log("adult");
// }

// 2.if-else

    // let age=12;

    // if(age >= 18){
    //     console.log("can vote");
    // }else{
    //     console.log("can't vote");
    // }
// 3. if-else if-else
//  let x=88;
//     if(x>90){
//         console.log(1);
//     }else if(x<90 && x>80){
//         console.log(2);
//     }else{
//         console.log(3);
//     }

// switch

// let day=2;

// switch(day){
//     case 1:console.log("monday");
//     break;

//     case 2:console.log("tuesday");
//     break;

//     default:console.log("wrong");
  
// }


// ternary oper 

// let age=13;

// let ans=age>=18?"adult":"minor";
// console.log(ans);


// loop
// 1.for 
    
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// 2.while 

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// 3.do while 
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// 4.for..of

// let arr=[1,23,3,4,5];
// for(let i of arr){
//     console.log(i);
// }

// 5.for..in 

// let arr=[23,45,67,34,2];
// for(let idx in arr){
//     console.log(idx);
// }

// let student={
//     name:"abhi",
//     age:34
// };  
// for(let key in student){
//     console.log(key);
// }

// functions
// 1.function with parameters

// function greet(name){
//     console.log("hello" + " " +name);
// }
// greet("ram");


// 2.function with multiple parameters
// function add(a,b){
//     console.log(a+b);
// }
// add(2,3);


// 3.function with return 

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// 4.function expression 

// const greet=function(){
//     console.log("hello");
// };
// greet();

// 5.arrow function 

// const greet=()=>{
//     console.log("hello");

// }
// greet();

// 6. arrow function with parameter 

// const add=(a,b)=>{
//     console.log(a+b);
// }
// add(3,5);

// default function 
// function greet(name="ram"){
//     console.log(name);
// }
// greet();

// array 

// let arr=[24,45,6,34,56,3,6];
// console.log(arr); 

// let arr=[24,45,6,34,56,3,6];
// // push 
// arr.push(34);
// console.log(arr); 

// // pop 
// arr.pop();
// console.log(arr);

// // unshift
// arr.unshift(34);
// console.log(arr);

// // shift
// arr.shift();
// console.log(arr);

// // splice 
// arr.splice(2,3);
// console.log(arr);

// objects

// let student ={
//     name:"abhi",
//     age:34,
//     adr:"safzcsgreafc"
// };
// console.log(student);

// // access obj value
// // dot notation 
// console.log(student.age);
// // Bracket Notation
// console.log(student["age"]);
// student.age=35;
// console.log(student);
