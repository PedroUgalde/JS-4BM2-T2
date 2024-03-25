
        const form = document.getElementById('form');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            let numero1 = document.getElementById('numero1').value;
            let resultadoDiv = document.getElementById('resultado');
            const Split = numero1.split(" ") // Corregimos el método split
            let mayor = 0;
            for (let i = 0; i < Split.length; i++) { // Corregimos la condición del bucle
                if (parseInt(Split[i]) > mayor) { // Convertimos cada elemento a entero para comparar
                    mayor = parseInt(Split[i]); // Si encontramos un número mayor, lo asignamos como nuevo mayor
                }
            }
            resultadoDiv.textContent = 'El número mayor es: ' + mayor;
        });