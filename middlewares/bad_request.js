const bad_request = (error,req,res,next) => {
  
    if(error.status === 400){ 
      return res.status(400).json({
        success:false,
        response: error.message,
        message: "ERROR: Incomplete or invalid parameters."
      })
    }  
next(error)    
}





export default bad_request 