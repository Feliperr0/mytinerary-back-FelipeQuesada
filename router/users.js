import { Router } from 'express';
import { registerUser } from '../controllers/users/register.js';
import accountExist from '../middlewares/accountExist.js';
import createHash from '../middlewares/createHash.js';
import validator from '../middlewares/validator.js';
import schemaUsersCreated from '../schemas/register/users.js';
import { allUser, userById } from '../controllers/users/read.js';
import passport from '../middlewares/passport.js';


const router = Router();

router.post('/register', validator(schemaUsersCreated), accountExist, createHash, registerUser);
router.get('/all', passport.authenticate('jwt', { session: false }), allUser);

// Nueva ruta para validar el token
router.get('/validatetoken', passport.authenticate('jwt', {session: false}) , userById);

export default router;
