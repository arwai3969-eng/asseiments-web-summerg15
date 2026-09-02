let users = [
    {name : "Arwa" , email : "Arwa@gmail.com"},
    {name : "Ahmed" , email : "Ahmed@gmail.com"},
    {name : "Mohamed" , email : "Mohamed@gmail.com"},
    {name : "ola" , email : "Ola@gmail.com"},
]

localStorage.setItem('users' , JSON.stringify(users))

function displayusers() {

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var container = document.getElementById("users");

    container.innerHTML = "";

    users.forEach(function(user) {

        var div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Age: ${user.email}</p>
            <hr>
        `;

        container.appendChild(div);
    });
}
displayusers();


