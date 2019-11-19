const express = require("express")
const router = express.Router()
const datamahasiswa = require("../model/mahasiswa_models")
// id_student: Number,
//     nama : String,
//     jurusan : String,
//     fakultas : String


router.post("/create", async (req,res) => {
    let {id_student, nama, jurusan, fakultas,} = req.body
    let input_data = {id_student, nama,jurusan, fakultas,
        }
    
    let data = new datamahasiswa(input_data)
    data.save()

    return res.send({
        status : "succes",
        data,
        message: "data buku berhasil dimasukan"
    })
})   

router.get("/getAll", async (req, res) => {
    let result = await datamahasiswa.find({}).exec()

    res.send({
    status: "Sucess",
    result,
    message: "sama data berhasil tampil"

    })

})

router.get("/:id", async (req,res) => {
    let {id} = req.params

    let data = await datamahasiswa.findOne({ _id:id }).exec()

    return res.send({
        status: "Sucess",
        data,
        message: "sama data berhasil tampil"
    
        })   
    })


module.exports = router