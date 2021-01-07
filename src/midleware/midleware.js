import jwt from 'jsonwebtoken'

export const validateUser = (req, res, next) => {
    jwt.verify(req.headers["token"], process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
            res.json(err);
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });
}