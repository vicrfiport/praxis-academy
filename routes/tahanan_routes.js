let express = require('express')
let router = express.Router()
let tahananSchema = require("../model/tahanan_schema")

// no_tahanan: Number,
//     nama: String,
//     alamat: String,
//     kesalahan: String,

router.post("/create", async (req,res) => {
    let {no_tahanan,nama ,alamat,kesalahan} = req.body
    let input_data = {no_tahanan,nama ,alamat,kesalahan}
        
    
    let data = new tahananSchema(input_data)
    data.save()

    return res.send({
        status : "succes",
        data,
        message: "data buku berhasil dimasukan"
    })
})

router.get("/getAll", async (req, res) => {
    let result = tahananSchema.find({}).exec()

    res.send({
    status: "Sucess",
    result,
    message: "sama data berhasil tampil"

    })

})

router.get("/:id", async (req,res) => {
    let {id} = req.params

    let data = await tahananSchema.findOne({ _id:id }).exec()

    return res.send({
        status: "Sucess",
        data,
        message: "sama data berhasil tampil"
    
        })   
    })

router.put("/:id", async (req,res) =>{
    let {id} = req.params
    let {no_tahanan,nama ,alamat,kesalahan} = req.body

    let updated_data ={no_tahanan,nama ,alamat,kesalahan}
    

    try{
        let data = await tahananSchema.findByIdAndUpdate(id, updated_data) 
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
    let query = await tahananSchema.findByIdAndDelete({_id :id}).exec()

    return RegExp.status(200).json({
        status:"succes",
        query,
        message: "data berhasil dihapus"
    })
}
)

module.exports = router