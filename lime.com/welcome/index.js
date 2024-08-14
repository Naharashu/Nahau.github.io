let Username = document.getElementById("Username")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")
const btn = document.getElementById("btn")
const ttt = document.getElementById("ttt")


function login() {
    btn.addEventListener("click", () => {
        if (Username.value === "") {
            Username.appendChild('ttt')
            ttt.innerText = 'Error
        } else {

        }

    })
}