const connection = require("../database_connection/config")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const tokendata = require("../middleware/authetication")






module.exports.login = async(req,res)=>{
    var email= req.body.email;
    var password = req.body.password;
    connection.query("SELECT * FROM Navgurukul WHERE email = '"+ email +"'",async function(err,result,field){
        // console.log(result)
        if(err){
            res.send({
                "code":400,
                "failed":"error occurred"
            })
        }else{
            if(result.length >0){
                console.log(result[0]);
                const plainPassword = req.body.password
                const hashedPassword = result[0].Password

                
                const data = {email:result.email}
                const createToken = jwt.sign(data,"pragati",{expiresIn:"1h"});
                console.log(createToken)
    
                

                const comparePassword = await bcrypt.compare(plainPassword,hashedPassword)
                if(comparePassword){
                    console.log("login successfully")
                    res.send({
                        "code":200,
                        "success":"login successfully",
                        token:createToken
            
                    })
                }else{
                    console.log("email and password does not match")
                    res.send({
                        "code":204,
                        "success":"Email and password does not match"
                    })






                }
            }else{
                console.log("email does not exists")
                res.send({
                    "code":206,
                    "success":"Email does not exits"
                })

            }



            }
        
        })

            }