const IVA = 0.22;

class Persona {
    constructor(nombre, apellido, direccion, documento, contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.documento = documento;
        this.contrasenia = contrasenia;
    }
    descripcion(){
        alert("Nombre: " + this.nombre + " Apellido: " + this.apellido + " Direccion: " + this.direccion);
    }
}
let usuarioEnLinea;
const clientes = [];
clientes[0] = new Persona("Gabriel", "Guigou", "Piedra Alta 614", 40215548, "desafio");


function ingresar(){
    alert("SE ABRIO INGRESO DE USUARIO");
    let usuario = parseInt(prompt("Hola, ingrese nro documento:"));
    if (usuarioIngresado = clientes.find(clienteEsta=> clienteEsta.documento==usuario)){
        let contraseniaIngresada = prompt("Ingrese contraseña");
        if(usuarioIngresado.contrasenia==contraseniaIngresada){
            return usuarioIngresado;
            alert("Bienvenido " + usuarioIngresado.nombre + " " + usuarioIngresado.apellido);
        }
        else alert("Contraseña no es valida");
    }
    else alert("Usuario no existe");
}
function registrarUsuario(){
    alert("SE ABRIO EL REGISTRO DE USUARIO");
    let nombre = prompt("Ingrese nombre:");
    let apellido = prompt("Ingrese apellido:");
    let direccion = prompt("Ingrese su direccion:");
    let documento = parseInt(prompt("Ingrese su nro de docuento. (Solo numeros)"));
    let contrasenia = prompt("ingrese contraseña:");
        let contraseniaVerificacion = prompt("Ingrese contraseña de verificacion");
        let iguales = contrasenia == contraseniaVerificacion;
    while (!iguales){
        alert("CONTRASEÑAS DISTINTAS");
        contrasenia = prompt("ingrese nuevamente la contraseña:");
        contraseniaVerificacion = prompt("Ingrese contraseña de verificacion");
        iguales = contrasenia == contraseniaVerificacion;
    }
    clientes.push(new Persona(nombre, apellido, direccion, documento, contrasenia));
    alert("USUARIO REGISTRADO CON EXITO");
}


class Producto {
    constructor(codigo, descripcion, valor, talle){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.valor=valor;
        this.talle=talle;
    }
    valorSinIva = () => (this.valor/(1+IVA));
    ivaDelValorFinal = function() { return (this.valor - (this.valor/(1+IVA)))}
    describir() {
        alert(this.descripcion + " " + this.talle + " " + this.valor);
    }
}

const stock = [new Producto(1, "Jumper", 1000, "XS" ),
                new Producto(2, "Pollera", 700, "XS" ),
                new Producto(3, "Remera", 950, "XS" )];
stock.push(new Producto(4,"Short", 550, "L"));
const carrito =[];



function vender(){
    let productoCliente = prompt("Ingrese el codigo del producto:(1-4), ESC para salir");
    while(productoCliente.toUpperCase()!="ESC"){
        
        if(encontrado = stock.find(productoStock=> productoStock.codigo == parseInt(productoCliente))){
            encontrado.describir();
            alert("Valor del IVA: "+ encontrado.ivaDelValorFinal()+ " valor sin IVA: "+ encontrado.valorSinIva());
            carrito.push(encontrado);
        }
        else
            alert("Producto no encontrado");
        productoCliente = prompt("Ingrese el codigo del producto:(1-4), ESC para salir");
    }
}

function describirCarrito(){
    // const carritoString = carrito.map(productos=> productos.descripcion);
    // let valorTotalCarrito = 0;
    // for (const product of carrito){
    //     valorTotalCarrito += product.valor;        
    // }
    // alert("Productos en el carrito: "+ carritoString.toString() + ", por un total de: " + valorTotalCarrito);
    let tabla = document.createElement("table");
    let tablaBody = document.createElement("tbody")
    for (const productosEnCarrito of carrito){
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${productosEnCarrito.descripcion}</td>
                            <td>${productosEnCarrito.talle}</td>
                            <td>$ ${productosEnCarrito.valor}</td>`;
    tablaBody.appendChild(fila);
    }
    tabla.appendChild(tablaBody);
    let articuloTabla = document.getElementById("tablaCarrito");
    let tituloTabla = document.createElement("h2");
    tituloTabla.innerHTML = "<h2> SU CARRITO ES</h2>";
    articuloTabla.appendChild(tituloTabla);
    articuloTabla.appendChild(tabla);
}

let boton = prompt("Ingrese una accion: I=Ingresar, R=registrar, V=vender,ESC= salir");
while (boton.toUpperCase()!="ESC"){
    switch (boton.toUpperCase()){
        case "I":
            usuarioEnLinea=ingresar();

            // Si el usuario existe, desplega un parrafo de bienvenida-

            if (usuarioEnLinea!=undefined){
                let divUsuario = document.getElementById("saludo");//saludo
                parrafoSaludo = document.createElement("p");
                parrafoSaludo.innerHTML ="<p>" +"Bienvenido a nuestra tienda " + usuarioEnLinea.nombre + " "+ usuarioEnLinea.apellido + "</p>";
                divUsuario.appendChild(parrafoSaludo);
            }        
            break;
        case "R":
            registrarUsuario();
            break;
        case "V":
            vender();
            describirCarrito();
            break;
        default:
            alert("Accion no valida");
    }
    boton = prompt("Ingrese una accion: I= Ingresar, R= Registrar, V= Vender, ESC= Salir");
}

