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

let helloDatabase = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();

    let sql = "SELECT *FROM EMP";
    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();
    console.log(result);
    return result;

};

let helloDatabase1 = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();

    let sql = "SELECT *FROM EMP where name='sayali'";
    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();
    console.log(result);
    return result;

};

let helloDatabase2 = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();

    let sql = "SELECT *FROM EMP where name=?";
    let result = await Connection.queryAsync(sql, ['sayali']);

    await Connection.endAsync();
    console.log(result);
    return result;

};


//helloDatabase();
//helloDatabase1();
helloDatabase2();