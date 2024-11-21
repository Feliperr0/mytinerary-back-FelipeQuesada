import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
const router = Router();

router.post('/signin', accountNotExist, isValidPassword, generateToken, signIn);
router.post('/signout', passport.authenticate('jwt', { session: false }), signOut);

// Ruta para iniciar sesión con Google
router.get('/signin/google', passportGoogle.authenticate('google', { scope: ['profile', 'email'], session: false }))
router.get('/signin/google/callback', passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }), generateToken, signIn)


export default router;
