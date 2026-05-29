const validateMiddleware = (schema: any)=>{
    return (req: any, res: any, next: any)=>{
        const {error} = schema.validate(req.body);
        
        if(error){
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        next()
    }
}

export default validateMiddleware;