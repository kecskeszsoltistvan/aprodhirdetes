import { Router } from "express";
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload.middleware');
const fileController = require('../controllers/file.controller');

router.post('/upload', upload.single('file'), fileController.uploadFile);

module.exports = router;
