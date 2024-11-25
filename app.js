const productos = [
    {   
        id: 1, 
        nombre: "Alimento para Perros",
        precio: 700 
    },
    {
        id: 2,
        nombre: "Juguetes para Gatos",
        precio: 500,
    },
    {
        id: 3,
        nombre: "Cama para mascotas",
        precio: 1000,
    },
]

const listaDeProductos = document.getElementById("lista-productos");

productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    productoDiv.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: ${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    `;
    listaDeProductos.appendChild(productoDiv);
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorDeCarrito();
}

function actualizarContadorDeCarrito () {
    document.getElementById("contador-carrito").textContent = carrito.length;
}

actualizarContadorDeCarrito();