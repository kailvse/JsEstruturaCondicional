var horas = Number(prompt("Informe o total de horas: "));
        
var valor;
if(horas >= 1 && horas <= 2){
    valor = horas * 5;
} else if (horas >= 3 && horas <= 5){
    valor = 10 + (horas-2) * 4;
} else {
    valor = 10 + 12 + (horas-5) * 3;
}

document.write("Valor a ser pago é de: R$" + valor + " reais");