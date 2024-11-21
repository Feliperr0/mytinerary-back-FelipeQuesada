import User from "../../models/User.js";

let allUser = async (req, res, next) => {
    try {
        let all = await User.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let userById = async (req, res, next) => {
    try {
        let idQuery = req.query.id;
        let all = await User.findById(idQuery);
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}
let usersByManyIds = async (req, res, next) => {
    try {
        let idsQuery = req.query.ids;
        let idsArray = idsQuery.split(','); // Convierte la cadena de IDs en un array
        let allUsers = await User.find({
            '_id': { $in: idsArray }
        });
        
        return res.status(200).json({
            response: allUsers
        });
    } catch (error) {
        next(error)
    }
}



export { allUser, userById, usersByManyIds };



