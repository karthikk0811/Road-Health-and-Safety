const jwt=require('jsonwebtoken');

const verifyJWT=(req,res,next)=>{

    //access verified using auth Headers
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    // console.log(token)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            // req.uname = decoded.username; //optional
            next();
        }
    );
    //access verified from token
    // const accessToken=req.cookies?.jwt;
    // if(accessToken){
    //     jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
    //         if(err) return res.sendStatus(403);
    //         req.user=decoded.username;
    //         next();
    //     })
    // }
}

module.exports=verifyJWT;