import { Router } from "express";
import * as advertController from '../controllers/advert.controller';
import * as fileController from '../controllers/file.controller';
const upload = require('../middlewares/upload.middleware');

const router = Router();
/**
 * ADVERT modul útvonalai
 */

// add new ad;
router.post('/add', upload.single('file'), advertController.add, fileController.uploadFile);
router.post('/fetchByID', advertController.fetch)

router.get('/', (req, res) => {res.send("Advert routes are connected.")});

module.exports = router;