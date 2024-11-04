import City from "../../models/City.js";

const deleteCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCity = await City.findByIdAndDelete(id);

    if (!deletedCity) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json({ message: 'City deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export { deleteCity };