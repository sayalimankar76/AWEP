const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
    const Connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "abc",
    });

    await Connection.connectAsync();

    let sql = "SELECT *FROM emp";
    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();

    console.log(result);
    return result;
};

helloDatabase();
