const mysql = require ('mysql');

const connection = mysql.createConnection({
    host:'127.0.0.1',
    database:'Stores',
    user: 'alperalt',
    password:'final123.'
});



module.exports= connection;