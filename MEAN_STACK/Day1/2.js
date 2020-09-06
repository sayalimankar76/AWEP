window.addEventListener('load', () => {


    const pbc = document.querySelector("#parentblock");
    // console.log("INSIDE.LOAD", pbc);

    let list = [
        { id: 1, title: "Javascript" },
        { id: 2, title: "HTML" },
        { id: 2, title: "CSS" },
        { id: 1, title: "DOM" },
        { id: 2, title: "AJAX" },
        { id: 2, title: "XML" },
        { id: 2, title: "JSON" },
    ];

    for (i = 0; i < list.length; i++) {
        let item = list[i];

        const newele = pbc.children[0].cloneNode(true);

        newele.style.display = "flex";

        newele.children[0].innerHTML = item.title;


        pbc.insertBefore(newele, pbc.firstChild);
    }

});
