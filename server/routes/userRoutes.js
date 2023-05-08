import express from 'express';
const router = express.Router();
import {create, createSession, userProfile} from '../controllers/users_controller.js';


router.post('/create', create);
router.post('/create-session', createSession);
router.post('/profile', userProfile);



export default router;