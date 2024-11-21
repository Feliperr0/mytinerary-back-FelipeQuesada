import { Router } from 'express';
import { registerUser } from '../controllers/users/register.js';
import accountExist from '../middlewares/accountExist.js';
import createHash from '../middlewares/createHash.js';
import validator from '../middlewares/validator.js';
import schemaUsersCreated from '../schemas/register/users.js'
import { allUser } from '../controllers/users/read.js';



const router = Router();

router.post('/register', validator(schemaUsersCreated), accountExist, createHash,  registerUser);
router.get('/all', allUser);


export default router;
