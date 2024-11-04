import City from "../../models/City.js";
import "../../models/Itinerary.js";

const allCities = async (req, res, next) => {
    try {
        let all = await City.find().populate('itinerary', '_id photo accountName price tripDuration likes hashtags').exec();
        return res.status(200).json({ cities: all });
    } catch (error) {
        next(error);
    }
};

const citiesFilter = async (req, res, next) => {
    try {
        let { country, continent } = req.query;
        let query = {};

        if (country) {
            query.country = { $regex: '^' + country, $options: 'i' };
        }

        if (continent) {
            if (Array.isArray(continent)) {
                query.continent = { $in: continent.map(c => new RegExp(c, 'i')) };
            } else {
                query.continent = { $regex: continent, $options: 'i' };
            }
        }  

        let all = await City.find(query);
        return res.status(200).json({ cities: all });
    } catch (error) {
        next(error);
    }
};

const getCityById = async (req, res, next) => {
    try {
      const city = await City.findById(req.params.id).populate('itinerary', '_id photo accountName price tripDuration likes hashtags').exec();
      res.status(200).json(city);
    } catch (error) {
      next(error);
    }
  };
  
  export { allCities, getCityById, citiesFilter };
  
  

  

