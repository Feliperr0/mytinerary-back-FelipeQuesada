import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        )
        console.log(req)

        return res.redirect('https://localhost:8080/home?token:' + req.token)

    }  catch (error) {
        next(error)
    }
}