const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) => {
    try{
        let token = '';
        if(!req.headers.authorization){
            return res.status(401).send({
                message: 'NOT FOUND !',
                status: 401
            });
        }
        if(req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
            
        }else{
            token = req.headers.authorization;
        };
        const decoded = await jwt.verify(token, "pragati");
        req.tokenData = decoded;
        next(decoded)
        
    }catch(error){
        console.log('error', error);
        return res.status(401).json({
            message: 'Unauthorized!',
            status: 401
        });
    };
};







