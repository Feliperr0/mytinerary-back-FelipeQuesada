import { Router } from "express";
import {allCities, getCityById, citiesFilter} from "../controllers/cities/read.js";
import { createCities, createCity } from "../controllers/cities/create.js";

const router = Router()

router.get('/all', allCities)

router.get('/id/:id', getCityById);

router.get('/find', citiesFilter)

router.post('/create/city', createCity)

router.post('/create/cities', createCities)


export default router