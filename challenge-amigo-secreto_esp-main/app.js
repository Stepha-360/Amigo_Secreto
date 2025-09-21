let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    // Limpiar campo
    input.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados anteriores

    // Validacion que hayan nombres en la lista 
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // indice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Mostrar resultado
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
