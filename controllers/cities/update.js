import City from "../../models/City.js";

const updateCity = async (req, res, next) => {
  try {
    const updatedData = req.body;
    const updatedCity = await City.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    res.status(200).json(updatedCity);
  } catch (error) {
    next(error);
  }
};

export { updateCity };