import { Router } from "express";
import {allCities, getCityById, citiesFilter} from "../controllers/cities/read.js";

const router = Router()

router.get('/all', allCities)

router.get('/id/:id', getCityById);

router.get('/find', citiesFilter)


export default router