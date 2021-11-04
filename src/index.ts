let numero1 = Number(prompt(" ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}
if (esMultiplo(numero1, numero2)) {
  console.log(numero1, " es multiplo de", numero2);
} else {
  console.log(numero1, "no es multiplo de", numero2);
}
