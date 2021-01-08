import jwt from 'jsonwebtoken'
import Member from "../models/member"
class Middleware {


    validateUser = async (req, res, next) => {
        try {
            const decode = await jwt.verify(req.headers["token"], process.env.SECRET_KEY)
            if (!decode) {
                return res.status(400).json({ message: "acess deniend" })
            }

            // const isMember = await Member.findById(decode.id)

            // const check = decode.id == isMember._id


            // console.log(decode.id, isMember._id)

            // if (!check) {
            //     return res.status(400).json({ message: "acess deniend 2" })
            // }



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