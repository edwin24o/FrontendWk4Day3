// Define the Book constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
};

// Library hold collection of books
const onlineLibrary = {
    collection: [],

    // Method to add a new book to the library
    addBook: function(book) {
        this.collection.push(book);
    },

    // Method to search for books by title or author
    searchBooks: function(query) {
        return this.collection.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
    },

    // Method to display all books in the library
    displayCollection: function() {
        if (this.collection.length === 0) {
            console.log("No books in the library.");
            return;
        }
        this.collection.forEach(book => {
            book.displayInfo();
        });
    }
};

// Example usage:
const book1 = new Book("The Adventures of Captain Underpants", "Dav Pilkey", 128);


onlineLibrary.addBook(book1);

// Display the library's collection
console.log("Library Collection:");
onlineLibrary.displayCollection();

// Search for books by title
const searchResults = onlineLibrary.searchBooks("Underpants");
console.log("\nSearch Result:");
searchResults.forEach(book => book.displayInfo());
