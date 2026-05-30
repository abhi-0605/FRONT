// diff between var,let,const

// var is function scoped
// function abc(){
//     for(var i=0;i<11;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abc();

// let and const is braces scoped 
// function abc(){
//     for(let i=0;i<11;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abc();




// how to copy Reference value 

// let a=[23,34,45,56,2]
// let b=[...a]

// console.log(b);

// b.pop();
// console.log(a);
// console.log(b);

// let obj1={
//     name:"Abhi",
//     agr:34
// };
// let obj2={...obj1};
// obj2.name="ram";
// console.log(obj1);
// console.log(obj2);

// truthy and falsy 

// if(0){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }

// if(7){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }

// if(""){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }

// if("abhi"){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }

// if(NaN){
//     console.log("truthy");
// }else{
//     console.log("falsy")
// }


// for each (arr)

// let arr=[2,4,6,3,6,4];

// arr.forEach(function(idx){
//     console.log(idx+2);
// })

// arr.forEach(function(value ,idx){
//     console.log(idx, value);
// })

// for in (object)

// let obj={
//     name:"abhi",
//     age:34,
//     adr:"sdfygerfdjs"
// };

// for(let key in obj){
//     console.log(key);
// }

// for(let key in obj){
//     console.log(key,obj[key]);
// }


// how arr made behind
// let arr = [10, 20, 30];

// console.log(typeof arr);

// let arr=[34,3,56,7,34];

// arr={
//     0:34,
//     1:3,
//     2:56,
//     3:7,
//     4:34,
//     length:5
// };
// console.log(arr);


// let arr=[34,3,56,7,34];
// arr[-2]=34;
// console.log(arr);

// let obj={
//     name:"abhi",
//     age:34,
//     adr:"sdfygerfdjs"
// };

// delete obj.age;
// console.log(obj);


