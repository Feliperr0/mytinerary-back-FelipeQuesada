import Itinerary from '../models/Itinerary.js';

const check_If_Itinerary_Exists = async (req, res, next) => {
    try {
        const id = req.params.id;
        const itinerary = await Itinerary.findById(id);
        if (!itinerary) {
            return res.status(404).json({ message: 'Itinerary not found' });
        }
        req.itinerary = itinerary;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default check_If_Itinerary_Exists;
