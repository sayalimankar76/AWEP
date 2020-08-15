counter = 1;

function likeme() {
    counter++;
    let ele = document.querySelector('#like');
    ele.innerHTML = "Like " + counter;

}


function commentme() {
    let userinput = document.querySelector('#in').value;

    let ele = document.createElement('div');
    ele.textContent = userinput;

    let commentbox = document.querySelector('#commentbox');
    commentbox.insertBefore(ele, commentbox.firstchild);

    document.querySelector('#in').value = "";
}