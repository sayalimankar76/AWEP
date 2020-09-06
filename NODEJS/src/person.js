class person {
    constructor() {
        console.log("i am constructor");
    }

    getPersonAddress() {
        return "mumbai";
    }

    getpersonName() {
        return "sayali";
    }

    getPersonDetails() {
        const name = getpersonName();
        const address = getPersonAddress();
        return name + " " + address;

    }

    static Main() {
        let p = new person();
        const detail = p.getPersonDetails();
        console.log(detail);
    }
}

person.Main();