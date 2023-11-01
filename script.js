let input = document.getElementById("input");
let ul = document.getElementById("ultag");

function add() {
    if (input.value === '') {
        alert("Please Type a List Name");
    } else {
        let list = document.createElement("li");
        list.innerHTML = input.value + "<button onclick='deleteitem(event)' class='del-btn'>X</button>";
        ul.appendChild(list);
        input.value = ''; 
    }
}

function deleteitem(event) {
    event.target.parentElement.remove();
}