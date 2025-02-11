import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
require('dotenv').config()

AppDataSource.initialize().then(async () => {
    // Code goes in, Code goes out.
    console.log("Initialized.")
    console.log(`Server listening on port: ${process.env.PORT}`)

}).catch(error => console.log(error))
