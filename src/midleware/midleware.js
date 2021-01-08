import jwt from 'jsonwebtoken'

class Middleware {


    validateUser = (req, res, next) => {
        // console.log(req.headers.token)
        jwt.verify(req.headers["token"], process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.json(err);
            } else {
                // req.body.userId = decoded.id;
                next();
            }
        });
    }

}

export default new Middleware()