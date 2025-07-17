import express from 'express';
import loginHandler from './login';
import registerHandler from './register';
import logoutHandler from './logout';
import meHandler from './me';

const router = express.Router();

router.post('/login', loginHandler);
router.post('/register', registerHandler);
router.post('/logout', logoutHandler);
router.get('/me', meHandler);

export default router; 