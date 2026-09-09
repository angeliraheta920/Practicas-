let kWh = 250;
const kw = 0.15;
let costoBase = kWh * kw;
let impuesto = costoBase * 0.1;
let costoTotal = costoBase + impuesto;

console.log("Consumo: " + kWh  + " kWh");
console.log("Costo sin impuesto: $" + costoBase.toFixed(2));
console.log("Impuesto (10%): $" + impuesto.toFixed(2));
console.log("Costo total a pagar: $" + costoTotal.toFixed(2));