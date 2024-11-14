import Book from "../models/Book.js";

class BookForm {
  constructor(addBookCallback) {
    this.addBookCallback = addBookCallback; // Callback untuk menambah buku ke daftar
  }

  render() {
    const formHTML = `
      <form id="add-book-form">
        <div class="mb-3">
          <label for="title" class="form-label">Judul Buku</label>
          <input type="text" id="title" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Penulis</label>
          <input type="text" id="author" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="year" class="form-label">Tahun</label>
          <input type="date" id="year" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Tambah Buku</button>
      </form>
    `;
    document.getElementById("book-form").innerHTML = formHTML;
    document.getElementById("add-book-form").addEventListener("submit", this.handleAddBook.bind(this));
  }

  handleAddBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = new Date(document.getElementById("year").value).getFullYear(); // Ambil tahun dari input date

    const book = new Book(title, author, year);

    // Langsung tambahkan buku ke daftar tanpa popup
    this.addBookCallback(book);

    // Reset form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
  }
}

export default BookForm;
