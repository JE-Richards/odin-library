function PersonalLibrary() {
    class Book {

        static #myLibrary = [];

        constructor (title, author, pageCount, readStatus, rating) {
            this.title = title;
            this.author = author;
            this.pageCount = pageCount;
            this.readStatus = readStatus;
            this.rating = rating;
        }

        static addBookToLibrary(book) {
            Book.#myLibrary.push(book);
        }

        static toggleRead(book) {
        (book.readStatus === true) ? (book.readStatus = false) : (book.readStatus = true);
        }

        // function to be called when the form is submitted
        // takes the last entry in the myLibrary array and creates a corresponding table entry for it
        static displayBooks() {
            const tbody = document.querySelector('tbody');

            let row = tbody.insertRow(-1);
            row.dataset.book = Book.#myLibrary.at(-1)['title'];
            let tableCols = ['title', 'author', 'pageCount', 'readStatus', 'rating', 'action'];

            for (let i=0; i < tableCols.length; i++) {
                let cell = row.insertCell(i);
                if (tableCols[i] === 'title' ||
                    tableCols[i] === 'author' ||
                    tableCols[i] === 'pageCount' ||
                    tableCols[i] === 'rating' 
                ) {
                    cell.innerHTML = Book.#myLibrary.at(-1)[tableCols[i]];
                }
                else if (tableCols[i] === 'readStatus') {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = 'bookReadStatus';
                    checkbox.checked = Book.#myLibrary.at(-1)[tableCols[i]]
                    checkbox.addEventListener('change', (event) => {
                        let checkRow = event.target.closest('tr');
                        let bookTitle = checkRow.getAttribute('data-book'); 
                        let bookIndex = Book.#myLibrary.findIndex(item => item.title === bookTitle);
                        Book.toggleRead(Book.#myLibrary[bookIndex]);
                    })
                    
                    cell.appendChild(checkbox);
                }
                else if (tableCols[i] === 'action') {
                    cell.innerHTML = '<button class="deleteBtn">Delete</button>';

                    // Couldn't get the delte function to work correctly when I recreated it as it's own global function
                    row.querySelector('.deleteBtn').addEventListener('click', (event) => {
                        const delRow = event.target.closest('tr');
                        const delTitle = delRow.getAttribute('data-book');
                        
                        // delete row in table
                        delRow.remove();

                        // Find and delete the corresponding array entry
                        let delIndex = Book.#myLibrary.findIndex(item => item.title === delTitle);
                        Book.#myLibrary.splice(delIndex, 1);
                    });
                }
            }
        }
    }

    const addBookBtn = document.getElementById("addBook");
    const dialog = document.querySelector('dialog');
    const inputForm = document.getElementById("userInput");
    const cancelBtn = document.getElementById("cancel");

    // Add functionality to the form and corresponding buttons
    addBookBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pageCount = document.getElementById('pageCount').value;
        const readStatus = document.getElementById('readStatus').checked;
        let rating = null;

        const stars = document.getElementsByName('stars');
        for (i=0; i < stars.length; i++) {
            if (stars[i].checked) {
                rating = stars[i].value;
            }
        }


        Book.displayBooks(Book.addBookToLibrary(new Book(title, author, pageCount, readStatus, rating)));

        event.target.reset();
        dialog.close();
    })

    cancelBtn.addEventListener("click", () => {
        dialog.close();
    });
}

PersonalLibrary();