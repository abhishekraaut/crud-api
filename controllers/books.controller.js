const Book = require("../models/book.model");

exports.addBook = async (req, res) => {
    try {
        let book = await Book.findOne({ title: req.body.title });
        if (book) {
            return res
                .status(200)
                .send({ Success: false, message: "Book already exists", book: updatedBook });
        } else {
            book = await Book.create(req.body);
            return res.status(201).send({
                Success: true,
                message: "Book created successfully",
                book: book
            });
        }
    } catch (error) {
        return res.status(500).send({ errors: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (!books) {
            return res.status(401).send({ Success: false, message: "Unable to fetch books" });
        }
        return res.status(200).send({ Success: true, message: "Books found", books: books });
    } catch (error) {
        return res.status(500).send({ Success: false, error: error.message });
    }
}

exports.getSingleBook = async (req, res) => {
    console.log(req.params)
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(401).send({ Success: false, message: "Books not found" });
        }
        return res.status(200).send({ Success: true, message: "Book found", book: book });
    } catch (error) {
        return res.status(500).send({ Success: false, error: error.message });
    }
}

exports.updatedBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(401).send({ Success: false, message: "Books not found" });
        }
        const updtedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).send({ Success: true, message: "Book found", book: updtedBook });
    } catch (error) {  
        return res.status(500).send({ Success: false, error: error.message });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ Success: false, message: "Books not found" });
        }

        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        return res.status(200).send({ Success: true, message: "Book deleted", book: deletedBook });
    } catch (error) {
        return res.status(500).send({ Success: false, error: error.message });
    }
}

