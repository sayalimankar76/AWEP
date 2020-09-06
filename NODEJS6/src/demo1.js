const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
    try {
        console.log("i am about to read db");

        const Connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "abc"

        });

        await Connection.connectAsync();

        console.log("connected");

        await Connection.endAsync();
    } catch (err) {
        console.log(err);
    }
};

readAllUser();