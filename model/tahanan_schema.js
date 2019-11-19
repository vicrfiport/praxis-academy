let mongoose = require('mongoose')
let schema = mongoose.Schema

let tahananSchema = new schema({

    no_tahanan: Number,
    nama: String,
    alamat: String,
    kesalahan: String,

})

let Tahanan = mongoose.model("Tahanan",tahananSchema)

module.exports = Tahanan
