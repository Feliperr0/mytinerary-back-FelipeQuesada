import { Router } from "express";
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import usersRouter from './users.js'
import authRouter from './auth.js'
import passport from "../middlewares/passport.js";

const router = Router()

router.use('/cities', citiesRouter)
router.use('/itineraries', passport.authenticate('jwt', { session: false }), itinerariesRouter)
router.use('/users', usersRouter)
router.use('/auth', authRouter)
export default router