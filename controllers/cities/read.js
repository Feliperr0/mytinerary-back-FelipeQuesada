import City from "../../models/City.js";

let allCities = async (req, res) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            cities: all

        })
    } catch (error) {
        next(error)
    }
}

let citiesFilter = async (req, res, next) => {
    try {
        let { country, continent } = req.query;
        console.log('Country:', country);
        console.log('Continent:', continent);
    

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
      res.status(200).json(req.city);
    } catch (error) {
      next(error);
    }
  };
  


export { allCities, getCityById, citiesFilter }