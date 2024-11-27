import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        )
        console.log(req)
        console.log("TOKEN", req.token)

        return res.redirect('https://frontend-aa9cd.web.app/cities/?token=' + req.token + '')

    } catch (error) {
        next(error)
    }
}


