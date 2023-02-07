import express from 'express';

import { registerUser } from '../controllers/AuthController.js';

const router = express.Router();

// router.get('/', async (req, res) => {
//     res.send('Auth Route')
// })

router.post('/register', registerUser)

export default router