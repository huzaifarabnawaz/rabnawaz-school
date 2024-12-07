const express=require('express')
const {studentsForm}=require('./studentsform')
const routes=express.Router()

routes.post('/studenform',studentsForm)

module.exports=routes
