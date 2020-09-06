const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

let readDemo = () => {
    const filepath = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    const mpromise = fs.readFileAsync(filepath, { encoding: "utf-8" });
    console.log(mpromise);

    mpromise.then((data) => {
        console.log(data);
    });

    mpromise.catch((err) => {
        console.log(err);
    });
};

readDemo();
