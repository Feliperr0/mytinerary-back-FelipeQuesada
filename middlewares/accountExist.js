import User from "../models/User.js"

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        if (account) {
            return res.status(400).json({
                succes: false,
                messages: 'User Already exists'
            })
        }
        next()
    } catch (error) {
        next(error)

    }
}     


