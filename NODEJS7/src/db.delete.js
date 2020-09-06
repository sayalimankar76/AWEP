const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let deleteUser = async () => {
    const Connection = mysql.createConnection(config.DB_CONFIG);
    await Connection.connectAsync();

    let sql = "DELETE FROM USER WHERE USERNAME = ?";
    let result = await Connection.queryAsync(sql, ["sayali"]);

    await Connection.endAsync();

};

let deleteUserByQueryJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "DELETE FROM USER WHERE USERNAME = ? ";
    let results = await connection.queryAsync(sql, [user.username]);

    await connection.endAsync();

};


//deleteUser();

deleteUserByQueryJsonParam({ username: "dipesh" });