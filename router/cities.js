import { Router } from "express";
import City from '../models/City.js'
import allCities from "../controllers/cities/read.js";

const router = Router()

router.get('/all', allCities

)


export default router