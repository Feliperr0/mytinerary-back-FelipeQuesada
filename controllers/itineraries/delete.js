import Itinerary from "../../models/Itinerary.js";

const deleteItinerary = async (req, res, next) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.status(200).json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export { deleteItinerary };
