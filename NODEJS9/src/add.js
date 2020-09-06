const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let addRecord = async (input) => {
    const connection = mysql.createConnection(config.DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, PHONE_NO) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.phone_no,
    ]);

    await connection.endAsync();

    return;
};

module.exports = { addRecord };