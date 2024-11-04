import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (req, res, next) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.status(200).json(updatedItinerary);
  } catch (error) {
    next(error);
  }
};

export { updateItinerary };
