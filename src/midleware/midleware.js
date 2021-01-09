import jwt from 'jsonwebtoken'

class Middleware {


    // verify = async (req, res, next) => {
    //     console.log(req.headers.authorization)

    // }


    validateUser = async (req, res, next) => {

        console.log(req.headers)

        try {
            const decode = await jwt.verify(req.headers["token"], process.env.SECRET_KEY)
            console.log(decode)
            if (!decode) {
                return res.status(400).json({ message: "acess deniend" })
            }

            req.locals = decode

            next()
        } catch (error) {
            return res.status(400).json({ message: 'internal server error', error: error })
        }
    }



}

export default new Middleware()