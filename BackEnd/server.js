const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/config');
const db = require('./config/database');
const routes = require('./routers/index');
const errorMiddleware = require('./middlewares/error.middleware');
var mysql = require('mysql2'); // Egyenlőre lehet hog nem is fog kelleni, de majd kiderül

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(errorMiddleware);

// ORM adatbázis szinkronizáció
/*
db.sync({alter: config.db.alter, force: config.db.force})
    .then(()=>{
        console.log(`Database synced successfully.`);
    })
    .catch((err)=>{
        console.log(`Database sync error: ` + err);
    });

// szerver indítása    
app.listen(config.port, ()=>{
    console.log(`Server running on http://${config.db.host}:${config.port}`);
});

function generatePassword(){
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!#&$';
    let password = '';
    for(let i = 0; i < 12; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

app.post('/create-database', (req, res) => {
    const { dbname } = req.body;
    if(!dbname){
        return res.status(400).json({message: 'Database name is required!'})
    }

    const sql = `CREATE DATABASE \`${dbname}\``
    db.query(sql, (err, results) =>{
        if (err) {
            res.status(500).json({message: err});
        }
        res.status(200).json({message: 'Database created succesfully!', data: results})
    });
});

app.post('/create-user', (req, res) => {
    const { username } = req.body;
    if(!username){
        return res.status(400).json({message: 'Username name is required!'})
    }
    const password = generatePassword();
    const sql = `CREATE USER '${username}'@'localhost' IDENTIFIED BY '${password}'`;
    db.query(sql, (err, results) =>{
        if (err) {
            res.status(500).json({message: err});
        }
        res.status(200).json({message: 'User created succesfully!', data: results, password})
    });
});

app.post('/grant-privileges', (req, res) => {
    const {username, dbname, privileges} = req.body;
    if (!username | !dbname | !privileges) {
        return res.status(400).json({message: 'Missing data!'});
    }
    const sql = `USE ${dbname}; GRANT ${privileges} ON \`${dbname}\`.* TO '${username}'@'localhost'`
    db.query(sql, (err, results) =>{
        if (err) {
            res.status(500).json({message: err});
        }
        res.status(200).json({message: `Granted ${privileges} to ${username} on ${dbname}!`, data: results})
    });
});

*/