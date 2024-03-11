var num = Number(prompt("Informe um numero: "));
        if(num % 5 == 0){
            document.write("Divisivel por 5");
            if(num % 3 == 0){
                document.write(" e divisivel por 3");
            }
        } else if (num % 3 == 0){
            document.write("Divisivel por 3");
        } else {
            document.write("Divisivel por nenhum")
        }