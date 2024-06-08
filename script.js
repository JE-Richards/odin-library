const myLibrary = [];

function Book (title, author, pageCount, readStatus, rating) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.rating = rating;
}

Book.prototype.addBookToLibrary = function() {
    return myLibrary.push(this);
}

function displayBooks () {
    const tbody = document.querySelector('tbody');

    let row = tbody.insertRow(-1);
    row.dataset.book = myLibrary.at(-1)['title'];
    let tableCols = ['title', 'author', 'pageCount', 'readStatus', 'rating'];

    for (let i=0; i < tableCols.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = myLibrary.at(-1)[tableCols[i]];
    }
}
