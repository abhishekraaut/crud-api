const express = require("express");
const { addBook, getAllBooks, getSingleBook, updatedBook, deleteBook } = require("../controllers/books.controller");
const router = express.Router();

router.route('/').post(addBook);
router.route('/').get(getAllBooks);
router.route('/:id').get(getSingleBook);
router.route("/:id").put(updatedBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
