const Book = require(
    "../models/book"
);

class BookRepository {
    constructor() {
        this.books = [
            new Book(
                "1",
                "Clean Code",
                "Robert Martin"
            ),
            new Book(
                "2",
                "Node.js Design Patterns",
                "Mario Casciaro"
            )
        ];
    }

    findAll() {
        return this.books;
    }

    findById(id) {
        return (
            this.books.find(
                book => book.id === id
            ) || null
        );
    }
}

module.exports = BookRepository;