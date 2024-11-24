import User from "../../models/User.js";

const validateTokenEndpoint = async (req, res, next) => {
    try {
        // Actualizamos el estado del usuario a online
        const updatedUser = await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true },
            { new: true } // Esto devuelve el usuario actualizado
        );

        return res.status(200).json({
            success: true,
            message: "Valid Token.",
            user: {
                name: updatedUser.name,
                email: updatedUser.email,
                photo: updatedUser.photo
            }
        });

    } catch (error) {
        next(error);
    }
}

export default validateTokenEndpoint;
