
var users = [
    {
        name: "arwa",
        id: 1,
        balance: 67000
    },
    {
        name: "ola",
        id: 2,
        balance: 200
    },
    {
        name: "jody",
        id: 3,
        balance: 13000
    }
];


function addUser() {

    var name = prompt("enter ur name:");

    var id = Number(prompt("enter ur id:"));//type number

    var balance = Number(prompt("enter ur balance:"));

    var user = users.find(function(element) {
        return element.id === id;
    });



    if (user) {
        alert("already taken!");

    } else {
        users.push({
            name: name,
            id: id,
            balance: balance
        });

        alert("added successfully🤩");
    }
}

addUser();

console.table(users)



function editUserBalance() {

    var id = Number(prompt("enter ur ID:"));
    var newBalance = Number(prompt("enter ur  new balance:"));

    var user_1 = users.find(function(element) {
        return element.id === id;
    });


    if (user_1) {
        user_1.balance = newBalance;
        alert(" New balance updated🎉");
    } else {
        alert("user not found😞");
    }
}

editUserBalance()

console.table(users)

function transferBalance() {

    var fromID = Number(prompt("enter sender id:"));
    var toID = Number(prompt("enter receiver id:"));
    var balance = Number(prompt("enter number u want to transfer:"));

    var fromUser = users.find(function(element) {
        return element.id === fromID;
    });

    var toUser = users.find(function(element) {
        return element.id === toID;
    });

    if (!fromUser) {
        alert("user not found");
        return;
    }

    else if(!toUser){

         alert("user not found");
        return;
    }


    if (fromUser.balance  <= balance) {

        alert("not enough!!");

        return;
    }

    fromUser.balance -= balance;
    toUser.balance += balance;

    alert("transfer successful☺️");
}
transferBalance()

console.table(users)

function deleteUser() {

    var id = Number(prompt("enter user id:"));

    var index = users.findIndex(function(element) {
        return element.id === id;
    });

    if (index != -1) {
        users.splice(index, 1);

        alert("user deleted");

    } else {
        alert("user not found!");
    }
}
 deleteUser()
 
console.table(users)