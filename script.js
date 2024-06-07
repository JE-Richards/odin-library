const myLibrary = [];

function Book (title, author, pageCount, readStatus, rating) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.rating = rating;
}

function addBookToLibrary (book) {
    return myLibrary.push(book);
}

function displayBooks () {
    const page = document.querySelector('.container');
    const table = document.createElement('table');

    const header = table.createTHead();
    let headerRow = header.insertRow(0);
    headerRow.insertCell(0).outerHTML = "<th scope='col'>Title</th>";
    headerRow.insertCell(1).outerHTML = "<th scope='col'>Author</th>";
    headerRow.insertCell(2).outerHTML = "<th scope='col'>Page Count</th>";
    headerRow.insertCell(3).outerHTML = "<th scope='col'>Read Status</th>";
    headerRow.insertCell(4).outerHTML = "<th scope='col'>Rating (/5)</th>";

    const body = table.createTBody();


    for (let i=0; i < myLibrary.length; i++) {
        let row = body.insertRow(-1);
        let tableCols = ['title', 'author', 'pageCount', 'readStatus', 'rating'];

        for (let j=0; j < tableCols.length; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = myLibrary[i][tableCols[j]];
        }
    }
    page.appendChild(table);
}
