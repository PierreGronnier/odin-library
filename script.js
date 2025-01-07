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
      <p>Auteur: ${book.author}</p>
      <p>Pages: ${book.page}</p>
      <p>${book.read ? "Read" : "Not read"}</p>
      <button onclick="removeBook(${index})">Supprimer</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read</button>
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
displayLibrary();
