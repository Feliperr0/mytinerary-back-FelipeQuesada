import { Router } from "express";
import {allCities, getCityById} from "../controllers/cities/read.js";

const router = Router()

router.get('/all', allCities)

router.get('/id/:id', getCityById);


export default router