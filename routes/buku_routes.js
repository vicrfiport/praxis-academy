const express = require("express")
const router = express.Router()
const bukumodel = require("../model/buku_model")

router.post("/create", async (req,res) => {
    let {id_buku, judul, penulis, thn_terbit,penerbit} = req.body
    let input_data = {
        id_buku, judul, penulis, thn_terbit,penerbit}
    
    let data = new bukumodel(input_data)
    data.save()

    return res.send({
        status : "succes",
        data,
        message: "data buku berhasil dimasukan"
    })
})   

router.get("/getAll", async (req, res) => {
    let result = await bukumodel.find({}).exec()

    res.send({
    status: "Sucess",
    result,
    message: "sama data berhasil tampil"

    })

})

router.get("/:id", async (req,res) => {
    let {id} = req.params

    let data = await bukumodel.findOne({ _id:id }).exec()

    return res.send({
        status: "Sucess",
        data,
        message: "sama data berhasil tampil"
    
        })   
    })


module.exports = router