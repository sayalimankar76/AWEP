counter = 1;

function like() {
    let likecounter = document.querySelector("#b1");
    counter++;
    likecounter.innerHTML = "Like " + counter;
}

function comment() {
    let userComment = document.querySelector("#i1").value;
    let newele = document.createElement("div");

    newele.style.display = "flex";
    newele.style.justifyContent = "space-between";
    newele.style.marginBottom = "8px";

    const child1 = document.createElement("div");
    child1.textContent = userComment;


    const child2 = document.createElement("#id3");
    child2.textContent = "DELETE";

    newele.appendChild(child1);
    newele.appendChild(child2);

    let commentbox = document.querySelector("#commentbox");

    commentbox.insertBefore(ele, commentbox.firstChild)

    document.querySelector("#inputId1").value = "";


}