const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify({ books }, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    const book = Object.values(books).find(book => book.isbn === isbn);

    if (book) {
        res.send(JSON.stringify(book, null, 4));
    } else {
        res.send(`Book with ISBN ${isbn} not found.`);
    }
});
  
// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    const book = Object.values(books).find(book => book.author === author);

    if (book) {
        res.send(JSON.stringify(book, null, 4));
    } else {
        res.send(`Book with author name ${author} not found.`);
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    const book = Object.values(books).find(book => book.title === title);

    if (book) {
        res.send(JSON.stringify(book, null, 4));
    } else {
        res.send(`Book with title ${title} not found.`);
    }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    const book = Object.values(books).find(book => book.isbn === isbn);

    if (book) {
        res.send(JSON.stringify(book, null, 4));
    } else {
        res.send(`Book with ISBN ${isbn} not found.`);
    }
});

module.exports.general = public_users;
