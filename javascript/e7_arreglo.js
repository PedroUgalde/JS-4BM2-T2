
function bubbleSort (nums) {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i + 1]) {
        let j = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = j;
        bubbleSort(nums);
      }
    }
    return nums;
  }
  



const form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let numero1 = document.getElementById('numero1').value;
    let resultadoDiv = document.getElementById('resultado');
    const Split = numero1.split(" ") // Corregimos el método split
    let arr =[];
    
    for (let i = 0; i < Split.length; i++) { // Corregimos la condición del bucle
        arr.push(Split[i]);
    }
    bubbleSort(arr)
    resultadoDiv.textContent = 'arreglo: [' + arr +']';
});