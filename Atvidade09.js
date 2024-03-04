var compra = Number(prompt("Informe o valor da compra:"));

var desconto10 = compra * 10 / 100;
var novoPreco10 = compra - desconto10;

var desconto15 = compra * 15 / 100;
var novoPreco15 = compra - desconto15;

if (compra < 100) {
    console.log("Não recebe desconto");
} else if (compra >= 100 && compra < 500) {
    console.log("Desconto de 10%, você pagará: " + novoPreco10);
} else {
    console.log("Desconto de 15%, você pagará: " + novoPreco15);
}
