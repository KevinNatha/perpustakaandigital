import BookForm from "../views/BookForm.js";
import BookList from "../views/BookList.js";

class LibraryController {
  constructor() {
    this.bookForm = new BookForm(this.addBookToList.bind(this));
    this.bookList = new BookList();
  }

  init() {
    this.bookForm.render();
    this.bookList.render();
  }

  addBookToList(book) {
    this.bookList.addBookToList(book);
  }
}

export default LibraryController;
