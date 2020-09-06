const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

let readDemo = () => {
    const filepath = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    fs.readFileAsync(filepath, { encodig: "utf-8" })
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
};

readDemo();