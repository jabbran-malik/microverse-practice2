class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('book-list');
    this.bookName = document.getElementById('input-book');
    this.authorName = document.getElementById('input-auth');
    this.addBtn = document.getElementById('add-btn');

    // Event listener
    this.addBtn.addEventListener('click', () => this.addBook());
    this.displayBooks();
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.classList.add('book-card');
      div.innerHTML = `
        <p>"${book.title}" by ${book.author}</p>
        <button class="delete-btn" onclick="library.removeBook(${index})">Remove</button>
      `;
      this.bookList.appendChild(div);
    });
  }

  addBook() {
    const title = this.bookName.value.trim();
    const author = this.authorName.value.trim();

    if (title && author) {
      const newBook = { title, author };
      this.books.push(newBook);
      this.saveToLocalStorage();
      this.displayBooks();
      this.bookName.value = '';
      this.authorName.value = '';
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveToLocalStorage();
    this.displayBooks();
  }
}

// Create an instance of the class
const library = new BookCollection();
