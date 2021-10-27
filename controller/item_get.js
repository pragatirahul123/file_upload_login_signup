const connection = require("../database_connection/config")
const tokendata = require("../middleware/authetication")

module.exports.get_item =(decoded, req, res, next)=>{

    
    const query = 'SELECT * ' + 
                  'FROM `Navgurukul` ' +
                  'JOIN `Item` ON `Item`.`id` = `Navgurukul`.`id`';

    connection.query(query, (error, result) => {   
                                 
        if (error) throw error;
        console.log(result);
        res.send(result)
    });
}



