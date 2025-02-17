// TODO: Importálás
import { Router } from "express";
import * as userController from "../controllers/user.controller";

const router = Router();
/**
 * USER modul útvonalai
 */

// register new user
router.post('/register', userController.register);

// login user
router.post('/login', userController.login);

router.get('/', (req, res) => {res.send("User routes are connected.")});
module.exports = router;