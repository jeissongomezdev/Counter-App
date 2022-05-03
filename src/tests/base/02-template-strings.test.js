import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-strings.js", () => {
  test("getSaludo debe de retornar Hola Jeisson", () => {
    const nombre = "Jeisson";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
});
