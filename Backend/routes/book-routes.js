const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);



// router.get("/", async (req, res, next) => {
//     // this route will provide all of books 
//     let books;
//     try {
//         books = await Book.find();
//     } catch (error) {
//         console.log(err);
//     }

//     if(!books) {
//         return res.status(404).json({message: "No products found"});
//     }
//     return res.status(200).json({books});

// });

module.exports = router;