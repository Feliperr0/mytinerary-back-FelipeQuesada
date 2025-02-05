import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.body.email },
            { online: true }
        );

        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: {
                email: req.user.email,
                photo: req.user.photo, 
                name: req.user.name
            },
            token: req.token
        });

    } catch (error) {
        next(error);
    }
};
