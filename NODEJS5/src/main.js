//syncronous 


const fs = require("fs");

let readDemoWithException = () => {
    try {

        const filepath = "C:/Users/User/Desktop/DAC20/textt1.txt.txt";
        const filedata = fs.readFileSync(filepath, { encoding: "utf-8" });
        console.log(filedata);
    } catch (err) {
        console.log("there is some error");
    }
};

let readFileWithoutException = () => {
    const filepath = "C:/Users/User/Desktop/DAC20/textt1.txt.txt";
    const filedata = fs.readFileSync(filepath, { encoding: "utf-8" });
    console.log(filedata);

};

readDemoWithException();
//readFileWithoutException();