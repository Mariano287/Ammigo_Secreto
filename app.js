// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Codigo el Amigo Secreto con JavaScript

// Array para almacenar los nombres de los amigos
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    // Validación del nombre: solo letras y espacios
    let nombreValido = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    if (!nombreValido.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("El nombre ya está en la lista");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    // Agregar el nombre al array y limpiar el campo de entrada
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();

    // Renderizar la lista actualizada
    renderizarAmigos();
}

// Función para mostrar la lista de amigos en el DOM
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Crear los elementos de la lista
    for (let i = 0; i < amigos.length; ++i) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Seleccionar un amigo aleatoriamente
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 El amigo sorteado es: " + amigoSorteado;

    // Limpiar la lista de amigos después del sorteo
    amigos = [];
    renderizarAmigos();
}