let count = 0;

function like() {
    let likecount = document.querySelector("#id1");
    count++;
    likecount.innerHTML = "Like " + count;

}


function comment() {
    let userComment = document.querySelector("#in").value; // we are not using innerHTML wy bcz this is a form element

    //  we are not goint to use createElement
    const newElement = document
        .querySelector("#placecomment")
        .cloneNode(true);
    newElement.removeAttribute("id"); //good practice to keep unique id.
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userComment;

    // comment box elment
    const commentDiv = document.querySelector("#commentDiv");

    // now we want to add the element at the top.
    // commentBox.appendChild(newElement);
    commentDiv.insertBefore(newElement, commentDiv.firstChild);

    // clean the input box
    document.querySelector("#in").value = "";
}

function deletee(e) {
    e.parentElement.parentElement.remove();
}





