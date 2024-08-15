let Username = document.getElementById("Username");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
const btn = document.getElementById("btn");

btn.onclick = function submit() {
    // Example: Check if fields are not empty
    if (Username.value === "" || Email.value === "" || Password.value === "") {
        alert("Please fill in all fields.");
    } else {
        // Example: Log the values to the console
        console.log("Username:", Username.value);
        console.log("Email:", Email.value);
        console.log("Password:", Password.value);

        // You can also send this data to a server using fetch or XMLHttpRequest
        // fetch('/your-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: Username.value,
        //         email: Email.value,
        //         password: Password.value
        //     }),
        // }).then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    }
}