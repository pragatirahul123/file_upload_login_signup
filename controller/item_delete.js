const connection = require("../database_connection/config")
const tokendata = require("../middleware/authetication")

module.exports.delete_item =(decoded,req,res,next)=>{
    var sql = "DELETE FROM Item WHERE id =" +req.params.id;
    var quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("delete")
        res.send("delete data")
    });
}