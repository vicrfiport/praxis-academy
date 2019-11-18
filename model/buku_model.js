const mongoose = require("mongoose")
const Schema = mongoose.Schema

let bookSchema = new Schema ({

    id_buku : Number,
    judul : String,
    penulis : String,
    thn_terbit : String,
    penerbit : String,

})

let Book = mongoose.model("Book",bookSchema)

module.exports = Book

