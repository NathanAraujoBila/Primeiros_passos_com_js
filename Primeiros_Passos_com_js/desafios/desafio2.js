const precoEtanol = 4.65;
const precoGasolina = 6.15;
const kmPorLitro = 19;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosConsumidos * precoGasolina;
} else {
    valorGasto = litrosConsumidos * precoEtanol;
}

console.log("Combustível: " + tipoCombustivel);
console.log("Valor gasto: R$ " + valorGasto.toFixed(2));

