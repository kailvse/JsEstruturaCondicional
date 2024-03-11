var codProduto = Number(prompt("Informe o codigo do produto: "));
        var cat;
        if(codProduto >= 1 && codProduto <= 10){
            cat = "Alimentos";
        } else if(codProduto >= 11 && codProduto <= 20){
            cat = "Eletrônicos"
        } else if(codProduto >= 21 && codProduto <= 30){
            cat = "Vestuário"
        } else {
            cat = "Outros: categoria desconhecida";
        }

        document.write("A categoria do produto é: " + cat);