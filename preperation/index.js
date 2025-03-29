// object destruction

// const object  = {
//   name:"Ali Abdullah",
//   second:function(){
//     return console.log(this.name)
//   },
//   third:()=>{
//    return console.log(this.name)
//   },
//   fourth:[
//     "Ali","second","umar"
//   ]
// }

// const person={
//   name:"ALI",
//   location:{name:"Abdullah", address:"newyork City"}
// }

// const {location:{name,city}} = person;
// console.log(name)

// object.second();
// object.third();
// console.log(object.fourth)

// let globalVar = "I'm global";
// function test() {
//     globalVar = "I'm not global"
// }

// console.log(globalVar);

// function outerFunction(){
//   let count = 0;
//   return function InnerFuntion(){
//     count++;
//     console.log(count);
//   };
// }

// const counter = outerFunction(); // outerFunction runs and returns innerFunction
// counter(); // 1
// counter(); // 2
// counter(); // 3

// promises are used to run the async funtion more correctly then callback;
// const isOpen = "true";

// const learningPromises = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     if(isOpen === "true"){
//       resolve("this isOpen is set to true")
//     }else{
//       reject("this isOpen is set to false")
//     }
//   }, 2000);
// })


// learningPromises.then((data)=>console.log("true " +data)).catch((error)=>console.log("error "+error)).finally(()=>console.log("this one will run in every situation"))

// const dataFetching = async()=>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data))   // Handle data
//   .catch(error => console.log("Error:", error)); // Handle errors
// }
// dataFetching()


function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

