import { Router } from "express";
import * as advertController from '../controllers/advert.controller'

const router = Router();
/**
 * ADVERT modul útvonalai
 */

// add new ad
router.post('/add', userController.register);

router.get('/', (req, res) => {res.send("Advert routes are connected.")});

module.exports = router;