const express = require('express');
const router = express.Router();

// importáljuk az egyes modulok útvonalait
/*
const userRoutes = require('./user.routes');
const subscriptionRoutes = require('./subscription.routes');
*/
// regisztráljuk az útvonalakat
/*
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes);
*/
router.get('/', (req, res) => {
    res.send(`Router pinged.`);
  });


module.exports = router;
