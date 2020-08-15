let counter = 1;

function increment() {
    let newEle = document.querySelector('.counter');
    counter = counter + 1;
    newEle.innerHTML = counter;

}

function decrement() {
    let newEle = document.querySelector('.counter');
    counter = counter - 1;
    newEle.innerHTML = counter;

}