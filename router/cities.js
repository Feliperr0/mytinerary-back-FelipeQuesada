import { Router } from 'express';
import { allCities, getCityById, citiesFilter } from '../controllers/cities/read.js';
import { createCities, createCity } from '../controllers/cities/create.js';
import validate_Id_Format from '../middlewares/validate_Id_Format.js';
import check_If_City_Exists from '../middlewares/check_If_City_Exists.js';

const router = Router();

router.get('/all', allCities);
router.get('/id/:id', validate_Id_Format, check_If_City_Exists, getCityById); // colocar estos middlewares aquí es buena práctica? No encontré manera de hacerlo funcionar desde server :(
router.get('/find', citiesFilter);
router.post('/create/city', createCity);
router.post('/create/cities', createCities);

export default router;
