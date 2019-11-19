const mongoose = require("mongoose")
const Schema = mongoose.Schema

let mahasiswaSchema = new Schema ({

    id_student: Number,
    nama : String,
    jurusan : String,
    fakultas : String
    
})

let student = mongoose.model("Book",mahasiswaSchema)

module.exports = student