import Itinerary from "../../models/Itinerary.js";

const getAllItineraries = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(200).json(itineraries);
  } catch (error) {
    next(error);
  }
};

const getItineraryById = async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.status(200).json(itinerary);
  } catch (error) {
    next(error);
  }
};

export { getAllItineraries, getItineraryById };
