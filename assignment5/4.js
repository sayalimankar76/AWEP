let counter = 1;
let comcounter = 1;


function like() {
    counter++;
    document.querySelector('#id2').innerHTML = 'Like ' + counter;
}

function comment() {
    let ele = document.createElement('div');
    ele.textContent = "comment " + comcounter;

    let commentbox = document.querySelector("#commentbox");
    commentbox.appendChild(ele);

    ele.style.background = "pink";
    ele.style.margin = "4px";

    comcounter++;
}