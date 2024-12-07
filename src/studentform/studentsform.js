const knexdb=require('../../dbconnect/db')
const uuid=require('uuid')


const studentsForm=async(req,res)=>{

const {studentName,fatherName,phoneNumber,classLevel,gender,branch}=req.body

if(!studentName || ! fatherName || !phoneNumber || !classLevel || !gender || !branch){
    res.status(400).json({msg:'some fileds is missing'})
}


console.log("check console");


const insertData=await knexdb('studentsForm')
    .insert({
        id:uuid.v6(),
        student_name:studentName,
        father_name:fatherName,
        phone_number:phoneNumber,
        class_level:classLevel,
        student_gender:gender,
        branch:branch
    })


    console.log("check data ")

    if(!insertData){
        res.status(404).json({msg:'some criedensial'})
    }

    res.status(200).json({msg:'data hase been send'})

}


module.exports={studentsForm}