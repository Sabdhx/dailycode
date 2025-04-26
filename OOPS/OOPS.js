// class information{
//   constructor(){
//     this.name = "abdullah";
//     this.age = 33;
//     this.fatherName = "zafar Ali"
//     this.gmail = "Syedaliabdullah@gmail.com"
//   }
//   firstMethod() {
//          return {
//           name:this.name,
//           age:this.age,
//           fatherName:this.fatherName,
//           gmail:this.gmail
//          }
//       }

//       secondMethod(){
//        return "hey nate hows life"
//       }
     

// }
// const firstUser = new information()
// const secondUser = new information()

// console.log(secondUser.secondMethod())

// console.log(secondUser.auth());

//  const objecting = {
//   secondObject:{
//     name:"ali abdullah",
//     class:"23",
//     hobby:"buckchodi"
//   }

//  }
//  console.log(objecting)


// this is about library management system in oops


// class Book {
//   constructor(title, author, isbn, isAvalible) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.isAvalible = isAvalible;
//   }

//   borrowBook() {
//     if (this.isAvalible) {
//       return `This ${this.title} book is available.`;
//     } else {
//       return `This ${this.title} book is already booked.`;
//     }
//   }

//   returnBook() {
//     if (!this.isAvalible) {
//       this.isAvalible = true;  // Update availability to true when returned
//       return `The book "${this.title}" is now returned and available.`;
//     } else {
//       return `The book "${this.title}" was not borrowed, so it cannot be returned.`;
//     }
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(newBook) {
//     this.books.push(newBook);
//     return `The book "${newBook.title}" has been added to the library.`;
//   }

//   findBookByIsbn(isbn) {
//     const specificBook = this.books.find(book => book.isbn === isbn);
//     if (specificBook) {
//       return `The book found by ISBN ${isbn} is: "${specificBook.title}" by ${specificBook.author}.`;
//     } else {
//       return `No book found with ISBN ${isbn}.`;
//     }
//   }

//   removeBook(isbn){
//     const bookIndex = this.books.findIndex(book => book.isbn === isbn)
//     if (bookIndex !== -1) {
//       this.books.splice(bookIndex, 1);
//       return `The book with ISBN ${isbn} has been removed.`;
//     } else {
//       return `No book found with ISBN ${isbn} to remove.`;
//     }
  
//   }
//   listBooks() {
//     return this.books.map(book => `${book.title} by ${book.author} - ${book.isAvalible ? 'Available' : 'Not Available'}`).join("\n");
//   }
// }


// const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748', true);
// const book2 = new Book('Clean Code', 'Robert C. Martin', '9780132350884', false);
// const book3 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509', true);

// const myLibrary = new Library();

// console.log(myLibrary.addBook(book1)); 
// console.log(myLibrary.addBook(book2)); 
// console.log(myLibrary.addBook(book3)); 

// console.log(myLibrary.listBooks()); 

// console.log(myLibrary.findBookByIsbn('9780596517748')); 
// console.log(myLibrary.findBookByIsbn('1234567890')); 

// console.log(book1.borrowBook()); 
// console.log(book2.borrowBook()); 

// console.log(book2.returnBook()); 
// console.log(book1.returnBook()); 

// console.log(myLibrary.removeBook('9780132350884')); 
// console.log(myLibrary.removeBook('1234567890')); 

// console.log(myLibrary.listBooks()); 


// class parent{
//   constructor(email){
//     this.email = email
//     // this.checking()
//   }
//   authentication(){
//     return `this is the user and has email of ${this.email}`   
//   }
//   checking(name){
//  return `this user is in the parent class and email "${this.email}" and the name is "${name}"`
//   }
// }
// class child extends parent{
//      constructor(name,email){
//       super(email)
//       this.name = name;
//       this.email = email;
//      }
//      checking(){
//       `this user is in the child class named ${this.name} and email ${this.email}`
//       return super.checking(this.name)
//      }
// }
// const parentObject = new child("Ali Abdullah", "abdullah@gmail.com")

// console.log(parentObject.checking())




// this is about inheritance






// class AwesomeFunctionalities {
//   constructor(sunroof, airConditioning, speed, fuel, color) {
//     this.speed = speed;
//     this.fuel = fuel;
//     this.color = color;
//     this.sunroof = sunroof;
//     this.airConditioning = airConditioning;
//   }
// }

// class Vehicle {
//   constructor(speed, fuel, color) {
//     this.speed = speed;
//     this.fuel = fuel;
//     this.color = color;
//   }

//   functionalities() {
//     return `These vehicles have good speed of ${this.speed}, good fuel rate of ${this.fuel}, and beautiful color of ${this.color}.`;
//   }
// }

// class Car extends Vehicle {
//   constructor(sunroof, airConditioning, speed, fuel, color) {
//     super(speed, fuel, color); // parent sets speed, fuel, color
//     this.sunroof = sunroof;
//     this.airConditioning = airConditioning;
//   }

//   updatedFunctionality(data) {
//     // Update car properties using data from AwesomeFunctionalities
//     this.speed = data.speed;
//     this.fuel = data.fuel;
//     this.color = data.color;
//     this.sunroof = data.sunroof;
//     this.airConditioning = data.airConditioning;

//     return `Updated car: Speed=${this.speed}, Fuel=${this.fuel}, Color=${this.color}, Sunroof=${this.sunroof}, AC=${this.airConditioning}`;
//   }
// }

// // Now create the objects properly:
// const carFunctionalities = new AwesomeFunctionalities(true, true, "200kmh", "4000", "gray");

// // You need to pass initial values while creating a Car (even if dummy)
// const carsClass = new Car(false, false, "0kmh", "0", "white");

// // Now update the car functionalities
// const loggingTheCarsClass = carsClass.updatedFunctionality(carFunctionalities);

// console.log(loggingTheCarsClass);



// encapsulation works

class mine{
  constructor(name,email){
    this.name = name
    let _email = email
  }
  getData(){
    return _email
  }

  setData(data){
    if(data > 0){
      return `this is the normal data of the form ${this.name}`
    }
  }
}


const makingClass = new mine("Ali Abdullah","Abdullah@gmail.com")
console.log(makingClass.setData(30))
console.log(makingClass.getData())