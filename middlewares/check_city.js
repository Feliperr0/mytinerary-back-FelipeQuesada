import City from '../models/City.js';

const check_city = async (req, res, next) => {
  try {
    const city = await City.findById(req.params.cityId).populate('itinerary', '_id photo accountName price tripDuration likes hashtags').exec();
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    req.city = city;
    next();
  } catch (error) {
    next(error);
  }
};

export default check_city;
