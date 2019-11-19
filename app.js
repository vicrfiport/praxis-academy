const express = require('express')
const app     = express()
require("./servers/db")


const index_routes = require("./routes/index")
const deklarasi_anggota = require("./routes/anggota_route")
const deklarasi_tahanan = require("./routes/tahanan_routes")

app.use(express.urlencoded({extended : true}))

app.use("/index", index_routes)
app.use("/anggota", deklarasi_anggota)
app.use("/tahanan", deklarasi_tahanan)


app.listen(3300, () => {
    console.log("exqample")
})