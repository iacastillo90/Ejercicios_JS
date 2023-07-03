//Ejercicio 1 -- Crear una variable llamada miNombre y guardar en ella su primer nombre.//
let miNombre = "Ivan"

//Ejercicio 2 -- Crear una variable llamada miApellido y guardar en ella su apellido.//
let miApellido = "Castillo"

//Ejercicio 3 -- Crear una variable llamada miEdad y guardar en ella su edad.//
let miEdad = 33

//Ejercicio 4 -- Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.//
let miMascota = "Sky"

//Ejercicio 5 -- Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.//
let edadMascota = 5

//Ejercicio 6 -- Visualizar todas las variables dentro de la consola del navegador escribiendo el 
//nombre de cada una de ellas.
    console.log(miNombre)
    console.log(miApellido)
    console.log(miEdad)
    console.log(miMascota)
    console.log(edadMascota)

//Ejercicio 7 -- Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.//
let nombreCompleto = `${miNombre} ${miApellido}`
console.log(nombreCompleto)

//Ejercicio 8 -- Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas 
//las variables creadas hasta el momento.
let textoPresentacion = `Mi nombre es ${nombreCompleto} .Tengo una mascota llamada ${miMascota} que tiene una edad de ${edadMascota} años.`;
    console.log(textoPresentacion)

//Ejercicio 9 -- Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y
//calcular sus respectivas operaciones con las variables miEdad y edadMascota.
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let divisionEdades = miEdad / edadMascota
    console.log(sumaEdades + " suma edades")
    console.log(restaEdades + " resta edades")
    console.log(divisionEdades + " division edades")

//Ejercicio 10 -- Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
//objeto utilizando console.table( ) y también mostrar cada una de las propiedades del
//objeto por separado.

let alumno = {
    nombre: "Ivan",
    apellido: "Castillo",
    edad: 33,
    mascota: "Sky",
    edadMascota: 5
}

    console.table(alumno)

    console.log(alumno.nombre)
    console.log(alumno.apellido)
    console.log(alumno.edad)
    console.log (alumno.mascota)
    console.log (alumno.edadMascota)

//Ejercicio 11 -- Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho
//objeto utilizando console.table() y también mostrar cada una de las propiedades del
//objeto por separado.
let mascota = {
    Nombre: "Sky",
    edad: 5,
    tipo: "canino",
    color: "Blanco",
    raza: "pudel",
}

    console.table(mascota)

    console.log (mascota.Nombre)
    console.log (mascota.tipo)
    console.log (mascota.edad)
    console.log (mascota.color)
    console.log (mascota.raza)

//Ejercicio 12 -- Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el
//array completo y cada uno de los elementos por separado.
let frutas = ["naranja","manzana","fresas","pera","kiwi"]
    console.log(frutas)

    console.log(frutas[0])
    console.log(frutas[1])
    console.log(frutas[2])
    console.log(frutas[3])
    console.log(frutas[4])

//Ejercicio 13
let textoAleatorio 

//Ejercicio 14 -- Crear un array llamado numeros con un mínimo de 5 elementos y mostrar por consola
//el array completo y cada uno de los elementos por separado.
let numeros = [10000, 20000, 30000, 40000, 50000]
    console.log(numeros)

    console.log(numeros[0])
    console.log(numeros[1])
    console.log(numeros[2])
    console.log(numeros[3])
    console.log(numeros[4])

//Ejercicio 15 -- Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el
//array completo y cada uno de los elementos por separado.
let familia = ['Ivan','David','Ruben','Angelica','Miguel']
    console.log(familia)

    console.log(familia[0])
    console.log(familia[1])
    console.log(familia[2])
    console.log(familia[3])
    console.log(familia[4])

//Ejercicio 16 -- Compare su edad ingresada por pantalla con prompt( ) con el número 18 y guardarlo
//en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga:
//Soy mayor de edad y el valor de la variable.
let ingreseEdad = prompt ('Ingrese su edad')
let soyMayorDeEdad = ingreseEdad >= 18;
    console.log("Soy mayor de edad:" + soyMayorDeEdad) 

//Ejercicio 17 -- Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar
//por consola los resultados de comparar los valores y guardarlos en variables llamadas
//por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola
//como los siguientes:
//*a. Mi edad es igual a la de mi compañero: false
//b. Mi edad es mayor a la de mi compañero: true 
//c. Mi edad es menor a la de mi compañero: false
ingreseEdad 
let edadCompañero = prompt('Edad de Compañero')
let edadesIguales = ingreseEdad == edadCompañero
let soyMayor = ingreseEdad > edadCompañero
let soyMenor = ingreseEdad < edadCompañero
    console.log('Mi edad es igual a la de mi compañero:' + edadesIguales)
    console.log('Mi edad es mayor a la de mi compañero:' + soyMayor)
    console.log('Mi edad es menor a la de mi compañero:' + soyMenor)

//Ejercicio 18 -- Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
//separadas y en una variable llamada puedeSubir el resultado de la operación
//resultante de si la persona es mayor de 6 años y además tiene una altura mínima de
//120 cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
//atracción y el valor de la variable resultante.
ingreseEdad
let altura = prompt ('Ingrese altura en cm')
let puedeSubir = ingreseEdad > 6 && altura > 120
    console.log('Puede subir a la atracción:'+ puedeSubir)

//Ejercicio 19 -- Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o
//“LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable
//llamada puedePasar guardar el resultado de la operación resultante de si la persona
//tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La
//persona puede pasar y el resultado de la variable.
let pase = prompt('Ingrese tipo de pase en Mayuscula: VIP, NORMAL, LIMITADO')
let saldo = prompt('Ingrese su Saldo')
let puedePasar = pase === "VIP" || saldo > 1000
    console.log('La persona puede pasar:' + puedePasar)
