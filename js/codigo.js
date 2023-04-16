
const USUARIO = "LUCIA";
const CONTRASENA = "PEPE";
let usuarioIngresado;
let contrasenaIngresada;
let descuentos = 'E';
let precioProducto;
let seguir;

alert('Bienvenid@ a Promo Sphere. \nNo te olvides de ingresar con tu usuario y contraseña');

do {
    usuarioIngresado = prompt("Ingrese su usuario:");
    contrasenaIngresada = prompt("Ingrese su contraseña:");
    
    if (usuarioIngresado !== USUARIO || contrasenaIngresada !== CONTRASENA) {
        console.log("Alguno de los valores ingresados es incorrecto. Volvelo a intentar.");
    } else {
        console.log("Hola " + usuarioIngresado);
    }

} while (usuarioIngresado !== USUARIO || contrasenaIngresada !== CONTRASENA);

alert('Ya podés descubrir los descuentos disponibles!!\nSeleccioná el tipo de producto:\nElectrodomesticos --> E\nIndimentaria --> I\nBazar --> B');

do {
    descuentos = prompt('Ingrese la letra que simboliza el producto:');
    switch(descuentos){
        case 'E':
            precioProducto = Number(prompt('Indique el precio de producto:'));
            precioConDescuento = precioProducto - precioProducto * 0.2;
            console.log('Su descuento es del 20%, el precio final a pagar es de : $' + precioConDescuento);
            break;
        
        case 'I':
            precioProducto = Number(prompt('Indique el precio de producto:'));
            precioConDescuento = precioProducto - precioProducto * 0.1;
            console.log('Su descuento es del 10%, el precio final a pagar es de : $' + precioConDescuento);
            break;

        case 'B':
            precioProducto = Number(prompt('Indique el precio de producto:'));
            precioConDescuento = precioProducto - precioProducto * 0.15;
            console.log('Su descuento es del 15%, el precio final a pagar es de : $' + precioConDescuento);
            break;
        default:
            console.log('Los valores indicados son incorrectos');
    }

    seguir = prompt('¿Deseas consultar por más descuentos? S/N')

} while(seguir === 'S');








