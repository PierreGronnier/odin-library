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
      <p>${book.read ? "Lu" : "Non lu"}</p>
      <button onclick="removeBook(${index})">Supprimer</button>
    `;
    container.appendChild(bookCard); 
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary(); 
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 400, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
