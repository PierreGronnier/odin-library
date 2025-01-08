const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
  displayLibrary();
}

function displayLibrary() {
  const container = document.getElementById("library-container");
  container.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.page}</p>
      <div class="read-status">
        <label for="read-checkbox-${index}">Read:</label>
        <input 
          type="checkbox" 
          id="read-checkbox-${index}" 
          ${book.read ? "checked" : ""} 
          onchange="toggleReadStatus(${index})"
        >
      </div>
      <button class="delete-btn" onclick="removeBook(${index})">Delete</button>
    `;
    container.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}

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

  addBookToLibrary(title, author, pages, read);
  modal.close();
  bookForm.reset();
});

addBookToLibrary("Harry Potter", "J.K. Rowling", 400, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Le Petit Prince", "Antoine de Saint-Exupéry", 96, true);
addBookToLibrary("Les Misérables", "Victor Hugo", 1232, false);
addBookToLibrary("L'Étranger", "Albert Camus", 123, true);
addBookToLibrary("Madame Bovary", "Gustave Flaubert", 378, false);
addBookToLibrary("La Peste", "Albert Camus", 308, true);
addBookToLibrary("Moby Dick", "Herman Melville", 635, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, true);
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 982, false);
