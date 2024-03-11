var qtdConsumido = Number(prompt("Informe a quantidade de kWh consumidas: "));
        if(qtdConsumido <= 100){
            var valor = 50;
        } else{
            var valor = 50 + qtdConsumido * 1.50;
        }

        document.write("O valor a ser pago é: " + valor);