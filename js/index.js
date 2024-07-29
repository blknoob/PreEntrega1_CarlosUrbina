let nombreUsuario = prompt("Hola... Ingresa tu Nombre");
let apellidoUsuario = prompt("Ingresa tu Apellido");
const ESPACIO = " ";

let operacion = prompt(
  nombreUsuario +
    ESPACIO +
    apellidoUsuario +
    ", quieres: 1.- Simular un Credito.  2.- Realizar una Operacion Matematica"
);

switch (operacion) {
  case "1":
    let resultado = 0;
    let interes = 0;
    const monto = parseInt(prompt("Ingrese monto"));
    const cuotas = parseInt(
      prompt(
        "Elige un numero de cuotas:  12 al 3% de interes,  24 al 5% de interes,  36 al 7% de ineteres"
      )
    );
    function calculoCredito(monto, cuotas) {
      for (let i = 1; i <= cuotas; i++) {
        resultado = (monto * interes) / cuotas;
        if (i == cuotas) {
          console.log(
            "Su credito se va a pagar en " + cuotas + " cuotas de " + resultado
          );
        }
      }
    }
    switch (cuotas) {
      case 12:
        interes = 3;
        calculoCredito(monto, cuotas);
        break;
      case 24:
        interes = 5;
        calculoCredito(monto, cuotas);
        break;
      case 36:
        interes = 7;
        calculoCredito(monto, cuotas);
        break;
      default:
        console.log("Numero de cuotas no valido");
    }
    break;

  case "2":
    let cifra = 0;
    let cantidadNumeros = parseInt(
      prompt("De cuantos numeros quiere realizar la operacion?")
    );
    let operadorNumeros = prompt(
      "Que operacion desea realizar: suma (+),  resta (-),  multiplicacion (*),  division (/)... Ingrese el operador "
    );
    if (operadorNumeros == "*") {
      cifra = 1;
    }
    if (operadorNumeros == "/") {
      cifra = 1;
    }

    for (let i = 1; i <= cantidadNumeros; i++) {
      let efectuarCifra = parseInt(prompt("Ingrese numero"));
      switch (operadorNumeros) {
        case "+":
          cifra = cifra + efectuarCifra;
          break;
        case "-":
          cifra = cifra - efectuarCifra;
          break;
        case "*":
          cifra = cifra * efectuarCifra;
          break;
        case "/":
          if (efectuarCifra != 0) {
            cifra = cifra / efectuarCifra;
          } else {
            console.error("No se puede dividir por 0");
          }
          break;
        default:
          console.log("no valido");
      }
      if (i == cantidadNumeros) {
        console.log("La operacion de los numeros es " + cifra);
      }
    }
    break;
  default:
    console.log("Numero no valido");
    break;
}
