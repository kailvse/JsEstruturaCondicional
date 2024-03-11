var tempoServ = Number(prompt("Informe há quanto tempo você trabalha na empresa: "));
var sal = Number(prompt("Informe seu salário: "));

var bonusSal10 = sal * 10 / 100;
var bonusSal20 = sal * 20 / 100;

var novoSal;

if (tempoServ > 5) {
    novoSal = sal + bonusSal20;
    document.write("Você recebeu bônus de 20%, seu novo salário será: " + novoSal);
} else {
    novoSal = sal + bonusSal10;
    document.write("Você recebeu bônus de 10%, seu novo salário será: " + novoSal);
}
