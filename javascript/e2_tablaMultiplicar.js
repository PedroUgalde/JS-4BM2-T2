const form = document.getElementById('form');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            let numero = document.getElementById('numero').value;
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = ''; // Limpiamos el contenido del div antes de generar la tabla
            
            for (let i = 0; i <= 10; i++) {
                let linea = document.createElement('p'); // Creamos un elemento <p> para cada línea de la tabla
                linea.textContent = i + ' x ' + numero + ' = ' + (numero * i);
                resultadoDiv.appendChild(linea); // Agregamos la línea al div resultadoDiv
            }
        });
