var num1 = 1;
var num2 = 0;
document.write('<h1> NUMEROS PARES DEL 1 AL 100 </h1>');
for (let num1 = 0; num1 <= 100; num1++) {
    if(num1%2 ==0){
        document.write(num1+' ')
    }
}
document.write('<hr>');
document.write('<h1> SUMA DEL 1 AL 100 </h1>');
for (let i = 1; i <= 100; i++) {
    num2 += i;
} 
document.write(num2);