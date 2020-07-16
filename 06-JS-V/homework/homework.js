// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` 
  //   que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
     };

    Usuario.prototype.saludar = function() {
      return "Hola, mi nombre es " + this.nombre;
      }
    
    return Usuario;
  }

  //class Usuario {
  //  constructor(opciones){
  //    this.usuario = usuario;
  //    this.nombre = nombre;
  //    this.email = email;
  //    this.password = password;
  //  }
//
 //   saludar() {
  //    return "Hola, mi nombre es " + this.nombre ;
  //  }
 // }
//} // no entiendo como retornar

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return ("Hello World!");
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  
  String.prototype.reverse = function() {
    var invertida = ""
    for (var i = this.length - 1; i >= 0; i--) {
      invertida = invertida + this[i]; // invertida += this[i]  Otro metodo para reemplazar this[i] es .charAt, del proto String  
//      invertida += this.charAt(i)
    }   
    return invertida;
  }
  
}
//function reverseString(str) {
//    // Step 1. Use the split() method to return a new array
//    var splitString = str.split(""); // var splitString = "hello".split("");
//    // ["h", "e", "l", "l", "o"]
// 
//    // Step 2. Use the reverse() method to reverse the new created array
//    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//    // ["o", "l", "l", "e", "h"]
// 
//    // Step 3. Use the join() method to join all elements of the array into a string
//    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//    // "olleh"
//    
//    //Step 4. Return the reversed string
//   return joinArray; // "olleh"
//}
//reverseString("hello");

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
