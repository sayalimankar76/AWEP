function mouseover() {
    var ele = document.querySelector('div').children[0]
    ele.innerHTML = "this is element selector"
    ele.style.background = "pink"
    ele.style.color = 'red'
}

function mouseout() {
    var ele = document.querySelector('div').children[0]
    ele.innerHTML = "Hello World"
    ele.style.background = "black"
    ele.style.color = 'white'
}