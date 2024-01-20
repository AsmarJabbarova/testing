const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
dotenv.config()
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT ||3000


//model
const ProductModel=new mongoose.model("color",
new mongoose.Schema({
    name:String,
    price:Number,
    img:String,
    title:String
})
)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

//CRUD
app.get('/products',async(req,res)=>{
    const products=await ProductModel.find({})
    res.send(products)
})

app.get('/products/:id', async(req,res)=>{
    const id=req.params.id
    const product= await ProductModel.findById(id)
    res.send(product)
})

app.post('/products', async(req,res)=>{
    const New = new ProductModel({
        name:req.body.name,
        price:req.body.price,
        img:req.body.img,
        title:req.body.title

    })
    await New.save()
    res.send(New)
})
app.delete('/products/:id', async(req,res)=>{
    const id=req.params.id
    const deleteProducts= await ProductModel.findByIdAndDelete((id))
    res.send(deleteProducts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("MONGODB connected");
}).catch((err)=>{
    console.log("Failed");
})

//PORT=4040
//MONGO_URL=mongodb+srv://bd6p3ncs2:esmer2004@cluster0.bqscxnm.mongodb.net/?retryWrites=true&w=majority