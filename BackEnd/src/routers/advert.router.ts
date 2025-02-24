import { Router } from "express";
import * as advertController from '../controllers/advert.controller';
import * as fileController from '../controllers/file.controller';
import * as authMiddleWare from '../middlewares/auth.middleware';
const upload = require('../middlewares/upload.middleware');

const router = Router();
/**
 * ADVERT modul útvonalai
 */

// add new ad;
router.post('/add', upload.single('file'), advertController.add, fileController.uploadFile);

router.post('/fetchByID', advertController.fetch);

router.get('/fetchAll', advertController.fetchAll);

router.delete('/delete/:image', authMiddleWare, advertController.deleteByIMG);

router.get('/', (req, res) => {res.send("Advert routes are connected.")});

module.exports = router;