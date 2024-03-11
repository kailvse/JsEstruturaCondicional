var velocidade = Number(prompt("Informe a velocidade do carro: "));

if (velocidade <= 60) {
    document.write("Limite permitido");
} else if (velocidade > 60 && velocidade <= 80) {
    document.write("Valor da multa é de R$50.00");
} else if (velocidade > 80 && velocidade <= 90) {
    document.write("Valor da multa é de R$100.00");
} else if (velocidade > 90) {
    document.write("Valor da multa é de R$200.00");
} else {
    document.write("Velocidade inválida");
}
c