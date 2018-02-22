// ES5
var array = [10, 20, 30, 20, 30, 40, 60];

// declara la variable
/*var computeSumOfAllElements = 0;

// escribe tu funcion
  for (var i = 0; i < array.length; i++) {
    computeSumOfAllElements += array[i] / array.length;
  }

  console.log("El promedio de este arreglo es: ", computeSumOfAllElements);*/





//ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable
var computeSumOfAllElements = 0;


// escribe tu funcion
for (let i of array) {
  computeSumOfAllElements += i/array.length;
}

console.log("El promedio de este arreglo es: ", computeSumOfAllElements);
