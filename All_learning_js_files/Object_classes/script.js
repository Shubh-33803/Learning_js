// let students = {
//     marks:47,
//     name:"shubham",
//     details: function(){
//         console.log(this.name, this.marks);
//     }

// }

// let employee = {
//     calcTax(){
//         console.log("tax = 20%");
//     },
//     college:"maharaja surajmal institute",
//     course:"BCA",
// }


// let Rohan = {
//     sallery:50000,
// }

// Rohan.__proto__ = employee;



// This is class in javascript-------------------------

// class mycar{
//     constructor(pahla_car,mailage){
//         console.log("This is consturctor");
//         // this.firstcar = pahla_car;
//         // this.mailage = mailage;
//     }

//     start(){
//         console.log("This is start");
//     }
//     stop(){
//         console.log("This is stop");
//     }
//     setbrand(brand){
//         this.brandName = brand;
//     }
// }

// let toyota = new mycar("first_car",19);
// let maruti = new mycar("second_car",40);
// toyota.setbrand("Shubham");
// maruti.setbrand("Rohan");



// inheritance------

// class parent{
//     hello(){
//         console.log("Hello, World!");
//     }
    
// }

// class child extends parent{};

// let myobj = new child();



// class person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends person{
//     work(){
//         console.log("To solve problem");
//     }
// }

// let Shubham = new Engineer();


// class person{
// constructor(){
//         console.log("This is parent constractor!");
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends person{
    
//     constructor(){
//         super();
//         console.log("this is child constructor!");
//     }
    
    
//     work(){
//         console.log("work!");
//     }
// };


// let rohan = new Engineer();




// ❓example:-

// let data = "website hacked!";
// let username = prompt("enter your name");
// let useremail = prompt("enter your email");

// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("The data is ",data);
//     }
// }

// let user1 = new user(username,useremail);
// let user2 = new user(username,useremail);


// error handling 💣🧨

let a = 3;
let b = 5;
console.log("a + b = ", a+b);
console.log("a + b = ", a+b);

try{
    console.log("a + b = ", a+c);
}catch(err){
    console.log(err);
}
console.log("a + b = ", a+b);
console.log("a + b = ", a+b);