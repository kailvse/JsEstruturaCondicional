var min = Number(prompt("Informe a quantidade de minutos usados: "));

        if(min < 100){
            var valor = 50;
        } else {
            var valor = min * 2;
        }

        document.write("O valor a ser pago é de: R$" + valor + " reais");