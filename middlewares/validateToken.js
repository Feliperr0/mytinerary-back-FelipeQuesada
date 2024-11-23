import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    // Se asume que el token se envía con el encabezado "Bearer"
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtener el token sin la palabra "Bearer"
    
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "No token provided."
        });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to authenticate token."
            });
        }

        // Guardamos la información decodificada en `req.user`
        req.user = decoded;
        next();
    });
}
