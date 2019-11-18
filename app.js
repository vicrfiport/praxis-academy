const express = require('express')
const app     = express()
require("./servers/db")


const index_routes = require("./routes.js/index")
const deklarasi_buku = require("./routes.js/buku_routes")

app.use(express.urlencoded({extended : true}))

app.use("/index", index_routes)
app.use("/buku", deklarasi_buku)

app.listen(3300, () => {
    console.log("exqample")
})