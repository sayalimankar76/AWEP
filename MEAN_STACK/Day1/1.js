window.addEventListener('load', () => {
    console.log("ON.LOAD");


    const pbc = document.querySelector("#parentblock");
    console.log(pbc);

    for (i = 0; i < 10; i++) {
        const newele = pbc.children[0].cloneNode(true);

        newele.style.display = "flex";

        pbc.insertBefore(newele, pbc.firstChild);
    }

});
