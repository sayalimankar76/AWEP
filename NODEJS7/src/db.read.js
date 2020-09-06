const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let readUser = async () => {
    const Connection = mysql.createConnection(config.DB_CONFIG);
    await Connection.connectAsync();

    let sql = "SELECT *FROM USER";
    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();
    console.log(result)
    return result;
}

let readUserByQueryJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE username=? AND email=? ";
    let results = await connection.queryAsync(sql, [user.username, user.email]);

    await connection.endAsync();
    console.log(results);
    return results;
};

//readUser(); 

readUserByQueryJsonParam({ username: "sayali", email: "sayali@gmail.com" });




