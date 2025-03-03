let amigos = []

function agregarAmigo()  {
    let nuevoAmigo = document.querySelector(".input-name").value;
    if (nuevoAmigo === "") {
        document.querySelector(".input-name").value = "";
        alert("Por favor inserte un nombre no vacío.");
        return null;
    }
    amigos.push(nuevoAmigo);
    document.querySelector(".input-name").value = ""
    document.querySelector(".name-list").innerHTML = "";
    amigos.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element;
        document.querySelector(".name-list").appendChild(li);
    })
}


function sortearAmigo() {
    console.log("Hello");
    if (amigos.length === 0) {
        alert("Por favor inserte nombres.");
        return null;
    }
    let randomIndex = Math.floor(Math.random()*(amigos.length));
    document.querySelector(".name-list").innerHTML = amigos[randomIndex];
}