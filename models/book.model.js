const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    publicationYear: { type: Date, required: true },
    isbn: { type: Number, required: true }
},
    {
        timestamps: true,
        versionKey: false
    })

const book = mongoose.model("Book", bookSchema)

module.exports = book;