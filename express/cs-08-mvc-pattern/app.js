const express = require("express");

const BookRepository = require("./src/repositories/bookRepository");
const BookService = require("./src/services/bookService");
const BookController = require("./src/controllers/bookController");

const app = express();

app.use(express.json());

const bookRepository = new BookRepository();

const bookService = new BookService(
    bookRepository
);

const bookController = new BookController(
    bookService
);

app.post(
    "/books/:id/borrow",
    (req, res) =>
        bookController.borrowBook(
            req,
            res
        )
);

app.post(
    "/books/:id/return",
    (req, res) =>
        bookController.returnBook(
            req,
            res
        )
);

app.listen(3000, () => {
    console.log(
        "Library system running on port 3000"
    );
});