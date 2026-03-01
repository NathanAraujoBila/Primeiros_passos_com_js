const precoCombustivel = 6.2;
const kmPorLitro = 18.5;
const distanciaEmKm = 1600;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
