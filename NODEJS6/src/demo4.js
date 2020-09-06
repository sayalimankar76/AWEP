const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "abc",

};

let addRecord = async () => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "INSERT INTO emp (NAME, ADDRESS) VALUES (?,?)";
    let operation = await connection.queryAsync(sql, ["vishal", "pune"]);

    await connection.endAsync();
    return operation;

};

addRecord();