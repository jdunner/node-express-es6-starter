import express from 'express';

import UserService from '../services/user-service';

const router = express.Router();

/* GET users index page. */
router.get('/', (req, res) => {
    res.json({
        title: 'USERS - Index'
    });
});

/* GET all users page. */
router.get('/all', (req, res) => {
    res.json({
        title: 'USERS - List all - TESTING'
    });
});

export default router;
