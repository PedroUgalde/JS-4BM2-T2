const form = document.getElementById('form');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            let numero1 = document.getElementById('numero1').value;
            let resultadoDiv1 = document.getElementById('resultado1');
            let resultadoDiv2 = document.getElementById('resultado2');
            let resultadoDiv3 = document.getElementById('resultado3');
            
            resultadoDiv1.textContent = 'El tamaño del arreglo es de: ' + numero1.length;
            resultadoDiv2.textContent = 'MAYÚSCULAS: ' + numero1.toUpperCase();
            resultadoDiv3.textContent = 'minúsculas: ' + numero1.toLowerCase();
            
        });