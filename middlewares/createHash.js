import bcryptjs from 'bcryptjs'


export default async (req, res, next) => {
    let password = req.body.password
    let hashPassword = bcryptjs.hashSync(
        password,
        10 //aqui varia de 1 a 100+, se recomienda el 10
    )
    req.body.password = hashPassword
    return next ()
}