// read file asyncronously - nested callback


const fs = require("fs");

let readFileDemo = () => {
    const filepath = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
        console.log("1", data);

        const filepath2 = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
        fs.readFile(filepath2, { encoding: "utf-8" }, (err, data) => {
            console.log("2", data);

            const filepath3 = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
            fs.readFile(filepath3, { encoding: "utf-8" }, (err, data) => {
                console.log("3", data);
            });
        });
    });
};

readFileDemo();