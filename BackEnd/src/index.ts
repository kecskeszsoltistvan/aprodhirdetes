import { Console } from "console";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routers/index');
const multer  = require('multer');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

AppDataSource.initialize().then(async () => {
    // Code goes in, Code goes out.
    console.log("Initialized.")

}).catch(error => console.log(error))
app.listen(process.env.PORT, () => console.log(`Server listening on port: ${process.env.PORT}`))