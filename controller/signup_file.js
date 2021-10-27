const connection = require("../database_connection/config")
const bcrypt = require("bcrypt")
//const jwt = require('jsonwebtoken')


module.exports.register = async(req,res)=>{
    const salt =10;
    const hashaPassword = await bcrypt.hash(req.body.password,10)
    console.log(req.body.password)

    let userData={
        id:req.body.id,
        profile_picture:req.body.profile_picture,
        username:req.body.username,
        email:req.body.email,
        password:hashaPassword,
        gender:req.body.gender,
        dob:req.body.dob,
        qualification:req.body.qualification,
        


    }

    connection.query("SELECT email FROM Navgurukul WHERE email ='"+req.body.email+"'",function(err,result,field){
        console.log("HIIIII")
        if(result.length >= 0){
            
            var sql = "INSERT INTO Navgurukul SET ?";
            connection.query(sql,userData,(err,result)=>{
            if (err) throw err;
            console.log("signup successfully")
            res.send("signup sucessfully")

            })
            
            

        }else{
            console.log("user already exits")
            res.send("user already exits")
        }
    })
}