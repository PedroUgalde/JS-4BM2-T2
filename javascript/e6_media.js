
const form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let numero1 = document.getElementById('numero1').value;
    let resultadoDiv = document.getElementById('resultado');
    const Split = numero1.split(" ") // Corregimos el método split
    let suma = 0;
    let res =0;
    for (let i = 0; i < Split.length; i++) { // Corregimos la condición del bucle
        suma += parseInt(Split[i]);
    }
    res = suma/Split.length;
    resultadoDiv.textContent = 'El promedio de los numeros dados es: ' + res;
});