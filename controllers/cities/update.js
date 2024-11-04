import City from "../../models/City.js";

const updateCity = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedCity = await City.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedCity) {
            return res.status(404).json({ message: 'City not found' });
        }

        res.status(200).json(updatedCity);
    } catch (error) {
        next(error);
    }
};

export { updateCity };

