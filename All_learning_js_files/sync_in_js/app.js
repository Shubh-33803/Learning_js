//📝 first function then time
// ❌

// setTimeout(4000,()=>{
//     console.log("Hello, World!");
// });
// ------------------------------------------


// ✅ Right method
// setTimeout(()=>{
//     console.log("Hello,World!");
// },3000);

// function myTime(){
//     console.log("Shubham");
// }

// setTimeout(myTime,3000);




// Asynchronous programming----
// console.log("first");
// console.log("second");
// setTimeout(()=>{
//     console.log("asynchronous");
// },5000)
// console.log("third");
// console.log("forth");



// callback fuction ---------

// function abc(name){
//     greet(name);
// }

// function greet(name){
//     console.log("userName = ", name);
// }

// abc("Rohan", greet);


// function sum(a,b){
//     console.log(a+b);
// }

// function calculor(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculor(1,4, (c,d)=>{
//     console.log(c+d);
// })


// const CallBack = () => {
//     console.log("This is callback function");
// }

// setTimeout(CallBack,4000);



// callback Hell-----------------

// let age = 19;

// if(age>=18){
//     if(age>=60){
//         console.log("adult");
//     }else{
//         console.log("Young");
//     }
// }else{
//     console.log("Child");
// }

// for(let i = 0; i<6; i++){
//     let str = "";

//     for(let j = 0; j<5; j++){
//         str = str + j;
//     }
//     console.log(i,str);
    
// }


// function userData(data){
//     setTimeout(() => {
//         console.log("user data = ", data);
//     },4000);
// }

// function userData(userId,nextdata){
//     setTimeout(() => {
//         console.log("data = ",userId);
//         if(nextdata){
//             nextdata();
//         }
//     },3000);
// }

// userData(1, () => {
//     userData(2, () => {
//         userData(3,() => {
//             userData(4, () => {
//                 userData(5, () => {

//                 });
//             });
//         });
//     });
// });



//🫱🏻‍🫲🏽 promise ------------------------------------------

// let order = new Promise((resolve,reject) => {
//     console.log("order in the way");
//     resolve("123");
//     // reject("This is an error");
// });


// function userData(dataId,getNextDate){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // console.log("data = ",dataId);
//             // resolve("success");
//             // if(getNextDate){
//             //     getNextDate();
//             // }
//             reject("promise rejected");
//         },5000);
//     });
// }


// function userData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // console.log("This is resolve message");
//             // resolve("resolve promise");
//             reject("This is rejected message");
//             // reject();
//         },4000);
//     });
// }


// let myPms = userData();

// myPms.then((res) => {
//     console.log("Shubham",res);
// }).catch((rej) => {
//     console.log("Network Error:",rej);
// });






// function userDate1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("This is data1");
//             resolve("success");
//         },4000);
//     });
// }

// function userDate2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("This is data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fatching data1...");
// let pms1 = userDate1();

// pms1.then((res) => {
//     console.log(res);
// });


// console.log("fatching data2...");
// let pms2 = userDate2();

// pms2.then((res) => {
//     console.log(res);
// });



//🔗 promises chain---------------------------------

// function userData1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // console.log("This is data 1");
//             resolve("This is first information of website");
//         },5000);
//     });
// }

// function userData2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // console.log("This is data 2");
//             resolve("This is second information of app.js");
//         },5000);
//     });
// }

// let pms1 = userData1();

// console.log("fatching data1...");
// pms1.then((res) => {
//     console.log(res);

//     console.log("fatching data2...");
//     let pms2 = userData2();
//     pms2.then((res) => {
//         console.log(res);
//     });
// });



// 📝 Async-Await in javascript

// let a = async function greet(){
//     console.log("Welcome to javascript")
// }




// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather api called");
//             resolve(200);
//         },2000);
//     });
// }


// async function weatherData(){
//     await api();
//     await api();
// }




function userData(datehere){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data number = ", datehere);
            resolve("success");
        },3000);
    });
}

// async function callme(){
//     await userData(1);
//     await userData(2);
//     await userData(3);
//     await userData(4);
// }




// iitf- immediately invoked function expresstion

(async function(){
    await userData(1);
    await userData(2);
    await userData(3);
    await userData(4);
})();


