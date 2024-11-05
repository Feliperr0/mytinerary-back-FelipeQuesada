import mongoose from 'mongoose';

const validate_city_itineraries = (req, res, next) => {
    const id = req.params.id || req.params.cityId; // Maneja ambos casos
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }
    next();
};

export default validate_city_itineraries;
