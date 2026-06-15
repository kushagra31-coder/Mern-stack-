class BookService {
    constructor(bookRepository) {
        this.bookRepository =
            bookRepository;
    }

    borrowBook(id) {
        const book =
            this.bookRepository.findById(
                id
            );

        if (!book) {
            throw new Error(
                "Book not found"
            );
        }

        if (book.isBorrowed) {
            throw new Error(
                "Book already borrowed"
            );
        }

        book.isBorrowed = true;

        return book;
    }

    returnBook(id) {
        const book =
            this.bookRepository.findById(
                id
            );

        if (!book) {
            throw new Error(
                "Book not found"
            );
        }

        if (!book.isBorrowed) {
            throw new Error(
                "Book is already available"
            );
        }

        book.isBorrowed = false;

        return book;
    }
}

module.exports = BookService;