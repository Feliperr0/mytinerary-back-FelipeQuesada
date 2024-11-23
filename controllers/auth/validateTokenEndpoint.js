import User from "../../models/User.js";

const validateTokenEndpoint = async (req, res, next) => {
    try {
        // Actualizamos el estado del usuario a online
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        )

        return res.status(200).json({
            success: true,
            message: "Valid Token.",
            user: {
                email: req.user.email,
                photo: req.user.photo // Asumiendo que `photo` es parte del token decodificado
            }
        });

    } catch (error) {
        next(error);
    }
}

export default validateTokenEndpoint;
