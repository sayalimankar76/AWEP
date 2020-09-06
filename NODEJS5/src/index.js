//Asyncronous

const fs = require("fs");

let readDemo = () => {
    const filepath = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });

};

let readDemo1 = () => {
    try {
        const filepath = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
        fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
            console.log(data);
        });

    } catch (err) {
        console.log(err);
    }

};


readDemo();
readDemo1();