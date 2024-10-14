const express = require('express')
const app = express();
const port =8080;
const connection = require('./db')
connection()
const cors = require('cors')

//let userCollection = require('./models/UserSchema')
let userRouter = require('./routes/userRoutes')
let postRouter = require('./routes/postRouter')


app.use(cors());
app.set('view engine','ejs')

app.use(express.json({limit:"50mb"}))
app.get('/',(req,res)=> {
  res.send('Hello World')   
})  

// app.post('/create', async(req,res)=>{
//   let {name,email,password}= req.body;
//   let data = await userCollection.create({
//     name:name,
//     email:email,
//     password:password
//   })
//   res.json({msg:"user created successfully",success:true,data})
  
// })
// app.delete('/delete/:_id',async(req,res)=>{
//
//let data = await userCollection.deleteOne({email:req.body.email})
//   .then(()=>{
//     res.send("deleted successfully")
//   })

// })

// app.put('/update/:_id',async(req,res)=>{
//   let data = await userCollection.updateManey({_id:new (_id)},{$set:{name:name,email:email,password:password}})
//   .then(()=>{
//   res.send("user updated successfully")
// })
// })
app.use('/users',userRouter)
app.use('/posts', postRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})