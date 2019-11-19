let mongoose = require('mongoose')
let Schema = mongoose.Schema

let anggotaSchema = new Schema({

    nik: Number,
    nama: String,
    jabatan: String,
    status: String

})

let Anggota = mongoose.model("Anggota",anggotaSchema)

module.exports = Anggota