// sync
// console.log("start");
// console.log("processing");
// console.log("end");


// async
// console.log("start");
// setTimeout(() => {
//     console.log("processing");
// }, 2000);
// console.log("end");


// promises

// let ans= new Promise((resolve, reject) => {
//     if(1){
//         return resolve();
//     }else{
//         return reject();
//     }
// })

// ans
// .then(function(){
//     console.log("resolve");
// })
// .catch(function(){
//     console.log("reject");
// })

// let ans= new Promise((resolve, reject) => {
//     let n= Math.floor(Math.random()*10);

//     if(n<5){
//         return resolve();
//     }else{
//         return reject();
//     }
// })

// ans
// .then(function(){
//     console.log("above");
// })
// .catch(function(){
//     console.log("below");
// })

// async await
// function delay(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("task done");
//         },2000);
//     })
// }

// async function run(){
//     console.log("start");
//     const ans=await delay();
//     console.log(ans);
//     console.log("end");
    
// }

// run();

