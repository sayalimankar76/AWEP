var count = 0;

function likee() {
    let likecount = document.querySelector('#b1');
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



