const fs = require("fs")
const promise = require("bluebird");

promise.promisifyAll(fs);

let readDemo = async () => {
    const filepath1 = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    const data1 = await fs.readFileAsync(filepath1, { encoding: "utf-8" });
    console.log(data1);

    const filepath2 = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    const data2 = await fs.readFileAsync(filepath2, { encoding: "utf-8" });
    console.log(data2);

    const filepath3 = "C:/Users/User/Desktop/DAC20/text1.txt.txt";
    const data3 = await fs.readFileAsync(filepath3, { encoding: "utf-8" });
    console.log(data3);

};

readDemo();