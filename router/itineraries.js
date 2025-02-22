import { Router } from 'express';
import { createItinerary } from '../controllers/itineraries/create.js';
import { getAllItineraries, getItineraryById } from '../controllers/itineraries/read.js';
import { updateItinerary } from '../controllers/itineraries/update.js';
import { deleteItinerary } from '../controllers/itineraries/delete.js';
import validate_Id_Format from '../middlewares/validate_Id_Format.js';
import check_If_Itinerary_Exists from '../middlewares/check_If_Itinerary_Exists.js';
import passport from '../middlewares/passport.js';

const router = Router();

router.post('/create', passport.authenticate('jwt', { session: false }), createItinerary);
router.get('/all', passport.authenticate('jwt', { session: false }), getAllItineraries);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_Itinerary_Exists, getItineraryById);
router.put('/update/:id', passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_Itinerary_Exists, updateItinerary);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_Itinerary_Exists, deleteItinerary);

export default router;
