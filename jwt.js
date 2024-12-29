const jwt = require("jsonwebtoken");

const jwtAuthMiddleware  = (req, res, next) => {
   
  // first check request headers has authorization or not 
  const authorization = req.headers.authorization;
  if(!authorization){
    return res.status(401).json({error: "token not found "});
  }


    // Extract the jwt token from the request headers
    const token  = req.headers.authorization.split(" ")[1];
     if(!token){
        return res.status(401).json({error: "Unauthorized"});
    }

    try{
         // Verify the jwt token
     const decode =  jwt.verify(token, process.env.JWT_SECRET);
      //Attach user information to the request
     req.userPayload = decode;
     next();

    }catch(err){
        console.log(err);
        return res.status(401).json({error: "Invalid token"});
    }
}


// function to generate JWT token
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '1h'});
}



module.exports = {jwtAuthMiddleware, generateToken};