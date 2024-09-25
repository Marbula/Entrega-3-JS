const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Elementos del DOM
const inputId = document.getElementById("pizza-id");
const resultado = document.getElementById("resultado");
const buscarBtn = document.getElementById("buscar-pizza");

// Función para renderizar la pizza
function renderPizza(pizza) {
  resultado.innerHTML = `
    <div class="card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
    </div>
  `;
}

// Función para renderizar un mensaje de error
function renderError(mensaje) {
  resultado.innerHTML = `<p class="error">${mensaje}</p>`;
}

// Función para buscar una pizza por ID
function buscarPizza() {
  const pizzaId = parseInt(inputId.value);

  // Verificar si se ingresó un número
  if (isNaN(pizzaId)) {
    renderError("Por favor, ingresa un número válido.");
    return;
  }

  // Buscar la pizza por ID
  const pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);

  if (pizzaEncontrada) {
    renderPizza(pizzaEncontrada);
    localStorage.setItem('ultimaPizza', JSON.stringify(pizzaEncontrada)); // Guardar en localStorage
  } else {
    renderError("No se encontró ninguna pizza con ese ID.");
  }
}

// Función para cargar la última pizza guardada en localStorage
function cargarUltimaPizza() {
  const ultimaPizza = JSON.parse(localStorage.getItem('ultimaPizza'));

  if (ultimaPizza) {
    renderPizza(ultimaPizza);
  }
}

// Evento del botón
buscarBtn.addEventListener("click", buscarPizza);

// Cargar la última pizza al cargar la página
window.onload = cargarUltimaPizza;
