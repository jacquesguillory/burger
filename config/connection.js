// Setting up mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "new",
    database: "burgerBoyz_DB"
});

connection.connect(function(err) {
    if (err){
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;