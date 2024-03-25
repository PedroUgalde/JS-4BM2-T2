
        const form = document.getElementById('form');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            let numero = document.getElementById('numero').value;
            let resultadoDiv = document.getElementById('resultado');

            if(numero % 2 === 0){
                resultadoDiv.textContent = 'El número: '+ numero + ' es par.';
            } else {
                resultadoDiv.textContent = 'El número: '+ numero + ' no es par.';
            }
        });
 