import { Calculadora } from "../../src/calculadora/calculadora.js";

//test suite -> grupo de funciones para testar una funcionalidad
describe("Calculadora", () => {
  let calculadora;

  // beforeEach -> Se ejecuta antes de cada test
  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test("debería sumar correctamente", () => {
    // expect -> Permite declarar qué estamos esperando que pase
    let resultado = calculadora.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  test("debería restar correctamente", () => {
    // expect -> Permite declarar qué estamos esperando que pase
    let resultado = calculadora.restar(3, 2);
    expect(resultado).toBe(1);
  });
});
