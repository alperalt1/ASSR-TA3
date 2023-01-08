const connection = require('../config/databaseCon.js');

let ini = (req, res) => {
    res.send("Inicio de API en ubuntu");
};

let initStore  = (req, res) => {
    let sql= "SELECT *FROM store";
    connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(results);
    });
};


//a
let querUno = (req, res) => {
    let sql= "SELECT *FROM store ORDER BY Daily_Customer_Count desc limit 10";
    connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(results);
    });
};

//b
let querDos = (req, res) => {
    let sql= "SELECT *FROM store ORDER BY Store_Sales desc limit 20";
    connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(results);
    });
};

//c
let querTres = (req, res) => {
    let sql= "SELECT *FROM store ORDER BY Store_Area desc limit 5";
    connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(results);
    });
};

module.exports = {
    ini,
    initStore,
    querUno,
    querDos,
    querTres
}