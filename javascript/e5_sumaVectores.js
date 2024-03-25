
const form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let resultadoDiv = document.getElementById('resultado');
    const Split1 = numero1.split(" ") // Corregimos el método split
    const Split2 = numero2.split(" ") // Corregimos el método split
    let c = [];
    if (Split1.length == Split2.length) {
        for (let i = 0; i < Split1.length; i++) { // Corregimos la condición del bucle
            c.push(parseInt(Split1[i])+parseInt(Split2[i]));
        }
        resultadoDiv.textContent = 'el vector resultante es: ' + c;
    }else{
        resultadoDiv.textContent = 'los vectores tienen que ser del mismo tamano ' ;
    }
   
});