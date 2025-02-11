import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Advertisement } from "./entity/Advertisement"

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DBHOST,
    port: 3306,
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "13a_aprohirdetes",
    synchronize: true,
    logging: false,
    entities: [User, Advertisement],
    migrations: [],
    subscribers: [],
})
