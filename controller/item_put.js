const connection = require("../database_connection/config")
const tokendata = require("../middleware/authetication")

module.exports.update_item =(decoded,req,res,next)=>{
    let sql="UPDATE Item SET price='" +req.body.price+ " ', quantity='"+req.body. quantity+ "'WHERE id="+req.params.id;
    let quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        
        console.log("successfully")
        res.send("update suceefully")


})




        
}