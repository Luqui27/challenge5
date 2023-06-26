//Crear 3 variables y asignarles un valor numérico a las primeras dos, y mostrar por consola la suma, la resta, el producto,
//la división y observar si son par o no (de los primeros numeros)
let num1=parseInt(prompt("Ingresa el primer numero"))
let num2=parseInt(prompt("Ingresa el segundo numero"))
let num3
console.log("La suma es: ", num1+num2)
console.log("La resta es: ", num1-num2)
console.log("La multiplicacion es: ", num1*num2)
console.log("La division es: ", num1/num2)
if(num1%2==0 && num2%2==0){
    console.log("Los dos numeros ingresados son pares")
}else if(num1%2==0 && num2%2!=0){
    console.log("El primer numero es par y el segundo impar")
}else if(num1%2!=0 && num2%2==0){
    console.log("El primer numero es impar y el segundo par")
}else{
    console.log("Los dos numeros ingresados son impares")
}