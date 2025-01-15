class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.displayLibrary();
  }

  displayLibrary() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";

    this.books.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.innerHTML = this.getBookCardHTML(book, index);
      container.appendChild(bookCard);
    });
  }

  getBookCardHTML(book, index) {
    return `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <div class="read-status">
        <label for="read-checkbox-${index}">Read:</label>
        <input 
          type="checkbox" 
          id="read-checkbox-${index}" 
          ${book.read ? "checked" : ""} 
          onchange="library.toggleReadStatus(${index})"
        >
      </div>
      <button class="delete-btn" onclick="library.removeBook(${index})">Delete</button>
    `;
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayLibrary();
  }

  toggleReadStatus(index) {
    this.books[index].read = !this.books[index].read;
    this.displayLibrary();
  }
}

const library = new Library();

const modal = document.getElementById("book-modal");
const addBookBtn = document.getElementById("add-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const bookForm = document.getElementById("book-form");

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

cancelBtn.addEventListener("click", () => {
  modal.close();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  library.addBook(newBook);

  modal.close();
  bookForm.reset();
});

library.addBook(new Book("Harry Potter", "J.K. Rowling", 400, true));
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 310, false));
library.addBook(new Book("1984", "George Orwell", 328, true));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", 279, false));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 281, true));
library.addBook(new Book("Le Petit Prince", "Antoine de Saint-Exupéry", 96, true));
library.addBook(new Book("Les Misérables", "Victor Hugo", 1232, false));
library.addBook(new Book("L'Étranger", "Albert Camus", 123, true));
library.addBook(new Book("Madame Bovary", "Gustave Flaubert", 378, false));
library.addBook(new Book("La Peste", "Albert Camus", 308, true));
library.addBook(new Book("Moby Dick", "Herman Melville", 635, false));
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
library.addBook(new Book("War and Peace", "Leo Tolstoy", 1225, false));
library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 277, true));
library.addBook(new Book("Don Quixote", "Miguel de Cervantes", 982, false));