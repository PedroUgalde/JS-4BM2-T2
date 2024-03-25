var num1 = 1;
var num2 = 0;
let i = 0;
document.write('<h1> NUMEROS PARES DEL 1 AL 100 </h1>');
while (num1<=100) {
    if(num1%2 ==0){
        document.write(num1+' ')
    }
    num1++;
}
document.write('<hr>');
document.write('<h1> SUMA DEL 1 AL 100 </h1>');
while (i<=100) {
    num2 += i;
    i++;
}
document.write(num2);