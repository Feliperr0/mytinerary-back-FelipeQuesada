const not_found_handler = (req,res,next ) => { ///los middlewares se escriben con raya al piso
    return res.status(404).json({
        success: false,
        message:  `Route not found. Method:${req.method} Route:${req.url}  ` 
    })
}


export default not_found_handler