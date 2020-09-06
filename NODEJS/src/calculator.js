class calculator {
    add(n1, n2) {
        return n1 + n2;
    }

    substract(n1, n2) {
        return n1 - n2;
    }

    static main() {
        let obj = new calculator();
        let output = obj.add(1, 2);
        console.log(output);
    }
}

calculator.main();