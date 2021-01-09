import jwt from 'jsonwebtoken'

class Middleware {


    // verify = async (req, res, next) => {
    //     console.log(req.headers.authorization)

    // }


    validateUser = async (req, res, next) => {

        const token = req.headers.authorization
        const secretKey = process.env.SECRET_KEY || 'secret'

        if (!token) {
            return res.status(400).json({ status: false, message: "authorization is empty" })
        }
        const auth = token.split(' ')[1]
        try {
            const decode = jwt.verify(auth, secretKey)
            if (!decode) {
                return res.status(400).json({ message: "token invalid" })
            }
            req.locals = decode
            return next()
        } catch (error) {
            console.log("error middleware")
            return res.status(500).json({ message: error })
        }

    }



}

export default new Middleware()