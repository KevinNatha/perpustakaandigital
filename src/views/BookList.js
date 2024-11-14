class BookList {
    render() {
      const listHTML = `
        <h3 class="mb-4">Daftar Buku</h3>
        <div id="books" class="row g-3"></div>
      `;
      document.getElementById("book-list").innerHTML = listHTML;
    }
  
    addBookToList(book) {
      const listItem = document.createElement("div");
      listItem.className = "col-md-4"; // Setiap buku tampil dalam kolom grid
  
      // Menggunakan card untuk tampilan buku
      listItem.innerHTML = `
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Penulis: ${book.author}</p>
            <p class="card-text"><small class="text-muted">Tahun: ${book.year}</small></p>
          </div>
        </div>
      `;
      
      document.getElementById("books").appendChild(listItem);
    }
  }
  
  export default BookList;
  