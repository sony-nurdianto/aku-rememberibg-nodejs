import jwt from 'jsonwebtoken'
import Member from "../models/member"
class Middleware {


    verify = async (req, res, next) => {
        console.log(req.headers.authorization)

    }


    validateUser = async (req, res, next) => {
        try {
            const decode = await jwt.verify(req.headers["token"], process.env.SECRET_KEY)
            if (!decode) {
                return res.status(400).json({ message: "acess deniend" })
            }

            req.locals = decode

            next()


        } catch (error) {
            return res.status(400).json({ message: 'internal server error' })
        }
    }


    // validateUser = (req, res, next) => {
    //     console.log(req.headers["token"])
    //     jwt.verify(req.headers["token"], process.env.SECRET_KEY, (err, decoded) => {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             const authToken = decoded
    //             next();
    //         }
    //     });
    // }

}

export default new Middleware()