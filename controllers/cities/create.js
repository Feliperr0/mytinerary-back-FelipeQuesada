import City from "../../models/City.js";

let createCity = async (req, res, next) => {
    try {
        let city = req.body
        let createCity = await City.create(city)
        return  res.status(201).json({
            response: createCity
        });
    } catch (error) {
        next(error)
        
    }
}

let createCities = async (req, res, next) => {
    try {
        let cities = req.body;
        let createCities = await City.insertMany(cities);
        return res.status(201).json({ response: createCities });
    } catch (error) {
        next(error)
    }
}



export {createCity, createCities}