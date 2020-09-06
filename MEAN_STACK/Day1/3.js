window.addEventListener("load", () => {
    console.log("on.load");

    let xhr = new XMLHttpRequest();

    xhr.open('GET', "https://reqres.in/api/users?page2");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

            let sjson = JSON.parse(xhr.responseText);

            console.log(sjson.data);

            domlogicHere(sjson.data);
        }
    };

    xhr.send();
});


let domlogicHere = function (list) {
    let parent = document.querySelector("#parentblock");
    console.log("INSIDE.LOAD", parent);

    for (let i = 0; i < list.length; i++) {
        let item = list[i];



        let newele = parent.children[0].cloneNode(true);
        newele.style.display = "flex";


        newele.children[0].innerHTML = item.first_name + " " + item.last_name;

        parent.insertBefore(newele, parent.firstChild);
    }

};
