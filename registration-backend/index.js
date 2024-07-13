const express = require('express')
const app = express()
const port = 1101;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const cors = require('cors')
// const bcrypt = require('bcrypt');

app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sayoojsnair:Kl10ak2030@cluster0.bu3xb6o.mongodb.net/registration')
  .then(() => console.log('MongoDB Connected!'))

  .catch((e)=>{
    console.log('DB not connected')
  })


//model 1
const { Schema } = mongoose;
const userSchema = new Schema({
  formName: String,
  formPhoneno: Number,
  formEmail: String,
  formDob: String,
  formBatch: String,
  formGender: String
});
const User = mongoose.model('User', userSchema);


const loginSchema = new Schema({

  email: String,
  password: String,
  role: String
});
const Login = mongoose.model('Login', loginSchema);


app.post('/login', jsonParser,(req, res)=> {

  console.log(req.body);

  const {email,password}=req.body;
  Login.findOne({email:email}).then((result)=>{
    
    console.log(result)
 

    if(result){
      
      if(result.password == password){

        res.status(200).send({msg:'Login Successfull', role: result.role});
       
      }else{
        res.status(500).send({msg:'Password INCORRECT',result})
      }

    }else{

      res.status(500).send({msg:'Email does not exist',result})
    }
 
  })
})

app.use(bodyParser.json())


app.get('/', function(req,res){
  res.send('Hello World')
})

app.post('/sform', jsonParser,(req,res)=>{
  console.log("body data :",req.body);

const {formName,formPhoneno,formEmail,formDob,formBatch,formGender} = req.body;

  const createForm = new User({
    formName: formName,
    formPhoneno: formPhoneno,
    formEmail:formEmail,
    formDob:formDob,
    formBatch:formBatch,
    formGender:formGender
  })

  createForm.save().then((result)=>{
    res.status(201).json({msg:'Form created successfully',result})
  })
})



app.get("/sform",(req,res)=>{

  User.find({  }).then((result)=>{
    
    res.status(200).json(result)

  })
})


app.listen(port, () => {

  console.log("Server running on port", port)
})