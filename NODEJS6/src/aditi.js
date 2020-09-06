const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "abc"

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");

    var q = "SELECT *FROM EMP";

    connection.query(q, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})