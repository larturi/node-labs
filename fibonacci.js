function fibonacci(n) {
    // A partir de un entero, devuelve los primeros n numeros de Fibonacci

    arr = [];
    arr.push(1);
    arr.push(1);

    for (let i = 2; i < n; i++) {
        arr.push(arr[i-2] + arr[i-1])        
    }

    return arr;
}

function isFibonacci(arr) {
    // A partir de un array de enteros, devuelve en cada posicion 1 o 0 
    // si el elemento es un numero de Fibonacci

    // Armo el array de Fibonacci hasta la posicion 100
    fibo = fibonacci(arr.length);

    // Array con los resultados
    result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fibo.includes(arr[i])) {
            result.splice(i, 0, 1);
        } else {
            result.splice(i, 0, 0);
        }
        
    }
        
    return result;
}
    
// Pruebas:
arr = [1, 9, 2, 3, 5, 8, 33, 21, 54]
result = isFibonacci(arr)
console.log(result);

