const not_found_handler = (req,res,next ) => { ///los middlewares se escriben con raya al piso
    return res.status(404).json({
        success: false,
        message:  `Ruta no encontrada Metodo:${req.method} Ruta:${req.url}  ` 
    })
}


export default not_found_handler