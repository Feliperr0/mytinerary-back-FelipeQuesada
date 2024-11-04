import { Router } from 'express';
import { createItinerary } from '../controllers/itineraries/create.js';
import { getAllItineraries, getItineraryById } from '../controllers/itineraries/read.js';
import { updateItinerary } from '../controllers/itineraries/update.js';
import { deleteItinerary } from '../controllers/itineraries/delete.js';
import validate_Id_Format from '../middlewares/validate_Id_Format.js';
import check_If_Itinerary_Exists from '../middlewares/check_If_Itinerary_Exists.js';

const router = Router();

router.post('/create', createItinerary);
router.get('/all', getAllItineraries);
router.get('/id/:id', validate_Id_Format, check_If_Itinerary_Exists, getItineraryById);
router.put('/update/:id', validate_Id_Format, check_If_Itinerary_Exists, updateItinerary);
router.delete('/delete/:id', validate_Id_Format, check_If_Itinerary_Exists, deleteItinerary);

export default router;
