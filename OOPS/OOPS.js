class information{
  constructor(){
    this.name = "abdullah";
    this.age = 33;
    this.fatherName = "zafar Ali"
    this.gmail = "Syedaliabdullah@gmail.com"
  }
  firstMethod() {
         return {
          name:this.name,
          age:this.age,
          fatherName:this.fatherName,
          gmail:this.gmail
         }
      }

      secondMethod(){
       return "hey nate hows life"
      }
     

}
const firstUser = new information()
const secondUser = new information()

console.log(secondUser.secondMethod())

console.log(secondUser.auth());

 const objecting = {
  secondObject:{
    name:"ali abdullah",
    class:"23",
    hobby:"buckchodi"
  }

 }
 console.log(objecting)



class Book {
  constructor(title, author, isbn, isAvalible) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvalible = isAvalible;
  }

  borrowBook() {
    if (this.isAvalible) {
      return `This ${this.title} book is available.`;
    } else {
      return `This ${this.title} book is already booked.`;
    }
  }

  returnBook() {
    if (!this.isAvalible) {
      this.isAvalible = true;  // Update availability to true when returned
      return `The book "${this.title}" is now returned and available.`;
    } else {
      return `The book "${this.title}" was not borrowed, so it cannot be returned.`;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
    return `The book "${newBook.title}" has been added to the library.`;
  }

  findBookByIsbn(isbn) {
    const specificBook = this.books.find(book => book.isbn === isbn);
    if (specificBook) {
      return `The book found by ISBN ${isbn} is: "${specificBook.title}" by ${specificBook.author}.`;
    } else {
      return `No book found with ISBN ${isbn}.`;
    }
  }

  removeBook(isbn){
    const bookIndex = this.books.findIndex(book => book.isbn === isbn)
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      return `The book with ISBN ${isbn} has been removed.`;
    } else {
      return `No book found with ISBN ${isbn} to remove.`;
    }
  
  }
  listBooks() {
    return this.books.map(book => `${book.title} by ${book.author} - ${book.isAvalible ? 'Available' : 'Not Available'}`).join("\n");
  }
}


const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748', true);
const book2 = new Book('Clean Code', 'Robert C. Martin', '9780132350884', false);
const book3 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509', true);

const myLibrary = new Library();

console.log(myLibrary.addBook(book1)); 
console.log(myLibrary.addBook(book2)); 
console.log(myLibrary.addBook(book3)); 

console.log(myLibrary.listBooks()); 

console.log(myLibrary.findBookByIsbn('9780596517748')); 
console.log(myLibrary.findBookByIsbn('1234567890')); 

console.log(book1.borrowBook()); 
console.log(book2.borrowBook()); 

console.log(book2.returnBook()); 
console.log(book1.returnBook()); 

console.log(myLibrary.removeBook('9780132350884')); 
console.log(myLibrary.removeBook('1234567890')); 

console.log(myLibrary.listBooks()); 
