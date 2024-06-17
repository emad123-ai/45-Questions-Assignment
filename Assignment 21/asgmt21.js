var books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        genres: ["Fiction", "Classics", "Historical"],
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        genres: ["Dystopian", "Science Fiction", "Political Fiction"],
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genres: ["Fiction", "Classics", "Tragedy"],
    }
];
function displayBooks(bookArray) {
    bookArray.forEach(function (book) {
        console.log("Title: ".concat(book.title));
        console.log("Author: ".concat(book.author));
        console.log("Published Year: ".concat(book.publishedYear));
        console.log("Genres: ".concat(book.genres.join(", ")));
        console.log('---');
    });
}
displayBooks(books);
