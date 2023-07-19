//Se crea la clase product
class Product {
  constructor(id, nombre, marca, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.categoria = categoria;
    this.precio = precio;
  }
}
//se crea la clase user
class User {
  constructor(nombreUsuario, nombre, apellido, email) {
    this.nombreUsuario = nombreUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}
//se instancian los productos hardcodeados
const pelota = new Product(1, "Pelota", "Adidas", "Futbol", 10000);
const camiseta = new Product(2, "Jersey", "Nike", "Basket", 12000);
const zapatilla = new Product(3, "Zapatillas", "Adidas", "Running", 15000);
const campera = new Product(4, "Camperon", "Montagne", "Sky", 20000);
const pantalon = new Product(5, "Short", "Ripcurl", "Surf", 10000);

//se crea un Array llamado products, cart y otro llamado users
//en products se pasan los productos hardcodeados a  mano.
let products = [pelota, camiseta, zapatilla, campera, pantalon],
  //en cart se almacena cada objeto (de los predefinidos) que es puesto en el carrito de compras.
  cart = [];

//funcion para crear un usuario
function createUser() {
  const nombreUsuario = prompt("Ingresa tu nombre de usuario");
  const nombre = prompt("Ingresa tu nombre");
  const apellido = prompt("Ingresa tu apellido");
  const email = prompt("Ingresa tu email");

  let usuario = new User(nombreUsuario, nombre, apellido, email);
  console.log(`creaste el usuario   ${usuario.nombreUsuario}`);
  console.log(usuario);
  return usuario;
}
//funcion para mostrar productos
function showProducts() {
  products.map((product) =>
    console.log(
      `Id: ${product.id}. Articulo: ${product.nombre}. Marca: ${product.marca}. Categoria: ${product.categoria}. Precio: ${product.precio} `
    )
  );
}
//funcion para agregar producto al carrito
function addToCart() {
  let productId = parseInt(
    prompt("Ingresa por su id el producto que queres agregar al carrito")
  );

  let selectedProduct = products.find((product) => product.id === productId);
  if (selectedProduct === undefined) {
    console.log(`no existe el producto con id ${productId}`);
  } else {
    cart.push(selectedProduct);
  }
}

function showCart() {
  console.log("PRODUCTOS EN TU CARRITO");
  cart.map((product) =>
    console.log(
      `Id: ${product.id}. Articulo: ${product.nombre}. Marca: ${product.marca}. Categoria: ${product.categoria}. Precio: ${product.precio} `
    )
  );
}

function showReceipt(usuario) {
  console.log("FACTURA DE COMPRA:");

  console.log(`Cliente: ${usuario.nombre} ${usuario.apellido}`);

  cart.map((product) =>
    console.log(`${product.nombre} ${product.marca} Precio: ${product.precio}`)
  );

  const total = cart.reduce((acc, product) => (acc += product.precio), 0);

  console.log(`Total a pagar: $` + total);
}

function shop() {
  let decision;
  const usuario = createUser();
  showProducts();

  do {
    addToCart();
    showCart();
    decision = prompt(
      "desea agregar mas productos al carrito de compras? (si o no para finalizar compra)"
    );
  } while (decision === "si");

  showReceipt(usuario);
}

shop();
