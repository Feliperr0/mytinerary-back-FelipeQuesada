import express from 'express';
import { allCities, getCityById, citiesFilter, getCityItineraries } from '../controllers/cities/read.js';
import { createCities, createCity } from '../controllers/cities/create.js';
import { updateCity } from '../controllers/cities/update.js';
import { deleteCity } from '../controllers/cities/delete.js';
import validate_Id_Format from '../middlewares/validate_Id_Format.js';
import check_If_City_Exists from '../middlewares/check_If_City_Exists.js';
import check_city from '../middlewares/check_city.js';
import validate_city_itineraries from '../middlewares/validate_city_itineraries.js';
import passport from '../middlewares/passport.js';
const router = express.Router();

router.get('/all', allCities);
router.get('/id/:id',passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_City_Exists, getCityById);
router.get('/find', passport.authenticate('jwt', { session: false }), citiesFilter); //usaqueryparams de frontend
router.post('/create/city', passport.authenticate('jwt', { session: false }), createCity);
router.post('/create/cities', passport.authenticate('jwt', { session: false }), createCities);
router.put('/update/:id', passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_City_Exists, updateCity);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), validate_Id_Format, check_If_City_Exists, deleteCity);
router.get('/:cityId/itineraries', passport.authenticate('jwt', { session: false }), validate_city_itineraries, check_city, getCityItineraries);

export default router;
