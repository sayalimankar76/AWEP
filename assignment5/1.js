var count = 0;
var dcount = 0;

function like() {
    let likecount = document.querySelector('#b1');
    count++;
    likecount.innerHTML = "Like " + count;
}

function dislike() {
    let discount = document.querySelector('#b2');
    dcount++;
    discount.innerHTML = "Dislike " + dcount;
}

function comment() {
    let invalue = document.querySelector('#i1').value;
    let cloneValue = document.querySelector("#placecomment").cloneNode(true);
    cloneValue.innerHTML = invalue;

    let commentDiv = document.querySelector("#commentDiv");

    commentDiv.insertBefore(cloneValue, commentDiv.firstChild)

    document.querySelector('#i1').value = "";
}


