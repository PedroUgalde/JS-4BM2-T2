const form = document.getElementById('form');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            let numero1 = parseInt(document.getElementById('numero1').value);
            let numero2 = parseInt(document.getElementById('numero2').value);
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = ''; // Limpiamos el contenido del div antes de generar la tabla
            
            let resultado = 0; // Variable para almacenar el resultado de la multiplicación
            
            for (let i = 0; i < numero2; i++) {
                let span = document.createElement('span'); // Creamos un elemento <span> para cada término de la suma
                span.textContent = numero1;
                resultadoDiv.appendChild(span); // Agregamos el término al div resultadoDiv
                
                if (i < numero2 - 1) {
                    let mas = document.createElement('span'); // Creamos un elemento <span> para el signo de suma
                    mas.textContent = ' + ';
                    resultadoDiv.appendChild(mas); // Agregamos el signo de suma al div resultadoDiv
                }
                
                resultado += numero1; // Incrementamos el resultado en cada iteración
            }
            
            let resultadoTexto = document.createTextNode(' = ' + resultado); // Creamos un nodo de texto con el resultado
            resultadoDiv.appendChild(resultadoTexto); // Agregamos el nodo de texto al div resultadoDiv
        });