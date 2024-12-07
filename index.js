const express=require('express')
const app=express()
app.use(express.json())
const studentForms=require('./src/studentform')
const cors=require('cors')

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/studentforms',studentForms)

app.listen(3000,()=>{
    console.log('port 3000 is runing ')
})