let registeeUser = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const phone_no = document.querySelector("#mobile").value;

    // http://localhost:3000/adduser?username=hello&password=1234&email=hello@gmail.com
    let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&phone_no=${phone_no}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const res = xhr.responseText;
        console.log(res);
    };
    xhr.send();

};