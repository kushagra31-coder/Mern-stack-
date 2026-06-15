class Book {
    constructor(
        id,
        title,
        author,
        isBorrowed = false
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBorrowed = isBorrowed;
    }
}

module.exports = Book;