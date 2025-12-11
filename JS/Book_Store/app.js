class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


// Ui

class UI {

  addBookToTable(book) {


    const tableBody = document.querySelector("#book-list")

    const row = document.createElement("tr")

    row.innerHTML = `
        <td>${book.title}</td>
               <td>${book.author}</td>
               <td>${book.isbn}</td>
               <td class="delete">
                  <span class="btn btn-danger">X</span>
               </td>
    `;


    tableBody.appendChild(row)

  }


  clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#ISBN").value = "";
  }

  deleteForm(targetElement){
    if (targetElement.className = "delete"){
      targetElement.parentElement.remove();
    }
  }

  clearTable() {
    document.querySelector("#book-list").innerHTML = "";
  }


}

class Store {
  
  getBooks() {
    const books = localStorage.getItem("books")
    return books ? JSON.parse(books) : [];
  }

  addBooks(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books))

    console.log(this)
  }

  removeBook(isbn) {

    const books = this.getBooks();

    const filtered = books.filter(function(book) {
      return book.isbn !== isbn;
    })

    localStorage.setItem("books", JSON.stringify(filtered));

  }

  clearBooks(){

    localStorage.removeItem("books");

  }
}

// loaded

document.addEventListener("DOMContentLoaded", function() {

  const ui = new UI();
  const store = new Store();
  const books = store.getBooks();

  books.forEach(function(value) {
    ui.addBookToTable(value)
  })

})


// Event Listener

document.querySelector("#book-form").addEventListener("submit", function (e) {

  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#ISBN").value;

  const book = new Book(title, author, isbn)
  const ui = new UI();
  const store = new Store();


  if (title === "" && author === "" && isbn === "") {
    alert("Please fill the Book Details")
  } else if (title === "" && author === "") {
    alert("Please fill the Title & Author")
  } else if (author === "" && isbn === "") {
    alert("Please fill the Author & ISBN")
  } else if (title === "" && isbn === "") {
    alert("Please fill the Author & ISBN")
  } else if (isbn === "") {
    alert("Please will the ISBN")
  } else if (title === "") {
    alert("Please will the Title")
  } else if (author === "") {
    alert("Please will the Author")
  } else {

    ui.addBookToTable(book)
    store.addBooks(book)
    ui.clearForm()

  }


})


document.querySelector("#book-list").addEventListener("click", function(e) {

    const ui = new UI();

    const store = new Store();

    const isbn = e.target.parentElement.previousElementSibling.innerText

    ui.deleteForm(e.target.parentElement);
    store.removeBook(isbn)

})


document.querySelector(".clear").addEventListener("click", function(e) {

  const ui = new UI();
  const store = new Store();

  ui.clearTable()
  store.clearBooks()

})