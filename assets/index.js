//Datos del cliente simulados
const clientes = [
    { nombre: "Juan", id: "juan123", clave: "1234", saldo: 1000 },
    { nombre: "Maria", id: "maria123", clave: "5678", saldo: 2000 },
    { nombre: "Pedro", id: "pedro123", clave: "4321", saldo: 1500 }
];

// Función para solicitar login y validar credenciales
function login() {
    const id = prompt("Ingrese su identificador:");
    const clave = prompt("Ingrese su clave:");

    const cliente = clientes.find(c => c.id === id && c.clave === clave);
    
    if (cliente) {
        alert("Bienvenido " + cliente.nombre);
        menu(cliente);
    } else {
        alert("Identificador o clave incorrectos.");
    }
}

// Función para mostrar el menú y realizar las operaciones
function menu(cliente) {
    let opcion;

    do {
        opcion = prompt(
            "¿Qué desea hacer?\n" +
            "1. Ver saldo\n" +
            "2. Realizar giro\n" +
            "3. Realizar depósito\n" +
            "4. Salir"
        );

        switch (opcion) {
            case "1":
                alert("Su saldo actual es: $" + cliente.saldo);
                break;
            case "2":
                realizarGiro(cliente);
                break;
            case "3":
                realizarDeposito(cliente);
                break;
            case "4":
                alert("Gracias por usar el cajero automático. ¡Adiós!");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "4");
}

// Función para realizar giros
function realizarGiro(cliente) {
    const monto = parseFloat(prompt("Ingrese el monto a girar:"));
    
    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido. Intente de nuevo.");
    } else if (monto > cliente.saldo) {
        alert("No puede girar más de lo que tiene. Su saldo es: $" + cliente.saldo);
    } else {
        cliente.saldo -= monto;
        alert("Giro realizado. Su nuevo saldo es: $" + cliente.saldo);
    }
}

// Función para realizar depósitos
function realizarDeposito(cliente) {
    const monto = parseFloat(prompt("Ingrese el monto a depositar:"));
    
    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido. Intente de nuevo.");
    } else {
        cliente.saldo += monto;
        alert("Depósito realizado. Su nuevo saldo es: $" + cliente.saldo);
    }
}

// Iniciar el cajero automático
login();