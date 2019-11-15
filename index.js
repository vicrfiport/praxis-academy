const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/',(req,res) => {
    let email = req.body.email
	
	return res.send('the email value is '+email)
	
})

app.post('/tambah',(req,res) => {
	let a, b, c
	 a = parseInt(req.body.a)
     b = parseInt(req.body.b)
	
	 c = a + b
return res.send('penjumlahan ' +a+ ' dan ' +b+ ' adalah =' +c+".")
})

app.post('/kurang',(req,res) => {
	let a, b, c
	 a = parseInt(req.body.a)
     b = parseInt(req.body.b)
	
	 c = a - b
return res.send('pengurangan ' +a+ ' dan ' +b+ ' adalah =' +c+".")
})

app.post('/pembagian',(req,res) => {
	let a, b, c
	 a = parseInt(req.body.a)
     b = parseInt(req.body.b)
	
	 c = a / b
return res.send('pembagian ' +a+ ' dan ' +b+ ' adalah = ' +c+".")
})

app.post('/perkalian',(req,res) => {
	let a, b, c
	 a = parseInt(req.body.a)
     b = parseInt(req.body.b)
	
	 c = a * b
return res.send('perkalian ' +a+ ' dan ' +b+ ' adalah = ' +c+".")
})


app.post('/segitiga',(req,res) => {
	let a, b, c, 
	 d = 0.5
	 a = parseInt(req.body.a)
     b = parseInt(req.body.b)
	
	 c = a * b * d
return res.send('luas segitiga sama kaki ' +a+ ' dan ' +b+ ' adalah = ' +c+".")
})

app.post('/lingkaran',(req,res) => {
	let a,  
	 d = 3.14
	 a = parseFloat(req.body.a)
    
	
	 c = a * d
return res.send('luas lingkaran dengan diameter ' +a+ ' adalah = ' +c+".")
})



app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})



