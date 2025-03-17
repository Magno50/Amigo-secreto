const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const envelope = document.querySelector('.envelope');
const buttonAdd = document.querySelector('.button-add');
const buttonDraw = document.querySelector('.button-draw');
const buttonReset = document.querySelector('.button-reset');

let amigos = [];

// Sonidos (asegúrate de tener estos archivos en la misma carpeta)
const soundAdd = new Audio('game-4.mp3'); // Sonido al añadir
const soundDraw = new Audio('collect-2.mp3'); // Sonido al sortear
const soundReset = new Audio('negative-3.mp3'); // Sonido al resetear

// Agregar amigo
buttonAdd.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    inputNombre.value = '';
    soundAdd.play(); // Reproducir sonido al añadir
});

// Sortear amigo
buttonDraw.addEventListener('click', () => {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = `¡${amigoSorteado}!`;
    resultado.style.width = '0';
    
    envelope.classList.add('open');

    // Efecto de máquina de escribir
    resultado.style.animation = 'typing 2s steps(15, end) forwards';
    soundDraw.play(); // Reproducir sonido al sortear
});

// Resetear lista
buttonReset.addEventListener('click', () => {
    amigos = [];
    listaAmigos.innerHTML = '';
    resultado.textContent = '';
    envelope.classList.remove('open');
    soundReset.play(); // Reproducir sonido al resetear
});