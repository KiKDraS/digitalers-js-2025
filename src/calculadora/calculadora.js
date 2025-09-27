export class Calculadora {
  constructor() {
    this.historial = [];
  }

  sumar(a, b) {
    const resultado = a + b;
    this.historial.push(`Suma: ${a} + ${b} = ${resultado}`);
    return resultado;
  }

  restar(a, b) {
    const resultado = a - b;
    this.historial.push(`Resta: ${a} + ${b} = ${resultado}`);
    return resultado;
  }
}
