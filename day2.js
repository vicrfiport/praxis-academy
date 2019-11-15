// import { createWriteStream } from "fs"

/*
let var1='saya'
let var2 = 'vicri '

 let gabungan = ` kalimat ${var1} ${var2} adalah gabungan dari var1 dan var2`

 console.log(gabungan)
*/

/* 
const hewan =[4, 'kucing','ikan', 'berbulu']

 const [jmlkaki,namahewan,makanan, ciri] = hewan

 const hewan =[4, 'kucing','ikan', 'berbulu'] = [jmlkaki,namahewan,makanan, ciri]
 console.log(jmlkaki) //cara kedua
*/

/* /separated  between array and object
let [a, b ,...test] = [1,23,4,5,6,7,9,10]
 let [d,... tets] =[a,b]
 console.log(d)
*/

/*
// looping
let hewan =['kelici','kuda','singa','koala']
for  (let j=0 , len = hewan.length; j<len ; j++) {
    console.log(hewan[j])
}
*/

/*
// in one arrray within 3 object
let arr =[
    {
        firstName : "Vicri",
        lastName  : "kurniawan",
        nilai : 100

    },
    {
        firstName : "Vicri",
        lastName  : "kurniawan",
        nilai : 100

    },
    {
        firstName : "Vicri",
        lastName  : "kurniawan",
        nilai : 100

    }
]

hasil = arr.sort()
console.log(hasil)
*/

/*
const hewan =[4, 'kucing','ikan', 'berbulu']

//let x = hewan.pop()
//console.log(x)


//let x= hewan.push("saya")
//console.log(hewan)

//let x= hewan.shift()
//console.log(x)

//let x= hewan.splice(3)

let x= hewan.splice(0, 1, 'test')// menambahkan
console.log(hewan)
*/



//const personalInformation = {
    // firstName : 'vicri',
    // lastName : 'kurniawan',
    // status: 'mahasiswa',
    // state: 'bogor',
    // zipCode: '10310'

//}

//const firstName = personalInformation.zipCode
//console.log(firstName)

// personalInformation.state = 'jakarta'
// console.log(personalInformation)

/*
function detikSatu (){
    setTimeout(() => {
        console.log('detik 1')
    }, 111)
}
:
detikSatu()
*/


/*
let kelas3= [

    {nis:1,nama:'Vicri lurniawan'},
    {nis:2,nama:'robert'},

];

function tambahSiswa(siswa,callback)
{

kelas3.push(siswa);
 console.log('selesai push')
 callback()

}

function getKelas()
{
    console.log('kelas3',kelas3)
}

getKelas()
tambahSiswa({nis:3,nama:'stanly'},getKelas)
*/

let kelas3= [

    {nis:1,nama:'Vicri lurniawan'},
    {nis:2,nama:'robert'},

];

function tambahSiswa(siswa)
{

// kelas3.push(siswa)
return new Promise((resolve,reject) =>
{
    // setTimeout(function()
    
        try {
            resolve()
            kelas3.push(siswa)
        }catch(err){
            console.log(err)
        }
    

        //kelas3.push(siswa)

        
        // const err = false
        
        // if(!err){
        // resolve()
        // }else{
        //     reject('eror: ada sesuatu yang salah')
        // }
    })

    
    
}




function getKelas()
{
    console.log('kelas3',kelas3)
}

getKelas()
tambahSiswa({nis:3,nama:'stanly'},getKelas)
// tambahSiswa({nis:3,nama:'stanly'},getKelas)
//     .then(getKelas)
//     .catch(err => console.log(err))
async function init(){
    await tambahSiswa({nis:3,nama:'stanly'})
    await getKelas()
}

init()
