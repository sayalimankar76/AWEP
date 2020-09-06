const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

let addRecord = async () => {
    const Connection = mysql.createConnection(config.DB_CONFIG);
    await Connection.connectAsync();
    //  console.log("connected")

    let sql = "INSERT INTO user (username, password, email, phone_no) VALUES (?,?,?,?)";
    await Connection.queryAsync(sql, ["rupali", "rup", "rupali@gmail.com", "123456"]);

    await Connection.endAsync();
};


let addRecordWithParam = async (username, password, email, phone_no) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (username, password, email, phone_no) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [username, password, email, phone_no]);

    await connection.endAsync();
};


/*
*preferred
*@param {*} user
*/

let addRecordWithJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);
    await connection.connectAsync();

    let sql = "INSERT INTO USER(username, password, email, phone_no) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        user.username,
        user.password,
        user.email,
        user.phone_no,
    ]);

    await connection.endAsync();
};




//addRecord();

addRecordWithJsonParam({
    username: "sayali",
    phone_no: "1234",
});

/*addRecordWithParam({
    username: "sayali",
    password: "say",
    email: "sa@gmail.com",
    phone_no: "123",

});*/