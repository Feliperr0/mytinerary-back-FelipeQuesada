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




const getCityById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID format, please enter a valid number.' });
        }

        const city = await City.findById(id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json(city);
    } catch (error) {
       next (error)
    }
};

export { allCities, getCityById }