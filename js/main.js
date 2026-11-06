// --- ALGORITMOS DE ESTRUCTURAS SECUENCIALES ---

function opBasicas() {
    let a = 0, b = 0, suma = 0, resta = 0, multiplicacion = 0, division = 0;
    
    alert("Este algoritmo realiza una suma, resta, multiplicación y división entre dos valores ingresados");
    
    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));
    
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;
    
    alert("El resultado de la suma es: " + suma);
    alert("El resultado de la resta es: " + resta);
    alert("El resultado de la multiplicación es: " + multiplicacion);
    alert("El resultado de la división es: " + division);
}

function areaTriangulo() {
    let base = 0, altura = 0, area = 0;
    
    alert("Este algoritmo calcula el área de un triángulo a partir de su base y su altura");
    
    base = parseInt(prompt("Por favor ingrese el valor de base"));
    altura = parseInt(prompt("Por favor ingrese el valor de altura"));
    
    area = (base * altura) / 2;
    
    alert("El área del triángulo es: " + area);
}

function conversionUnidades() {
    let m = 0, p = 0, cm = 0, km = 0;
    
    alert("Este algoritmo convierte en centímetros, pulgadas y kilómetros un valor dado en metros");
    
    m = parseInt(prompt("Ingrese el valor en metros a convertir"));
    
    p = m * 39.37;
    cm = m * 100;
    km = m / 1000;
    
    alert(m + " metros en pulgadas son: " + p);
    alert(m + " metros en centímetros son: " + cm);
    alert(m + " metros en kilómetros son: " + km);
}

// --- ALGORITMOS CONDICIONALES ---

function servicioMilitar() {
    let edad = 0, genero = "", hijoUnico = "";
    
    alert("Algoritmo que determina si eres apto para el servicio militar obligatorio");
    
    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su género: F para femenino o M para masculino");
    hijoUnico = prompt("Por favor ingrese SI o NO de ser hijo único");
    
    if (edad >= 18 && edad <= 26) {
        if (genero === "masculino" || genero === "M" || genero === "m") {
            if (hijoUnico === "no" || hijoUnico === "NO") {
                alert("Eres apto para prestar el servicio militar");
            } else {
                alert("No eres apto para prestar el servicio militar");
            }
        } else {
            alert("No eres apta para prestar el servicio militar");
        }
    } else {
        alert("No eres apto por su edad");
    }
}

function mayor2n() {
    let n1 = 0, n2 = 0;
    
    alert("Valida el mayor de dos números");
    
    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));
    
    if (n1 === n2) {
        alert("No hay ningún número mayor, ambos son iguales");
    } else if (n1 > n2) {
        alert(n1 + " es mayor que " + n2);
    } else {
        alert(n2 + " es mayor que " + n1);
    }
}

function parOImpar() {
    let x = 0;
    
    alert("Determina si un número es par o impar");
    
    x = parseInt(prompt("Ingrese el número a verificar"));
    
    if (x % 2 === 0) {
        alert(x + " es un número par");
    } else {
        alert(x + " es un número impar");
    }
}

// --- ESTRUCTURAS DE CICLOS ---

function rangoNumeros() {
    alert("Imprimir en consola los números existentes entre un valor inicial y un valor final");
    
    let inicio = parseInt(prompt("Ingrese el valor del punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor del punto final"));
    let contador = inicio;
    
    while (contador <= fin) {
        console.log(contador);
        contador++;
    }
    
    alert("En consola mostraremos los números que hay entre " + inicio + " y " + fin);
}

function sumaRango() {
    alert("Suma los valores entre un rango ingresado");
    
    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto final"));
    let suma = 0;
    let contador = inicio;
    
    while (contador <= fin) {
        suma += contador;
        contador++;
    }
    
    alert("La suma de los números del " + inicio + " al " + fin + " es: " + suma);
}

function numeroPrimo() {
    alert("Este algoritmo determina si un número es primo");
    
    let numero = parseInt(prompt("Ingrese el número"));
    
    if (numero === 0 || numero === 1) {
        alert(numero + " no es un número primo");
        return;
    }
    
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            alert(numero + " no es un número primo");
            return;
        }
    }
    alert(numero + " sí es un número primo");
}

// --- COMPLEJIDAD MEDIA ---

function conversionMoneda() {
    let tasaCambio = { usd: 0.00028, eur: 0.00024 };
    
    alert("Realiza la conversión de dinero en pesos a dólares y euros");
    
    let cantidadPesos = parseInt(prompt("Ingrese la cantidad a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: usd escriba 1, euro escriba 2"));
    let conversion = 0;
    
    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.usd;
            alert(cantidadPesos + " pesos colombianos son " + conversion + " dólares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.eur;
            alert(cantidadPesos + " pesos colombianos son " + conversion + " euros");
            break;
        default:
            alert("Tasa de cambio no permitida");
            break;
    }
}

function calcularPromedio() {
    alert("Algoritmo promedio de calificaciones ingresadas");
    
    let calificaciones = [];
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones o notas"));
    
    for (let i = 1; i <= cantidadNotas; i++) {
        calificaciones.push(parseFloat(prompt("Ingresa la calificación número " + i + ":")));
    }
    
    let sumaCalificaciones = 0;
    
    for (let calificacion of calificaciones) {
        sumaCalificaciones += calificacion;
    }
    
    let promedio = sumaCalificaciones / calificaciones.length;
    alert("El promedio es " + promedio);
}

function consultarPeli() {
    alert("Este algoritmo muestra la información de una película elegida");
    
    let peliculas = [
        { titulo: "El Padrino", director: "nombre director", año: 1972, genero: "drama" },
        { titulo: "Interstellar", director: "nombre director", año: 2014, genero: "ficción" },
        { titulo: "Harry Potter", director: "nombre director", año: 2008, genero: "ficción" }
    ];
    
    let nombrePelicula = prompt("Por favor ingresa el nombre de la película");
    let infoPelicula = "";
    
    for (let pelicula of peliculas) {
        if (pelicula.titulo === nombrePelicula) {
            infoPelicula = "Título: " + pelicula.titulo + "\nDirector: " + pelicula.director + "\nAño: " + pelicula.año + "\nGénero: " + pelicula.genero;
            break;
        }
    }
    
    if (infoPelicula !== "") {
        alert("La película consultada tiene la siguiente información:\n" + infoPelicula);
    } else {
        alert("La película no se encuentra en el sistema");
    }
}