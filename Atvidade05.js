var lado1 = Number(prompt("Informe o lado A: "));
var lado2 = Number(prompt("Informe o lado B: "));
var lado3 = Number(prompt("Informe o lado C: "));

if (lado1 === lado2 && lado2 === lado3) {
    document.write("Seu triângulo é EQUILÁTERO.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    document.write("Seu triângulo é ISÓSCELES.");
} else {
    document.write("Seu triângulo é ESCALENO.");
}
