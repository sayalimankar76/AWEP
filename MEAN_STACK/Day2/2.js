let ajaxcall = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        console.log(xhr.responseText);
        let refjson = JSON.parse(xhr.responseText);

        jsonDom(refjson);
    };

    xhr.send();
};


let jsonDom = function (refjson) {

    let parent = document.querySelector("#parent");

    for (i = 0; i <= refjson.length; i++) {
        let item = refjson[i];


        let newele = parent.children[0].cloneNode(true);

        newele.innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newele, parent.firstChild);
    };

};


let xmlcall = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let xmldoc = xhr.responseXML;

        xmlDomHandler(xmldoc);


    };

    xhr.send();

};

let xmlDomHandler = (xmldoc) => {
    const authorList = xmlDoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        let authorItem = authorList[i];

        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;

        // HTML DOM
        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};


