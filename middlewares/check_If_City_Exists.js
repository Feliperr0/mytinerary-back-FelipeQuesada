import City from '../models/City.js';

const check_If_City_Exists = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const city = await City.findById(id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        req.city = city; 
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default check_If_City_Exists;