function callajax() {
    let xhr = new XMLHttpRequest();


    xhr.onload = () => {
        console.log(xhr.responseText);
        let refjson = JSON.parse(xhr.responseText);
        domlogic(refjson);

    };

    xhr.open("GET", "https://reqres.in/api/users?page=2");


    xhr.send();
};


let domlogic = function (refjson) {
    console.log(refjson);

    let parent = document.querySelector("#parent");

    for (let i = 0; i < refjson.data.length; i++) {
        let item = refjson.data[i];

        let newele = parent.children[0].cloneNode(true);

        newele.innerHTML = item.first_name + " " + item.last_name;

        parent.insertBefore(newele, parent.firstChild);
    }

};