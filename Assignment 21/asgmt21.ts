interface Book {
    title: string;
    author: string;
    publishedYear: number;
    genres: string[];
}

const books: Book[] = [
    {
        title:  "To Kill a Mockingbird",
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

function displayBooks(bookArray: Book[]): void {
    bookArray.forEach(book => {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Published Year: ${book.publishedYear}`);
        console.log(`Genres: ${book.genres.join(", ")}`);
        console.log('---');
    });
}

displayBooks(books);
