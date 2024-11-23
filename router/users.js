import { Router } from 'express';
import { registerUser } from '../controllers/users/register.js';
import accountExist from '../middlewares/accountExist.js';
import createHash from '../middlewares/createHash.js';
import validator from '../middlewares/validator.js';
import schemaUsersCreated from '../schemas/register/users.js';
import { allUser } from '../controllers/users/read.js';
import validateToken from '../middlewares/validateToken.js';
import validateTokenEndpoint from '../controllers/auth/validateTokenEndpoint.js';

const router = Router();

router.post('/register', validator(schemaUsersCreated), accountExist, createHash, registerUser);
router.get('/all', allUser);

// Nueva ruta para validar el token
router.get('/validatetoken', validateToken, validateTokenEndpoint);

export default router;
