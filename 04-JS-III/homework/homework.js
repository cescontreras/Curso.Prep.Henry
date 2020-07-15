// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
} 

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
} 

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
 return array.length;
} 

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // 
  var nuevoArr = []

  for (var i = 0; i < array.length; i++){
    // nuevoArr.push(array[i] + 1);
      nuevoArr[i] = array[i] + 1 ;
      //array[i] = array[i] + 1; no es recomendable modificar el array argumento ya que puede 
  // ser usado en otra ocasion, una buena practica es declarar un nuevo array
    }

  return nuevoArr;
} 


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

   array.push(elemento);
    return array;
} 

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
} 

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // metodo join, ver en mozziladeveloper
  return palabras.join(" ")
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++)
    if (elemento === array[i]){
      return true                 
    }
return false          // el return false va fuera del if
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;

  for (var i = 0; i < numeros.length; i++){
    
        suma = suma + numeros[i]
  }  //otra opcion suma += numeros[i]

  return suma; // asi se devuelve el valor
} 

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = agregarNumeros(resultadosTest) / resultadosTest.length;

  return promedio;
} 

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  
  var max = numeros[0]

  for (var i = 1; i < numeros.length; i++){  //empiezo con el segundo elemento
      if (numeros[i] > max)
        max = numeros[i]
    }
  return max;
} 

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo//arguments hace un array con los argumentos de la funcion
  //inicializamos en 1 porque multiplicar por cero es absorbente
  // Tu código:

  if(arguments.length < 1) return 0; 

  var total = 1;    
  for (var i = 0; i < arguments.length; i++) {
     total = total * arguments[i];
    }
  return total;
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};