let express = require('express')
let router = express.Router()
let anggota = require("../model/anggota_schema")


router.post("/create", async (req,res) => {
    let {nik, nama, jabatan, status} = req.body
    let input_data = {nik, nama, jabatan, status}
        
    
    let data = new anggota(input_data)
    data.save()

    return res.send({
        status : "succes",
        data,
        message: "data buku berhasil dimasukan"
    })
})

router.get("/getAll", async (req, res) => {
    let result = anggota.find({}).exec()

    res.send({
    status: "Sucess",
    result,
    message: "sama data berhasil tampil"

    })

})

router.get("/:id", async (req,res) => {
    let {id} = req.params

    let data = await anggota.findOne({ _id:id }).exec()

    return res.send({
        status: "Sucess",
        data,
        message: "sama data berhasil tampil"
    
        })   
    })

router.put("/:id", async (req,res) =>{
    let {id} = req.params
    let {nik, nama, jabatan, status} = req.body

    let updated_data ={
        nik, nama, jabatan, status}
    

    try{
        let data = await anggota.findByIdAndUpdate(id, updated_data) 
        return res.status(200).json({
            status: "succes",
            data,
            message: "data berhasil di updated"
        })
    
    }catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })

    }
})



router.delete("/:id", async (req,res) => {
    let {id} = req.params
    let query = await anggota.findByIdAndDelete({_id :id}).exec()

    return RegExp.status(200).json({
        status:"succes",
        query,
        message: "data berhasil dihapus"
    })
}
)

module.exports = router