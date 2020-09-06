let count = 0;

function like() {
    let likecount = document.querySelector("#id1");
    count++;
    likecount.innerHTML = "Like " + count;

}

function comment() {
    let usercomment = document.querySelector("#in").value;

    let cloneelement = document.querySelector("#placecomment").cloneNode(true);

    cloneelement.children[0].innerHTML = usercomment;

    let commentbox = document.querySelector("#commentbox");

    commentbox.insertBefore(cloneelement, commentbox.firstChild);

    document.querySelector("#in").value = " ";


}

function deletee(e) {
    e.parentElement.parentElement.remove();
}
